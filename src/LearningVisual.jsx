import React, { useEffect, useState } from 'react'
import { getVisualForPage } from './visuals'
import { findInteractiveDetail } from './content/modelDetails'

function Flow({visual}){
  return <div className={'visual-flow '+(visual.kind==='cycle'?'cycle':'')}>
    {visual.nodes.map((node,i)=><React.Fragment key={node+i}>
      <div className="visual-node"><span>{String(i+1).padStart(2,'0')}</span><strong>{node}</strong></div>
      {i<visual.nodes.length-1&&<div className="visual-arrow" aria-hidden>→</div>}
    </React.Fragment>)}
  </div>
}

function Triangle({visual}){
  return <div className="visual-triangle">
    <div className="triangle-node top">{visual.nodes[0]}</div>
    <div className="triangle-node left">{visual.nodes[1]}</div>
    <div className="triangle-node right">{visual.nodes[2]}</div>
    <div className="triangle-center">{visual.center}</div>
  </div>
}

function Split({visual}){
  return <div className="visual-split">
    <div className="split-side"><strong>{visual.left[0]}</strong>{visual.left.slice(1).map(x=><span key={x}>{x}</span>)}</div>
    <div className="split-center">{visual.center}</div>
    <div className="split-side"><strong>{visual.right[0]}</strong>{visual.right.slice(1).map(x=><span key={x}>{x}</span>)}</div>
  </div>
}

function Funnel({visual}){
  return <div className="visual-funnel">
    {visual.nodes.map((node,i)=><div className="funnel-step" key={node} style={{'--level':i}}><span>{node}</span></div>)}
  </div>
}

function Layers({visual}){
  return <div className="visual-layers">
    {visual.nodes.map((node,i)=><div className="layer-row" key={node}><span>{i+1}</span><strong>{node}</strong></div>)}
  </div>
}

function Concept({visual}){
  return <div className="visual-concept">
    <div className="concept-center">À retenir</div>
    <div className="concept-nodes">{visual.nodes.map((node,i)=><div className="concept-node" key={node+i}>{node}</div>)}</div>
  </div>
}

function SourcePyramid({visual}){
  return <div className="source-pyramid">
    {visual.nodes.map((node,i)=><div className={'source-level level-'+i} key={node}>{node}</div>)}
  </div>
}

function CaseVisual({visual}){
  return <div className="case-visual">
    <div className="case-metrics">{visual.metrics.map(([value,label])=><div className="case-metric" key={value+label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <div className="case-tension"><span>ENJEU CENTRAL</span><strong>{visual.tension}</strong></div>
    <div className="case-levers">{visual.levers.map((lever,i)=><div key={lever}><span>{String(i+1).padStart(2,'0')}</span>{lever}</div>)}</div>
  </div>
}

function Inspectable({label,detail,onInspect,className='',children}){
  if(!detail) return <div className={className}>{children}</div>
  return <button type="button" className={className+' model-clickable'} onClick={()=>onInspect(label)} aria-label={'Explorer '+label}>{children}</button>
}

function GridCards({visual,getDetail,onInspect}){
  return <div className={'deep-grid deep-'+visual.kind}>
    {visual.items.map((item,i)=>{
      const pair=Array.isArray(item)
      const label=pair?item[1]:item
      return <Inspectable className="deep-grid-card" label={label} detail={getDetail(label)} onInspect={onInspect} key={(pair?item.join('-'):item)+i}>
        <span className="deep-grid-index">{pair?item[0]:String(i+1).padStart(2,'0')}</span>
        <strong>{label}</strong>
        {getDetail(label)&&<span className="model-more">Explorer →</span>}
      </Inspectable>
    })}
  </div>
}

function ThreeStage({visual,getDetail,onInspect}){
  const items=[visual.left,visual.middle,visual.right]
  return <div className="deep-three-stage">
    {items.map((item,i)=><React.Fragment key={String(item)+i}>
      <Inspectable className="deep-stage" label={item} detail={getDetail(item)} onInspect={onInspect}>
        {item}{getDetail(item)&&<span className="model-more">Explorer →</span>}
      </Inspectable>
      {i<items.length-1&&<div className="deep-stage-arrow">→</div>}
    </React.Fragment>)}
  </div>
}

function DualPath({visual,getDetail,onInspect}){
  const left=Array.isArray(visual.left)?visual.left:[visual.left]
  const right=Array.isArray(visual.right)?visual.right:[visual.right]
  const path=(items)=><div className="deep-path">{items.map((x,i)=><React.Fragment key={x+i}>
    <Inspectable label={x} detail={getDetail(x)} onInspect={onInspect}>{x}{getDetail(x)&&<span className="model-more">Explorer →</span>}</Inspectable>
    {i<items.length-1&&<span>↓</span>}
  </React.Fragment>)}</div>
  return <div className="deep-dual">
    {path(left)}
    {visual.center&&<div className="deep-dual-center">{visual.center}</div>}
    {path(right)}
  </div>
}

function Radial({visual,getDetail,onInspect}){
  return <div className="deep-radial">
    <div className="deep-radial-center">{visual.center||'CENTRE'}</div>
    <div className="deep-radial-items">{visual.items.map((x,i)=><Inspectable label={x} detail={getDetail(x)} onInspect={onInspect} key={x+i}>
      {x}{getDetail(x)&&<span className="model-more">Explorer →</span>}
    </Inspectable>)}</div>
  </div>
}

function Servuction({visual,getDetail,onInspect}){
  const items=(arr)=><div className="servuction-items">{arr.map(x=><Inspectable label={x} detail={getDetail(x)} onInspect={onInspect} key={x}>
    {x}{getDetail(x)&&<span className="model-more">Explorer →</span>}
  </Inspectable>)}</div>
  return <div className="deep-servuction">
    <div className="servuction-zone"><span>VISIBLE DU CLIENT</span>{items(visual.front)}</div>
    <div className="servuction-link">↕</div>
    <div className="servuction-zone back"><span>BACK-OFFICE</span>{items(visual.back)}</div>
  </div>
}

function Perceptual({visual}){
  return <div className="deep-perceptual">
    <div className="axis-y">{visual.y}</div>
    <div className="perceptual-plane">
      <span className="axis-y-line"></span><span className="axis-x-line"></span>
      {visual.points.map(([label,left,bottom])=><div className="perceptual-point" key={label} style={{left,bottom}}>{label}</div>)}
      <div className="axis-x-label">{visual.x}</div>
    </div>
  </div>
}

function TPB({visual,getDetail,onInspect}){
  return <div className="deep-tpb">
    <div className="tpb-left">{visual.left.map(x=><Inspectable label={x} detail={getDetail(x)} onInspect={onInspect} key={x}>
      {x}{getDetail(x)&&<span className="model-more">Explorer →</span>}
    </Inspectable>)}</div>
    <div className="tpb-arrow">→</div>
    <Inspectable className="tpb-center" label={visual.center} detail={getDetail(visual.center)} onInspect={onInspect}>
      {visual.center}{getDetail(visual.center)&&<span className="model-more">Explorer →</span>}
    </Inspectable>
    <div className="tpb-arrow">→</div>
    <Inspectable className="tpb-right" label={visual.right} detail={getDetail(visual.right)} onInspect={onInspect}>
      {visual.right}{getDetail(visual.right)&&<span className="model-more">Explorer →</span>}
    </Inspectable>
  </div>
}

function BrandNet({visual,getDetail,onInspect}){
  return <div className="deep-brandnet">
    <div className="brandnet-center">{visual.center}</div>
    <div className="brandnet-ring">{visual.items.map((x,i)=><Inspectable className={'brandnet-item item-'+i} label={x} detail={getDetail(x)} onInspect={onInspect} key={x}>
      {x}
    </Inspectable>)}</div>
  </div>
}

function AdaptBalance({visual,getDetail,onInspect}){
  const left=Array.isArray(visual.left)?visual.left:[visual.left]
  const right=Array.isArray(visual.right)?visual.right:[visual.right]
  return <div className="deep-balance">
    <div className="balance-side">{left.map(x=><Inspectable label={x} detail={getDetail(x)} onInspect={onInspect} key={x}>{x}</Inspectable>)}</div>
    <div className="balance-center">{visual.center||'ARBITRAGE'}</div>
    <div className="balance-side">{right.map(x=><Inspectable label={x} detail={getDetail(x)} onInspect={onInspect} key={x}>{x}</Inspectable>)}</div>
  </div>
}

function DeepBody({visual,getDetail,onInspect}){
  if(['matrix6','matrix4','risk','criteria','portfolio','rm','message','kpiladder','metricchain','entry','methodchoice','questionnaire','gdpr','promo','experiment','identity','testlogic'].includes(visual.kind)) return <GridCards visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(['elasticity','causality'].includes(visual.kind)) return <ThreeStage visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(['channel','effectuation'].includes(visual.kind)) return <DualPath visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(['hub','buyingcenter','stakeholders','sevenp'].includes(visual.kind)) return <Radial visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(visual.kind==='servuction') return <Servuction visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(visual.kind==='perceptual') return <Perceptual visual={visual}/>
  if(visual.kind==='tpb') return <TPB visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(visual.kind==='brandnet') return <BrandNet visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(['valueeq','adapt'].includes(visual.kind)) return <AdaptBalance visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  if(visual.items) return <GridCards visual={visual} getDetail={getDetail} onInspect={onInspect}/>
  return null
}

function ModelDetailModal({title,label,detail,onClose}){
  useEffect(()=>{
    if(!detail) return
    const old=document.body.style.overflow
    document.body.style.overflow='hidden'
    const onKey=(event)=>{if(event.key==='Escape') onClose()}
    window.addEventListener('keydown',onKey)
    return ()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onKey)}
  },[detail,onClose])
  if(!detail) return null
  const rows=[
    ['Définition',detail.definition],
    ['Questions à se poser',detail.questions],
    ['Données / indices à rechercher',detail.data],
    ['Comment interpréter',detail.interpretation],
    ['Exemple marketing',detail.marketing],
    ['Exemple tourisme',detail.tourism],
    ['Conséquences pour la décision',detail.decision],
    ['Erreurs fréquentes / limites',detail.errors]
  ]
  return <div className="model-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}>
    <article className="model-modal" role="dialog" aria-modal="true" aria-labelledby="model-modal-title">
      <div className="model-modal-toolbar">
        <div><span className="section-kicker">MODÈLE EXPLORABLE</span><small>{title}</small></div>
        <button className="model-modal-close" onClick={onClose} aria-label="Fermer">×</button>
      </div>
      <h3 id="model-modal-title">{label}</h3>
      <div className="model-detail-grid">
        {rows.map(([heading,value])=><section key={heading}>
          <h4>{heading}</h4>
          {Array.isArray(value)?<ul>{value.map(x=><li key={x}>{x}</li>)}</ul>:<p>{value}</p>}
        </section>)}
      </div>
      {detail.source&&<a className="model-source-link" href={detail.source} target="_blank" rel="noreferrer">Consulter la ressource de référence ↗</a>}
    </article>
  </div>
}

export function DeepLearningVisual({visual,pageKey}){
  const [selected,setSelected]=useState(null)
  if(!visual) return null
  const getDetail=(label)=>findInteractiveDetail(pageKey,visual.title,label)
  const selectedDetail=selected?getDetail(selected):null
  return <aside className="deep-learning-visual">
    <div className="deep-visual-head">
      <div><span className="section-kicker">SCHÉMA D’ANCRAGE</span><h4>{visual.title}</h4></div>
      {Object.keys(interactiveModelDetailsSafe(pageKey,visual.title)).length>0&&<span className="interactive-hint">Cliquer pour explorer</span>}
    </div>
    <DeepBody visual={visual} getDetail={getDetail} onInspect={setSelected}/>
    {visual.caption&&<p className="deep-visual-caption">{visual.caption}</p>}
    <ModelDetailModal title={visual.title} label={selected} detail={selectedDetail} onClose={()=>setSelected(null)}/>
  </aside>
}

function interactiveModelDetailsSafe(pageKey,title){
  const labels=['Politique','Économique','Socioculturel','Technologique','Environnemental','Légal','Forces','Faiblesses','Opportunités','Menaces','Attitude','Norme subjective','Contrôle perçu','Intention','Comportement','Sociodémographique','Géographique','Comportemental','Bénéfices recherchés','Psychographique','Notoriété','Qualité perçue','Associations','Préférence','Fidélité','Magasin','Site','App','Réseaux sociaux','Centre de contact','Plateforme','Client','Personnel en contact','Support physique','Organisation interne','Systèmes','Back-office','Utilisateur','Prescripteur','Acheteur','Décideur','Influenceur','Gatekeeper','Objectif fixé','Prévoir','Choisir les moyens','Moyens disponibles','Agir','Construire les possibles','Explorer','Mesurer','Expliquer un effet','Contextualiser','Formuler H0','Choisir le test','Calculer','Comparer au seuil','Conclure avec prudence','Finalité','Base légale','Minimisation','Information','Durée','Droits']
  return Object.fromEntries(labels.filter(label=>findInteractiveDetail(pageKey,title,label)).map(label=>[label,true]))
}

export default function LearningVisual({pageKey,sectionId,page}){
  const visual=getVisualForPage(pageKey,sectionId,page)
  if(!visual) return null

  let body=<Flow visual={visual}/>
  if(visual.kind==='triangle') body=<Triangle visual={visual}/>
  if(visual.kind==='split') body=<Split visual={visual}/>
  if(visual.kind==='funnel') body=<Funnel visual={visual}/>
  if(visual.kind==='layers') body=<Layers visual={visual}/>
  if(visual.kind==='concept') body=<Concept visual={visual}/>
  if(visual.kind==='source') body=<SourcePyramid visual={visual}/>
  if(visual.kind==='case') body=<CaseVisual visual={visual}/>

  return <section className="learning-visual">
    <div className="learning-visual-head"><span className="section-kicker">ANCRAGE VISUEL</span><h3>{visual.title}</h3></div>
    {body}
    {visual.caption&&<p className="visual-caption">{visual.caption}</p>}
  </section>
}
