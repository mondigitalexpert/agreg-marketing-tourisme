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
