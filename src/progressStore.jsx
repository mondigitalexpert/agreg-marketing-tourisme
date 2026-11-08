import { useState } from 'react'
import { contentPages } from './content'

export const LEGACY_STORAGE_KEY='agreg-marketing-tourisme-progress-v1'
export const STORAGE_PREFIX='agreg-marketing-tourisme-progress-v2'
export const ACTIVE_PROFILE_KEY='agreg-marketing-tourisme-active-profile-v1'

export const PROFILES = [
  {id:'rachid',label:'Rachid'},
  {id:'sansan',label:'Sansan'}
]

export const emptyProgress=()=>({viewed:{},favorites:[],quiz:{},difficultCards:[],completedCases:[]})

export function profileStorageKey(profile){
  return STORAGE_PREFIX+':'+profile
}

export function loadActiveProfile(){
  try{
    const stored=localStorage.getItem(ACTIVE_PROFILE_KEY)
    return PROFILES.some(p=>p.id===stored)?stored:'rachid'
  }catch{
    return 'rachid'
  }
}

export function saveActiveProfile(profile){
  try{localStorage.setItem(ACTIVE_PROFILE_KEY,profile)}catch{}
}

export function loadProgress(profile='rachid'){
  try{
    const key=profileStorageKey(profile)
    const raw=localStorage.getItem(key)
    if(raw) return {...emptyProgress(),...JSON.parse(raw)}

    // Migration douce de l'ancien suivi unique vers Rachid uniquement.
    if(profile==='rachid'){
      const legacy=localStorage.getItem(LEGACY_STORAGE_KEY)
      if(legacy){
        const migrated={...emptyProgress(),...JSON.parse(legacy)}
        localStorage.setItem(key,JSON.stringify(migrated))
        return migrated
      }
    }

    return emptyProgress()
  }catch{
    return emptyProgress()
  }
}

export function useProgress(profile='rachid'){
  const [progress,setProgress]=useState(()=>loadProgress(profile))
  const updateProgress=(updater)=>{
    setProgress(prev=>{
      const next=typeof updater==='function'?updater(prev):updater
      try{localStorage.setItem(profileStorageKey(profile),JSON.stringify(next))}catch{}
      return next
    })
  }
  return [progress,updateProgress]
}

export function ProgressView({type,progress,profileLabel}){
  const quizEntries=Object.entries(progress.quiz||{})
  const favorites=progress.favorites||[]
  const difficult=progress.difficultCards||[]
  const cases=progress.completedCases||[]
  const viewedCount=Object.keys(progress.viewed||{}).length
  const totalAnswered=quizEntries.reduce((sum,[,r])=>sum+(r.answered||0),0)
  const totalCorrect=quizEntries.reduce((sum,[,r])=>sum+(r.correct||0),0)
  const rate=totalAnswered?Math.round(totalCorrect/totalAnswered*100):0
  const listTitle=(key)=>key.split('|')[1]||key

  const errorRows=[]
  quizEntries.forEach(([key,record])=>{
    const quiz=contentPages[key]?.quiz||[]
    Object.entries(record.answers||{}).forEach(([i,selected])=>{
      const q=quiz[Number(i)]
      if(q&&selected!==q.answer) errorRows.push({key,q:q.q,correct:q.choices[q.answer]})
    })
  })
  const mastered=quizEntries.filter(([,r])=>r.total&&r.answered===r.total&&(r.correct/r.total)>=.8)

  const stats=<div className="progress-stats">
    <div><strong>{viewedCount}</strong><span>fiches consultées</span></div>
    <div><strong>{quizEntries.length}</strong><span>quiz commencés</span></div>
    <div><strong>{rate}%</strong><span>bonnes réponses</span></div>
    <div><strong>{favorites.length}</strong><span>favoris</span></div>
    <div><strong>{difficult.length}</strong><span>flashcards à revoir</span></div>
    <div><strong>{cases.length}</strong><span>cas réalisés</span></div>
  </div>

  if(type==='overview') return <>{stats}<p className="progress-note">Suivi du profil <strong>{profileLabel}</strong>, enregistré uniquement dans ce navigateur.</p></>
  if(type==='results'||type==='quizHistory') return <div className="progress-list">
    {quizEntries.length?quizEntries.map(([key,r])=><div className="progress-row" key={key}><strong>{listTitle(key)}</strong><span>{r.correct}/{r.answered} bonnes réponses • {r.total} questions</span></div>):<p>Aucun QCM commencé pour {profileLabel}.</p>}
  </div>
  if(type==='errors'||type==='weak') return <div className="progress-list">
    {errorRows.length?errorRows.map((row,i)=><div className="progress-row" key={row.key+i}><strong>{row.q}</strong><span>Réponse correcte : {row.correct}</span></div>):<p>Aucune erreur QCM enregistrée pour {profileLabel}.</p>}
    {type==='weak'&&difficult.length>0&&<p className="progress-note">{difficult.length} flashcard(s) sont également marquées à revoir.</p>}
  </div>
  if(type==='mastered') return <div className="progress-list">
    {mastered.length?mastered.map(([key,r])=><div className="progress-row" key={key}><strong>{listTitle(key)}</strong><span>{Math.round(r.correct/r.total*100)} %</span></div>):<p>Aucun quiz terminé à au moins 80 % pour {profileLabel}.</p>}
  </div>
  if(type==='favorites') return <div className="progress-list">
    {favorites.length?favorites.map(key=><div className="progress-row" key={key}><strong>{listTitle(key)}</strong></div>):<p>Aucun favori enregistré pour {profileLabel}.</p>}
  </div>
  if(type==='cases') return <div className="progress-list">
    {cases.length?cases.map(key=><div className="progress-row" key={key}><strong>{listTitle(key)}</strong></div>):<p>Aucun cas marqué comme réalisé pour {profileLabel}.</p>}
  </div>
  if(type==='flashcards') return <div className="progress-list">
    {difficult.length?difficult.map(key=>{
      const split=key.lastIndexOf('::')
      const pageKey=key.slice(0,split)
      const index=Number(key.slice(split+2))
      const card=contentPages[pageKey]?.flashcards?.[index]
      return <div className="progress-row" key={key}><strong>{card?.front||listTitle(pageKey)}</strong><span>{card?.back||'Flashcard à revoir'}</span></div>
    }):<p>Aucune flashcard marquée à revoir pour {profileLabel}.</p>}
  </div>
  if(type==='review'){
    const pagesWithErrors=[...new Set(errorRows.map(r=>r.key))]
    const review=[...new Set([...pagesWithErrors,...favorites])]
    return <div className="progress-list">
      {review.length?review.map(key=><div className="progress-row" key={key}><strong>{listTitle(key)}</strong><span>{pagesWithErrors.includes(key)?'Erreurs à corriger':'Favori à réviser'}</span></div>):<p>Rien n’est prioritaire pour {profileLabel} pour l’instant.</p>}
      {difficult.length>0&&<p className="progress-note">+ {difficult.length} flashcard(s) marquées à revoir.</p>}
    </div>
  }
  return stats
}
