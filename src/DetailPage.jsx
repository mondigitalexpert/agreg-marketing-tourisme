import React, { useEffect, useState } from 'react'
import { contentPages } from './content'
import { ProgressView, useProgress } from './progressStore'

function QuizBlock({items,pageKey,progress,onProgress}){
  const stored=progress.quiz?.[pageKey]?.answers||{}
  const [answers,setAnswers]=useState(stored)

  const answer=(index,choiceIndex)=>{
    if(answers[index]!==undefined) return
    const next={...answers,[index]:choiceIndex}
    setAnswers(next)
    const answered=Object.keys(next).length
    const correct=Object.entries(next).filter(([i,value])=>items[Number(i)]?.answer===value).length
    onProgress(prev=>({...prev,quiz:{...prev.quiz,[pageKey]:{answers:next,answered,correct,total:items.length,lastAt:new Date().toISOString()}}}))
  }

  return <div className="quiz-list">{items.map((q,index)=>{
    const selected=answers[index]
    const hasAnswered=selected!==undefined
    return <article className="quiz-card" key={q.q}>
      <div className="quiz-question"><span>{String(index+1).padStart(2,'0')}</span>{q.q}</div>
      <div className="quiz-choices">{q.choices.map((choice,choiceIndex)=>{
        const correct=hasAnswered&&choiceIndex===q.answer
        const wrong=hasAnswered&&choiceIndex===selected&&selected!==q.answer
        return <button key={choice} className={'quiz-choice '+(correct?'correct ':'')+(wrong?'wrong':'')} onClick={()=>answer(index,choiceIndex)} disabled={hasAnswered}>
          <span className="choice-letter">{String.fromCharCode(65+choiceIndex)}</span><span>{choice}</span>
        </button>
      })}</div>
      {hasAnswered&&<div className={'quiz-feedback '+(selected===q.answer?'ok':'ko')}><strong>{selected===q.answer?'Bonne réponse.':'À revoir.'}</strong> {q.explanation}</div>}
    </article>
  })}</div>
}

function FlashcardBlock({items,pageKey,progress,onProgress}){
  const [revealed,setRevealed]=useState({})
  const hardKeys=new Set(progress.difficultCards||[])
  const toggleHard=(index)=>{
    const key=pageKey+'::'+index
    onProgress(prev=>{
      const set=new Set(prev.difficultCards||[])
      set.has(key)?set.delete(key):set.add(key)
      return {...prev,difficultCards:[...set]}
    })
  }

  return <div className="flash-grid">{items.map((card,index)=>{
    const key=pageKey+'::'+index
    const hard=hardKeys.has(key)
    return <article className="flash-card" key={card.front}>
      <button className="flash-main" onClick={()=>setRevealed(prev=>({...prev,[index]:!prev[index]}))}>
        <span className="flash-label">{revealed[index]?'RÉPONSE':'QUESTION'}</span>
        <strong>{revealed[index]?card.back:card.front}</strong>
        <small>{revealed[index]?'Cliquer pour masquer':'Cliquer pour révéler'}</small>
      </button>
      <button className={'hard-button '+(hard?'active':'')} onClick={()=>toggleHard(index)}>{hard?'✓ À revoir':'Marquer à revoir'}</button>
    </article>
  })}</div>
}

export default function DetailPage({section,entry,onBack,profile,profileLabel,userId=null}){
  const pageKey=section.id+'|'+entry.title
  const page=contentPages[pageKey]
  const [progress,updateProgress,syncState]=useProgress(profile,userId)

  useEffect(()=>{
    updateProgress(prev=>({...prev,viewed:{...prev.viewed,[pageKey]:new Date().toISOString()}}))
  },[pageKey])

  if(!page) return <div className="detail-page"><button className="back" onClick={onBack}>← Retour à {section.title}</button><div className="placeholder-note">Cette fiche n’est pas disponible. Aucun contenu non vérifié n’est substitué.</div></div>

  const isFavorite=(progress.favorites||[]).includes(pageKey)
  const isCaseDone=(progress.completedCases||[]).includes(pageKey)

  const toggleFavorite=()=>updateProgress(prev=>{
    const set=new Set(prev.favorites||[])
    set.has(pageKey)?set.delete(pageKey):set.add(pageKey)
    return {...prev,favorites:[...set]}
  })
  const toggleCase=()=>updateProgress(prev=>{
    const set=new Set(prev.completedCases||[])
    set.has(pageKey)?set.delete(pageKey):set.add(pageKey)
    return {...prev,completedCases:[...set]}
  })

  return <div className="detail-page">
    <button className="back" onClick={onBack}>← Retour à {section.title}</button>
    <header className="detail-hero" style={{'--tile':section.color}}>
      <div className="detail-icon" aria-hidden>{entry.icon}</div>
      <div>
        <div className="detail-meta-row"><div className="detail-label-group"><span className="detail-label">{page.label}</span><span className="profile-chip">Profil : {profileLabel}</span><span className={'sync-chip '+syncState}>{syncState==='cloud'?'☁ Synchronisé':syncState==='loading'?'↻ Synchronisation':syncState==='error'?'⚠ Local':'Appareil local'}</span></div><button className={'favorite-button '+(isFavorite?'active':'')} onClick={toggleFavorite}>{isFavorite?'★ Favori':'☆ Ajouter aux favoris'}</button></div>
        <h2>{page.title}</h2><p>{page.intro}</p>
        {section.id==='cas'&&<button className={'case-done '+(isCaseDone?'active':'')} onClick={toggleCase}>{isCaseDone?'✓ Cas réalisé':'Marquer le cas comme réalisé'}</button>}
      </div>
    </header>

    {page.keyPoints?.length>0&&<section className="content-block"><h3>À retenir</h3><div className="key-grid">{page.keyPoints.map((point,i)=><div className="key-card" key={point}><span>{String(i+1).padStart(2,'0')}</span><p>{point}</p></div>)}</div></section>}
    {page.sections?.length>0&&<section className="content-block"><h3>Approfondir</h3><div className="reading-stack">{page.sections.map(s=><article className="reading-card" key={s.heading}><h4>{s.heading}</h4><p>{s.text}</p></article>)}</div></section>}
    {page.quiz?.length>0&&<section className="content-block"><h3>S’entraîner</h3><QuizBlock items={page.quiz} pageKey={pageKey} progress={progress} onProgress={updateProgress}/></section>}
    {page.flashcards?.length>0&&<section className="content-block"><h3>Flashcards</h3><FlashcardBlock items={page.flashcards} pageKey={pageKey} progress={progress} onProgress={updateProgress}/></section>}
    {page.progressType&&<section className="content-block"><h3>Données enregistrées</h3><ProgressView type={page.progressType} progress={progress} profileLabel={profileLabel} syncState={syncState}/></section>}

    {page.sources?.length>0&&<section className="content-block sources-block">
      <div className="sources-heading"><div><span className="detail-label">TRAÇABILITÉ</span><h3>Sources</h3></div><span className="verified-chip">Sources identifiées</span></div>
      <div className="source-list">{page.sources.map((source,i)=><div className="source-card" key={source.name+i}><span className="source-type">{source.type}</span><div>
        {source.url?<a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a>:<strong>{source.name}</strong>}
        {source.checked&&<small>Vérifié le {source.checked}</small>}{source.note&&<small>{source.note}</small>}
      </div></div>)}</div>
    </section>}
  </div>
}
