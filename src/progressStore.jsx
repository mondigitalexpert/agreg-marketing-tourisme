import { useEffect, useState } from 'react'
import { contentPages } from './content'
import { loadRemoteProgress, saveRemoteProgress } from './remoteProgress'

export const LEGACY_STORAGE_KEY='agreg-marketing-tourisme-progress-v1'
export const STORAGE_PREFIX='agreg-marketing-tourisme-progress-v2'
export const ACTIVE_PROFILE_KEY='agreg-marketing-tourisme-active-profile-v1'

export const PROFILES = [
  {id:'rachid',label:'Rachid'},
  {id:'sansan',label:'Sansan'}
]

export const emptyProgress=()=>({viewed:{},favorites:[],quiz:{},difficultCards:[],completedCases:[],lastActivity:null})

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

export function loadLocalProgress(profile='rachid'){
  try{
    const key=profileStorageKey(profile)
    const raw=localStorage.getItem(key)
    if(raw) return {...emptyProgress(),...JSON.parse(raw)}

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

export function useProgress(profile='rachid',userId=null){
  const [progress,setProgress]=useState(()=>loadLocalProgress(profile))
  const [syncState,setSyncState]=useState(userId?'loading':'local')

  useEffect(()=>{
    let cancelled=false

    async function hydrate(){
      if(!userId){
        setProgress(loadLocalProgress(profile))
        setSyncState('local')
        return
      }

      setSyncState('loading')
      try{
        const remote=await loadRemoteProgress(userId)
        if(cancelled) return

        if(remote){
          const normalized={...emptyProgress(),...remote}
          setProgress(normalized)
          try{localStorage.setItem(profileStorageKey(profile),JSON.stringify(normalized))}catch{}
        }else{
          const local=loadLocalProgress(profile)
          await saveRemoteProgress(userId,local)
          if(cancelled) return
          setProgress(local)
        }
        setSyncState('cloud')
      }catch{
        if(cancelled) return
        setProgress(loadLocalProgress(profile))
        setSyncState('error')
      }
    }

    hydrate()
    return ()=>{cancelled=true}
  },[profile,userId])

  const updateProgress=(updater)=>{
    setProgress(prev=>{
      const next=typeof updater==='function'?updater(prev):updater
      try{localStorage.setItem(profileStorageKey(profile),JSON.stringify(next))}catch{}
      if(userId){
        saveRemoteProgress(userId,next)
          .then(()=>setSyncState('cloud'))
          .catch(()=>setSyncState('error'))
      }
      return next
    })
  }

  return [progress,updateProgress,syncState]
}

export function ProgressView({type,progress,profileLabel,syncState='local'}){
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

  const syncLabel=syncState==='cloud'?'Synchronisé en ligne':syncState==='loading'?'Synchronisation…':syncState==='error'?'Synchronisation indisponible — copie locale conservée':'Enregistré sur cet appareil'

  const stats=<div className="progress-stats">
    <div><strong>{viewedCount}</strong><span>fiches consultées</span></div>
    <div><strong>{quizEntries.length}</strong><span>quiz commencés</span></div>
    <div><strong>{rate}%</strong><span>bonnes réponses</span></div>
    <div><strong>{favorites.length}</strong><span>favoris</span></div>
    <div><strong>{difficult.length}</strong><span>flashcards à revoir</span></div>
    <div><strong>{cases.length}</strong><span>cas réalisés</span></div>
  </div>

  if(type==='overview') return <>{stats}<p className="progress-note">Profil <strong>{profileLabel}</strong> • {syncLabel}.</p></>
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
