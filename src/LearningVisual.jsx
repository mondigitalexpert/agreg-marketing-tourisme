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

function GridCards({visual}){
  return <div className={'deep-grid deep-'+visual.kind}>
    {visual.items.map((item,i)=>{
      const pair=Array.isArray(item)
      return <div className="deep-grid-card" key={(pair?item.join('-'):item)+i}>
        <span className="deep-grid-index">{pair?item[0]:String(i+1).padStart(2,'0')}</span>
        <strong>{pair?item[1]:item}</strong>
      </div>
    })}
  </div>
}

function ThreeStage({visual}){
  const items=[visual.left,visual.middle,visual.right]
  return <div className="deep-three-stage">
    {items.map((item,i)=><React.Fragment key={String(item)+i}>
      <div className="deep-stage">{item}</div>
      {i<items.length-1&&<div className="deep-stage-arrow">→</div>}
    </React.Fragment>)}
  </div>
}

function DualPath({visual}){
  const left=Array.isArray(visual.left)?visual.left:[visual.left]
  const right=Array.isArray(visual.right)?visual.right:[visual.right]
  return <div className="deep-dual">
    <div className="deep-path">{left.map((x,i)=><React.Fragment key={x+i}><div>{x}</div>{i<left.length-1&&<span>↓</span>}</React.Fragment>)}</div>
    {visual.center&&<div className="deep-dual-center">{visual.center}</div>}
    <div className="deep-path">{right.map((x,i)=><React.Fragment key={x+i}><div>{x}</div>{i<right.length-1&&<span>↓</span>}</React.Fragment>)}</div>
  </div>
}

function Radial({visual}){
  return <div className="deep-radial">
    <div className="deep-radial-center">{visual.center||'CENTRE'}</div>
    <div className="deep-radial-items">{visual.items.map((x,i)=><div key={x+i}>{x}</div>)}</div>
  </div>
}

function Servuction({visual}){
  return <div className="deep-servuction">
    <div className="servuction-zone">
      <span>VISIBLE DU CLIENT</span>
      <div className="servuction-items">{visual.front.map(x=><div key={x}>{x}</div>)}</div>
    </div>
    <div className="servuction-link">↕</div>
    <div className="servuction-zone back">
      <span>BACK-OFFICE</span>
      <div className="servuction-items">{visual.back.map(x=><div key={x}>{x}</div>)}</div>
    </div>
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

function TPB({visual}){
  return <div className="deep-tpb">
    <div className="tpb-left">{visual.left.map(x=><div key={x}>{x}</div>)}</div>
    <div className="tpb-arrow">→</div>
    <div className="tpb-center">{visual.center}</div>
    <div className="tpb-arrow">→</div>
    <div className="tpb-right">{visual.right}</div>
  </div>
}

function BrandNet({visual}){
  return <div className="deep-brandnet">
    <div className="brandnet-center">{visual.center}</div>
    <div className="brandnet-ring">{visual.items.map((x,i)=><div className={'brandnet-item item-'+i} key={x}>{x}</div>)}</div>
  </div>
}

function AdaptBalance({visual}){
  const left=Array.isArray(visual.left)?visual.left:[visual.left]
  const right=Array.isArray(visual.right)?visual.right:[visual.right]
  return <div className="deep-balance">
    <div className="balance-side">{left.map(x=><span key={x}>{x}</span>)}</div>
    <div className="balance-center">{visual.center||'ARBITRAGE'}</div>
    <div className="balance-side">{right.map(x=><span key={x}>{x}</span>)}</div>
  </div>
}

function DeepBody({visual}){
  if(['matrix6','matrix4','risk','criteria','portfolio','rm','message','kpiladder','metricchain','entry','methodchoice','questionnaire','gdpr','promo','experiment','identity','testlogic'].includes(visual.kind)) return <GridCards visual={visual}/>
  if(['elasticity','causality'].includes(visual.kind)) return <ThreeStage visual={visual}/>
  if(['channel','effectuation'].includes(visual.kind)) return <DualPath visual={visual}/>
  if(['hub','buyingcenter','stakeholders','sevenp'].includes(visual.kind)) return <Radial visual={visual}/>
  if(visual.kind==='servuction') return <Servuction visual={visual}/>
  if(visual.kind==='perceptual') return <Perceptual visual={visual}/>
  if(visual.kind==='tpb') return <TPB visual={visual}/>
  if(visual.kind==='brandnet') return <BrandNet visual={visual}/>
  if(['valueeq','adapt'].includes(visual.kind)) return <AdaptBalance visual={visual}/>
  if(visual.items) return <GridCards visual={visual}/>
  return null
}

export function DeepLearningVisual({visual}){
  if(!visual) return null
  return <aside className="deep-learning-visual">
    <div className="deep-visual-head"><span className="section-kicker">SCHÉMA D’ANCRAGE</span><h4>{visual.title}</h4></div>
    <DeepBody visual={visual}/>
    {visual.caption&&<p className="deep-visual-caption">{visual.caption}</p>}
  </aside>
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
