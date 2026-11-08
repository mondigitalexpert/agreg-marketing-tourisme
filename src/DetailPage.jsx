import React, { useEffect, useState } from 'react'
import { contentPages } from './content'
import { ProgressView } from './progressStore'
import LearningVisual, { DeepLearningVisual } from './LearningVisual'
import { getDeepVisualsForPage } from './visuals'
import { authorProfiles } from './content/authors'
import { CorrectionsBlock, MediaResourcesBlock, ExerciseMetaBlock, CaseEvidenceBlock } from './StudySupport'

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

function PageToc({page}){
  const chapters=(page.sections||[]).map((item,index)=>({label:String(item.heading).replace(/^\d+\.\s*/,''),id:'chapter-'+(index+1)}))
  if(chapters.length<4) return null
  const go=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})
  return <nav className="page-toc" aria-label="Sommaire de la fiche">
    <div className="page-toc-head"><span className="section-kicker">SOMMAIRE</span><strong>Accès rapide</strong></div>
    <div className="page-toc-links">
      {chapters.map((item,index)=><button key={item.id} type="button" onClick={()=>go(item.id)}><span>{String(index+1).padStart(2,'0')}</span>{item.label}</button>)}
      {page.corrections?.length>0&&<button type="button" onClick={()=>go('page-corrections')}><span>✓</span>Correction</button>}
      {page.sources?.length>0&&<button type="button" onClick={()=>go('page-sources')}><span>↗</span>Sources</button>}
    </div>
  </nav>
}

function AuthorDirectory({keys}){
  const [selected,setSelected]=useState(null)
  const selectedProfile=selected?authorProfiles[selected]:null

  useEffect(()=>{
    if(!selectedProfile) return
    const previousOverflow=document.body.style.overflow
    document.body.style.overflow='hidden'

    const onKeyDown=(event)=>{
      if(event.key==='Escape') setSelected(null)
    }
    window.addEventListener('keydown',onKeyDown)

    return ()=>{
      document.body.style.overflow=previousOverflow
      window.removeEventListener('keydown',onKeyDown)
    }
  },[selectedProfile])

  return <section className="content-block author-directory">
    <div className="section-label-row author-directory-heading">
      <div>
        <span className="section-kicker">FICHES AUTEURS</span>
        <h3>Auteurs et modèles à mobiliser</h3>
      </div>
      <p>Clique sur un auteur pour ouvrir sa fiche synthétique et ses ressources externes.</p>
    </div>

    <div className="author-card-grid">
      {keys.map(key=>{
        const author=authorProfiles[key]
        if(!author) return null
        return <button
          className={'author-card '+(selected===key?'active':'')}
          key={key}
          onClick={()=>setSelected(key)}
          aria-haspopup="dialog"
        >
          <span className="author-card-icon" aria-hidden>{author.icon}</span>
          <span className="author-card-copy">
            <strong>{author.name}</strong>
            <small>{author.years}</small>
            <span>{author.oneLine}</span>
          </span>
          <span className="author-card-arrow" aria-hidden>→</span>
        </button>
      })}
    </div>

    {selectedProfile&&<div
      className="author-modal-backdrop"
      onMouseDown={(event)=>{if(event.target===event.currentTarget)setSelected(null)}}
      role="presentation"
    >
      <article
        className="author-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="author-modal-title"
      >
        <div className="author-modal-toolbar">
          <span className="author-modal-kicker">FICHE AUTEUR</span>
          <button className="author-modal-close" onClick={()=>setSelected(null)} aria-label="Fermer la fiche auteur">×</button>
        </div>

        <div className="author-profile-head">
          <div className="author-profile-icon" aria-hidden>{selectedProfile.icon}</div>
          <div>
            <span className="section-kicker">{selectedProfile.years}</span>
            <h3 id="author-modal-title">{selectedProfile.name}</h3>
            <p>{selectedProfile.oneLine}</p>
          </div>
        </div>

        <div className="author-profile-grid">
          <section>
            <h4>Concepts à retenir</h4>
            <div className="author-chip-list">{selectedProfile.concepts.map(item=><span key={item}>{item}</span>)}</div>
          </section>
          <section>
            <h4>Quand le mobiliser</h4>
            <div className="author-use-list">{selectedProfile.useCases.map(item=><div key={item}>→ {item}</div>)}</div>
          </section>
        </div>

        <div className="author-note-grid">
          <div className="author-note exam">
            <span>CONCOURS</span>
            <p>{selectedProfile.exam}</p>
          </div>
          <div className="author-note limits">
            <span>LIMITES</span>
            <p>{selectedProfile.limits}</p>
          </div>
        </div>
        {selectedProfile.example&&<div className="author-copy-example">
          <span>EXEMPLE DE MOBILISATION DANS UNE COPIE</span>
          <p>{selectedProfile.example}</p>
        </div>}

        <div className="author-links">
          <h4>Pour aller plus loin</h4>
          <div className="author-link-grid">
            {selectedProfile.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              <span>{link.type}</span>
              <strong>{link.label}</strong>
              <i aria-hidden>↗</i>
            </a>)}
          </div>
        </div>
      </article>
    </div>}
  </section>
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
  const hasExerciseSection=Boolean(page?.sections?.some(item=>/^Exercice/i.test(String(item.heading))))
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

    <PageToc page={page}/>
    <LearningVisual pageKey={pageKey} sectionId={section.id} page={page}/>

    {page.caseMeta&&<CaseEvidenceBlock meta={page.caseMeta}/>} 
    {page.trainingMeta&&!hasExerciseSection&&<ExerciseMetaBlock meta={page.trainingMeta}/>} 
    {page.authorKeys?.length>0&&<AuthorDirectory keys={page.authorKeys}/>} 

    {page.objectives?.length>0&&<section className="content-block course-objectives"><h3>Objectifs du cours</h3><div className="objective-grid">{page.objectives.map((objective,i)=><div className="objective-card" key={objective}><span>{String(i+1).padStart(2,'0')}</span><p>{objective}</p></div>)}</div></section>}

    {page.keyPoints?.length>0&&<section className="content-block"><h3>Repères essentiels</h3><div className="key-grid">{page.keyPoints.map((point,i)=><div className="key-card" key={point}><span>{String(i+1).padStart(2,'0')}</span><p>{point}</p></div>)}</div></section>}

    {page.sections?.length>0&&<section className="content-block"><h3>{section.id==='cours'?'Le cours':'Approfondir'}</h3><div className="reading-stack">{page.sections.map((item,index)=><React.Fragment key={item.heading}>
      {/^(Exercice)/i.test(String(item.heading))&&page.trainingMeta&&<ExerciseMetaBlock meta={page.trainingMeta}/>}
      <article className="reading-card course-chapter" id={'chapter-'+(index+1)}>
        <h4>{item.heading}</h4>
        {item.text&&<p>{item.text}</p>}
        {item.bullets?.length>0&&<ul className="course-bullets">{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul>}
        {item.formula&&<div className="formula-box">{item.formula}</div>}
        {item.example&&<div className="example-box"><strong>Exemple</strong><span>{item.example}</span></div>}
      </article>
      {deepVisuals.filter(v=>v.after===index).map((visual,i)=><DeepLearningVisual key={visual.title+i} visual={visual} pageKey={pageKey} page={page}/>)}
    </React.Fragment>)}</div></section>}

    {page.recap?.length>0&&<section className="content-block recap-block"><h3>Synthèse du chapitre</h3><div className="recap-grid">{page.recap.map(item=><div className="recap-item" key={item}><span>✓</span><p>{item}</p></div>)}</div></section>}

    {page.examTips?.length>0&&<section className="content-block exam-block"><h3>À savoir faire au concours</h3><div className="exam-list">{page.examTips.map((tip,i)=><div className="exam-item" key={tip}><span>{String(i+1).padStart(2,'0')}</span><p>{tip}</p></div>)}</div></section>}

    <div id="page-corrections"><CorrectionsBlock items={page.corrections||[]}/></div>
    <MediaResourcesBlock pageKey={pageKey} page={page}/>

    {page.quiz?.length>0&&<section className="content-block"><h3>S’entraîner</h3><QuizBlock items={page.quiz} pageKey={pageKey} progress={progress} onProgress={updateProgress} activity={activity}/></section>}
    {page.flashcards?.length>0&&<section className="content-block"><h3>Flashcards</h3><FlashcardBlock items={page.flashcards} pageKey={pageKey} progress={progress} onProgress={updateProgress} activity={activity}/></section>}
    {page.progressType&&<section className="content-block"><h3>Données enregistrées</h3><ProgressView type={page.progressType} progress={progress} profileLabel={profileLabel} syncState={syncState}/></section>}

    {page.sources?.length>0&&<section className="content-block sources-block" id="page-sources">
      <div className="sources-heading"><div><span className="detail-label">TRAÇABILITÉ</span><h3>Sources</h3></div><span className="verified-chip">Sources identifiées</span></div>
      <div className="source-list">{page.sources.map((source,i)=><div className="source-card" key={source.name+i}><span className="source-type">{source.type}</span><div>
        {source.url?<a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a>:<strong>{source.name}</strong>}
        {source.checked&&<small>Vérifié le {source.checked}</small>}{source.note&&<small>{source.note}</small>}
      </div></div>)}</div>
    </section>}
  </div>
}
