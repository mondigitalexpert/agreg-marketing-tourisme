import React from 'react'
import { mediaByPage } from './mediaResources'

export function CorrectionsBlock({items=[]}){
  if(!items.length) return null
  return <section className="content-block corrections-block">
    <div className="corrections-heading">
      <div>
        <span className="section-kicker">CORRECTION PROPOSÉE</span>
        <h3>Comparer après avoir essayé</h3>
      </div>
      <p>Il peut exister plusieurs bonnes réponses. Les propositions ci-dessous montrent un raisonnement possible et les éléments attendus.</p>
    </div>

    <div className="correction-framework">
      <div><strong>1. Repérer</strong><span>Les faits, données et mots-clés de la consigne.</span></div>
      <div><strong>2. Choisir</strong><span>Les notions ou modèles qui expliquent réellement le problème.</span></div>
      <div><strong>3. Appliquer</strong><span>Le cadre au cas, sans réciter le cours.</span></div>
      <div><strong>4. Justifier</strong><span>Les recommandations par les données, mécanismes et KPI.</span></div>
    </div>
    <div className="correction-list">
      {items.map((item,index)=><details className="correction-item" key={item.title+index}>
        <summary>
          <span className="correction-number">{String(index+1).padStart(2,'0')}</span>
          <strong>{item.title}</strong>
          <span className="correction-open">Voir la proposition</span>
        </summary>
        <div className="correction-body">
          {item.text&&<p>{item.text}</p>}
          {item.bullets?.length>0&&<ul>{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul>}
          <div className="correction-selfcheck">
            <strong>Autoévaluation</strong>
            <span>Ai-je expliqué le mécanisme ? Ai-je appliqué la notion au cas ? Ai-je distingué faits et hypothèses ? Mes recommandations sont-elles mesurables ?</span>
          </div>
        </div>
      </details>)}
    </div>
  </section>
}

export function MediaResourcesBlock({pageKey,page}){
  const videos=mediaByPage[pageKey]||[]
  const provided=page?.providedResources||[]
  if(!videos.length&&!provided.length) return null

  return <section className="content-block media-resources-block">
    <div className="media-heading">
      <div>
        <span className="section-kicker">MÉDIAS & RESSOURCES</span>
        <h3>{provided.length?'Ressources fournies et vidéos recommandées':'Vidéos pour ancrer la notion'}</h3>
      </div>
      <p>À utiliser comme complément : la vidéo aide à comprendre et mémoriser, mais ne remplace pas le cours ni les sources de référence.</p>
    </div>

    {videos.length>0&&<div className="video-grid">
      {videos.map(video=><a className="video-card" key={video.url} href={video.url} target="_blank" rel="noreferrer">
        <div className="video-thumb">
          <img src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`} alt="" loading="lazy"/>
          <span className="video-play" aria-hidden>▶</span>
        </div>
        <div className="video-copy">
          <span className="video-channel">{video.channel}</span>
          <strong>{video.title}</strong>
          <p>{video.note}</p>
          <div className="video-meta">
            {video.popularity&&<span>{video.popularity}</span>}
            {video.checked&&<span>Vérifié le {video.checked}</span>}
          </div>
        </div>
      </a>)}
    </div>}

    {provided.length>0&&<div className="provided-resources">
      <h4>Ressources fournies dans le corpus</h4>
      <div className="provided-grid">
        {provided.map((resource,index)=><article className="provided-card" key={resource.title+index}>
          <span>{resource.type}</span>
          <strong>{resource.title}</strong>
          <p>{resource.usage}</p>
        </article>)}
      </div>
    </div>}
  </section>
}


export function ExerciseMetaBlock({meta}){
  if(!meta) return null
  return <section className="exercise-meta-block" aria-label="Cadre de l'exercice">
    <div className="exercise-meta-main">
      <span className="section-kicker">AVANT DE COMMENCER</span>
      <h3>{meta.objective}</h3>
    </div>
    <div className="exercise-meta-grid">
      <div><span>Temps conseillé</span><strong>{meta.time}</strong></div>
      <div><span>Difficulté</span><strong>{meta.difficulty}</strong></div>
      {meta.step&&<div><span>Étape de progression</span><strong>{meta.step}/8</strong></div>}
      <div className="exercise-skills"><span>Compétences</span><p>{(meta.skills||[]).join(' • ')}</p></div>
    </div>
  </section>
}

export function CaseEvidenceBlock({meta}){
  if(!meta) return null
  const groups=[
    ['Faits établis',meta.facts,'fact'],
    ['Interprétations possibles',meta.interpretations,'interpretation'],
    ['Hypothèses à vérifier',meta.hypotheses,'hypothesis']
  ]
  return <section className="case-evidence-block">
    <div className="case-evidence-head">
      <div><span className="section-kicker">RAISONNER SUR LES PREUVES</span><h3>Faits, interprétations et hypothèses</h3></div>
      <div className="case-meta-inline"><span>{meta.time}</span><span>{meta.difficulty}</span></div>
    </div>
    <div className="case-evidence-grid">
      {groups.map(([title,items,type])=><article className={'case-evidence-card '+type} key={title}>
        <h4>{title}</h4>
        <ul>{(items||[]).map(item=><li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
    <div className="case-skills">Compétences travaillées : {(meta.skills||[]).join(' • ')}</div>
  </section>
}
