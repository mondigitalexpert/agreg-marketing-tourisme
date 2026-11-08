import React, { useEffect, useState } from 'react'
import { contentPages } from './content'
import { ProgressView } from './progressStore'
import LearningVisual, { DeepLearningVisual } from './LearningVisual'
import { getDeepVisualsForPage } from './visuals'

function QuizBlock({items,pageKey,progress,onProgress,activity}){
  const stored=progress.quiz?.[pageKey]?.answers||{}
  const [answers,setAnswers]=useState(stored)

  const answer=(index,choiceIndex)=>{
    if(answers[index]!==undefined) return
    const next={...answers,[index]:choiceIndex}
    setAnswers(next)
    const answered=Object.keys(next).length
    const correct=Object.entries(next).filter(([i,value])=>items[Number(i)]?.answer===value).length
    onProgress(prev=>({
      ...prev,
      quiz:{...prev.quiz,[pageKey]:{answers:next,answered,correct,total:items.length,lastAt:new Date().toISOString()}},
      lastActivity:{...activity,action:'QCM',updatedAt:new Date().toISOString()}
    }))
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

function FlashcardBlock({items,pageKey,progress,onProgress,activity}){
  const [revealed,setRevealed]=useState({})
  const hardKeys=new Set(progress.difficultCards||[])

  const reveal=(index)=>{
    setRevealed(prev=>({...prev,[index]:!prev[index]}))
    onProgress(prev=>({...prev,lastActivity:{...activity,action:'Flashcards',updatedAt:new Date().toISOString()}}))
  }

  const toggleHard=(index)=>{
    const key=pageKey+'::'+index
    onProgress(prev=>{
      const set=new Set(prev.difficultCards||[])
      set.has(key)?set.delete(key):set.add(key)
      return {
        ...prev,
        difficultCards:[...set],
        lastActivity:{...activity,action:'Flashcards',updatedAt:new Date().toISOString()}
      }
    })
  }

  return <div className="flash-grid">{items.map((card,index)=>{
    const key=pageKey+'::'+index
    const hard=hardKeys.has(key)
    return <article className="flash-card" key={card.front}>
      <button className="flash-main" onClick={()=>reveal(index)}>
        <span className="flash-label">{revealed[index]?'RÉPONSE':'QUESTION'}</span>
        <strong>{revealed[index]?card.back:card.front}</strong>
        <small>{revealed[index]?'Cliquer pour masquer':'Cliquer pour révéler'}</small>
      </button>
      <button className={'hard-button '+(hard?'active':'')} onClick={()=>toggleHard(index)}>{hard?'✓ À revoir':'Marquer à revoir'}</button>
    </article>
  })}</div>
}

export default function DetailPage({
  section,
  entry,
  onBack,
  profileLabel,
  progress,
  updateProgress,
  syncState='local',
  backLabel
}){
  const pageKey=section.id+'|'+entry.title
  const page=contentPages[pageKey]
  const deepVisuals=getDeepVisualsForPage(pageKey)
  const activity={
    pageKey,
    sectionId:section.id,
    sectionTitle:section.title,
    entryTitle:entry.title,
    entryIcon:entry.icon
  }

  useEffect(()=>{
    updateProgress(prev=>{
      const next={
        ...prev,
        viewed:{...prev.viewed,[pageKey]:new Date().toISOString()}
      }
      if(section.id!=='progression'){
        next.lastActivity={...activity,action:'Consultation',updatedAt:new Date().toISOString()}
      }
      return next
    })
  },[pageKey])

  if(!page) return <div className="detail-page"><button className="back" onClick={onBack}>← {backLabel||('Retour à '+section.title)}</button><div className="placeholder-note">Cette fiche n’est pas disponible. Aucun contenu non vérifié n’est substitué.</div></div>

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
    return {
      ...prev,
      completedCases:[...set],
      lastActivity:{...activity,action:set.has(pageKey)?'Cas réalisé':'Cas consulté',updatedAt:new Date().toISOString()}
    }
  })

  return <div className="detail-page">
    <button className="back" onClick={onBack}>← {backLabel||('Retour à '+section.title)}</button>
    <header className="detail-hero" style={{'--tile':section.color}}>
      <div className="detail-icon" aria-hidden>{entry.icon}</div>
      <div>
        <div className="detail-meta-row"><div className="detail-label-group"><span className="detail-label">{page.label}</span><span className="profile-chip">Profil : {profileLabel}</span><span className={'sync-chip '+syncState}>{syncState==='cloud'?'☁ Synchronisé':syncState==='loading'?'↻ Synchronisation':syncState==='error'?'⚠ Local':'Appareil local'}</span></div><button className={'favorite-button '+(isFavorite?'active':'')} onClick={toggleFavorite}>{isFavorite?'★ Favori':'☆ Ajouter aux favoris'}</button></div>
        <h2>{page.title}</h2><p>{page.intro}</p>
        {section.id==='cas'&&<button className={'case-done '+(isCaseDone?'active':'')} onClick={toggleCase}>{isCaseDone?'✓ Cas réalisé':'Marquer le cas comme réalisé'}</button>}
      </div>
    </header>

    <LearningVisual pageKey={pageKey} sectionId={section.id} page={page}/>

    {page.objectives?.length>0&&<section className="content-block course-objectives"><h3>Objectifs du cours</h3><div className="objective-grid">{page.objectives.map((objective,i)=><div className="objective-card" key={objective}><span>{String(i+1).padStart(2,'0')}</span><p>{objective}</p></div>)}</div></section>}

    {page.keyPoints?.length>0&&<section className="content-block"><h3>Repères essentiels</h3><div className="key-grid">{page.keyPoints.map((point,i)=><div className="key-card" key={point}><span>{String(i+1).padStart(2,'0')}</span><p>{point}</p></div>)}</div></section>}

    {page.sections?.length>0&&<section className="content-block"><h3>{section.id==='cours'?'Le cours':'Approfondir'}</h3><div className="reading-stack">{page.sections.map((item,index)=><React.Fragment key={item.heading}>
      <article className="reading-card course-chapter">
        <h4>{item.heading}</h4>
        {item.text&&<p>{item.text}</p>}
        {item.bullets?.length>0&&<ul className="course-bullets">{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul>}
        {item.formula&&<div className="formula-box">{item.formula}</div>}
        {item.example&&<div className="example-box"><strong>Exemple</strong><span>{item.example}</span></div>}
      </article>
      {deepVisuals.filter(v=>v.after===index).map((visual,i)=><DeepLearningVisual key={visual.title+i} visual={visual}/>)}
    </React.Fragment>)}</div></section>}

    {page.recap?.length>0&&<section className="content-block recap-block"><h3>Synthèse du chapitre</h3><div className="recap-grid">{page.recap.map(item=><div className="recap-item" key={item}><span>✓</span><p>{item}</p></div>)}</div></section>}

    {page.examTips?.length>0&&<section className="content-block exam-block"><h3>À savoir faire au concours</h3><div className="exam-list">{page.examTips.map((tip,i)=><div className="exam-item" key={tip}><span>{String(i+1).padStart(2,'0')}</span><p>{tip}</p></div>)}</div></section>}
    {page.quiz?.length>0&&<section className="content-block"><h3>S’entraîner</h3><QuizBlock items={page.quiz} pageKey={pageKey} progress={progress} onProgress={updateProgress} activity={activity}/></section>}
    {page.flashcards?.length>0&&<section className="content-block"><h3>Flashcards</h3><FlashcardBlock items={page.flashcards} pageKey={pageKey} progress={progress} onProgress={updateProgress} activity={activity}/></section>}
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
