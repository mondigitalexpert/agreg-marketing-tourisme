import React from 'react'
import { getVisualForPage } from './visuals'

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
