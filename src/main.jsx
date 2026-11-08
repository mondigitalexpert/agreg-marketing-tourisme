import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { contentPages } from './content'

const sections = [
  { id:'concours', group:'dashboard', title:'Le concours', icon:'🎓', color:'#1F3A5F', desc:'Programme, épreuves, méthode et attentes du jury.', size:'small', meta:'8 repères clés' },
  { id:'progression', group:'dashboard', title:'Ma progression', icon:'🎯', color:'#417C78', desc:'Résultats, points faibles, historique et révisions recommandées.', size:'medium', meta:'Suivi personnel' },
  { id:'veille', group:'dashboard', title:'Actualité & Veille', icon:'📰', color:'#4C7EA8', desc:'Actualités marketing, tourisme, digital, IA et réglementation.', size:'small', meta:'Cas et chiffres récents' },
  { id:'bibliotheque', group:'dashboard', title:'Bibliothèque', icon:'📖', color:'#59636E', desc:'Ressources, sujets, rapports, articles et favoris.', size:'small', meta:'Sources & documents' },

  { id:'cours', group:'learn', title:'Cours Marketing', icon:'📚', color:'#2F6B6D', desc:'Le socle du programme, organisé pour passer rapidement de la notion à son utilisation au concours.', size:'feature', badge:'16 thèmes', tags:['Marché & environnement','Comportement','Segmentation / ciblage','Mix marketing','Digital & services'] },
  { id:'tourisme', group:'learn', title:'Marketing & Tourisme', icon:'🏨', color:'#C96F4A', desc:'Le tourisme comme terrain d’application privilégié des notions de marketing.', size:'tall', badge:'16 angles', tags:['Hôtellerie','Destinations','OTA & distribution','Expérience client','Tourisme durable','IA & influence'] },
  { id:'auteurs', group:'learn', title:'Auteurs & Modèles', icon:'🧠', color:'#6F5B8C', desc:'Les références à connaître, mais surtout à mobiliser au bon moment dans une copie ou un cas.', size:'wide', badge:'Mémo', tags:['Auteurs clés','Modèles','Définitions','Flashcards'] },

  { id:'entrainement', group:'practice', title:'S’entraîner', icon:'✍️', color:'#3F7D5A', desc:'Des formats courts jusqu’au concours blanc pour transformer les connaissances en réflexes.', size:'feature', badge:'18 formats', tags:['QCM','Mini-cas','Analyse de documents','Problématique & plan','Concours blanc'] },
  { id:'cas', group:'practice', title:'Cas réels', icon:'🧳', color:'#B67A32', desc:'Des situations d’entreprises et d’acteurs du tourisme, datées, sourcées et reliées aux notions du programme.', size:'wide', badge:'Sourcés', tags:['Hôtellerie','Plateformes','Transport','Crises','Transformation digitale'] },
]

const item = (icon, title) => ({ icon, title })

const subpages = {
  concours:[
    item('🗓️','Épreuves 2027'), item('📘','Programme officiel'), item('📣','Option C Marketing'), item('👩‍⚖️','Attentes du jury'),
    item('🧭','Méthodologie'), item('📝','Sujets officiels'), item('📊','Rapports de jury'), item('⚠️','Pièges à éviter')
  ],
  cours:[
    item('🌍','Marché & environnement'), item('👥','Comportement du consommateur'), item('🎯','Segmentation • Ciblage • Positionnement'),
    item('📦','Produit / Service / Marque'), item('💶','Prix'), item('📣','Communication'), item('🛍️','Distribution & omnicanal'),
    item('📱','Marketing digital'), item('🤝','Marketing des services'), item('🏢','Marketing BtoB'), item('📍','Marketing territorial'),
    item('🚀','Marketing entrepreneurial'), item('🌐','Marketing international'), item('🔎','Études marketing'),
    item('📈','Statistiques & décision'), item('⚖️','Droit appliqué au marketing')
  ],
  tourisme:[
    item('🧭','Fondamentaux'), item('🏨','Hôtellerie'), item('🍽️','Restauration'), item('🗺️','Destinations & territoires'),
    item('🧳','Agences / TO / plateformes'), item('✨','Expérience touristique'), item('🛒','Distribution & OTA'), item('⭐','E-réputation'),
    item('💹','Revenue management'), item('❤️','Fidélisation & CRM'), item('🌱','Tourisme durable'), item('🤖','IA & nouvelles technologies'),
    item('📲','Influence & réseaux sociaux'), item('💎','Luxe & tourisme'), item('🎪','Événementiel'), item('🚨','Crises & tourisme')
  ],
  auteurs:[
    item('👤','Auteurs incontournables'), item('🧩','Modèles marketing'), item('📖','Définitions'), item('🔭','Théories contemporaines'),
    item('🧠','Quel auteur pour quoi ?'), item('🃏','Flashcards'), item('🔗','Auteur ↔ Concept'), item('🛠️','Choisir le bon modèle')
  ],
  entrainement:[
    item('✅','QCM rapides'), item('⚖️','Vrai / Faux argumenté'), item('🃏','Flashcards'), item('💬','Questions ouvertes'),
    item('📖','Définitions'), item('👤','Retrouver l’auteur'), item('🧩','Retrouver le modèle'), item('⏱️','Mini-cas 10 min'),
    item('🕒','Cas 30–45 min'), item('📚','Études de cas longues'), item('🧮','Calculs marketing'), item('🔎','Analyse de documents'),
    item('🩺','Diagnostic'), item('❓','Problématique'), item('🗂️','Plan'), item('💡','Préconisations'), item('⏳','Chronométré'), item('🏁','Concours blanc')
  ],
  cas:[
    item('🏨','Hôtellerie'), item('📱','Plateformes'), item('🚆','Transport'), item('🗺️','Destinations touristiques'),
    item('🎢','Parcs & loisirs'), item('🍽️','Restauration'), item('🚢','Croisières'), item('🏛️','Acteurs publics'),
    item('🚀','Start-up tourisme'), item('🚨','Crises & controverses'), item('💻','Transformation digitale'), item('🌱','Développement durable')
  ],
  veille:[
    item('📣','Marketing'), item('🧳','Tourisme'), item('🛒','Consommation'), item('🤖','Digital & IA'), item('🌱','Environnement'),
    item('⚖️','Réglementation'), item('🏢','Entreprises à suivre'), item('📊','Chiffres clés'), item('🔗','Relier une actualité à une notion')
  ],
  bibliotheque:[
    item('📂','Ressources fournies'), item('📘','Programme officiel'), item('📝','Sujets officiels'), item('📊','Rapports de jury'),
    item('🎓','Articles académiques'), item('📰','Articles professionnels'), item('📈','Statistiques officielles'), item('🧳','Ressources tourisme'),
    item('📣','Ressources marketing'), item('🗒️','Mes fiches'), item('⭐','Mes favoris')
  ],
  progression:[
    item('🧭','Vue d’ensemble'), item('📈','Mes résultats'), item('⚠️','Points faibles'), item('✅','Notions maîtrisées'), item('🔁','À revoir'),
    item('🕘','Historique QCM'), item('🧩','Erreurs fréquentes'), item('🧳','Cas réalisés'), item('🃏','Flashcards difficiles'), item('⭐','Favoris')
  ]
}

function Tile({section, variant='action', onOpen}) {
  return (
    <button
      className={`tile ${variant} ${section.size}`}
      style={{'--tile':section.color}}
      onClick={() => onOpen(section.id)}
    >
      <div className="tile-top">
        <span className="icon">{section.icon}</span>
        {variant === 'dashboard'
          ? <span className="dashboard-meta">{section.meta}</span>
          : <span className="content-badge">{section.badge}</span>}
      </div>

      <div className="tile-copy">
        <span className="tile-title">{section.title}</span>
        <span className="tile-desc">{section.desc}</span>
      </div>

      {variant !== 'dashboard' && section.tags && (
        <div className="tag-list">
          {section.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      )}

      <span className="tile-link">Explorer <span aria-hidden>→</span></span>
    </button>
  )
}


function QuizBlock({items}) {
  const [answers, setAnswers] = useState({})

  return <div className="quiz-list">
    {items.map((item,index) => {
      const selected = answers[index]
      const hasAnswered = selected !== undefined
      return <article className="quiz-card" key={item.q}>
        <div className="quiz-question"><span>{String(index+1).padStart(2,'0')}</span>{item.q}</div>
        <div className="quiz-choices">
          {item.choices.map((choice,choiceIndex) => {
            const correct = hasAnswered && choiceIndex === item.answer
            const wrong = hasAnswered && choiceIndex === selected && selected !== item.answer
            return <button
              key={choice}
              className={`quiz-choice ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}
              onClick={() => setAnswers(prev => ({...prev,[index]:choiceIndex}))}
              disabled={hasAnswered}
            >
              <span className="choice-letter">{String.fromCharCode(65+choiceIndex)}</span>
              <span>{choice}</span>
            </button>
          })}
        </div>
        {hasAnswered && <div className={`quiz-feedback ${selected === item.answer ? 'ok' : 'ko'}`}>
          <strong>{selected === item.answer ? 'Bonne réponse.' : 'À revoir.'}</strong> {item.explanation}
        </div>}
      </article>
    })}
  </div>
}

function DetailPage({section, entry, onBack}) {
  const page = contentPages[`${section.id}|${entry.title}`]

  if (!page) return <div className="detail-page">
    <button className="back" onClick={onBack}>← Retour à {section.title}</button>
    <section className="section-head" style={{'--tile':section.color}}>
      <span className="icon big">{entry.icon}</span>
      <div><h2>{entry.title}</h2><p>Cette fiche sera alimentée dans une prochaine étape.</p></div>
    </section>
    <div className="placeholder-note">Aucun contenu n’est publié ici tant qu’il n’a pas été préparé et vérifié.</div>
  </div>

  return <div className="detail-page">
    <button className="back" onClick={onBack}>← Retour à {section.title}</button>

    <header className="detail-hero" style={{'--tile':section.color}}>
      <div className="detail-icon" aria-hidden>{entry.icon}</div>
      <div>
        <span className="detail-label">{page.label}</span>
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </div>
    </header>

    {page.keyPoints && <section className="content-block">
      <h3>À retenir</h3>
      <div className="key-grid">
        {page.keyPoints.map((point,i)=><div className="key-card" key={point}>
          <span>{String(i+1).padStart(2,'0')}</span><p>{point}</p>
        </div>)}
      </div>
    </section>}

    {page.sections && <section className="content-block">
      <h3>Approfondir</h3>
      <div className="reading-stack">
        {page.sections.map(s=><article className="reading-card" key={s.heading}>
          <h4>{s.heading}</h4>
          <p>{s.text}</p>
        </article>)}
      </div>
    </section>}

    {page.quiz && <section className="content-block">
      <h3>S’entraîner</h3>
      <QuizBlock items={page.quiz} />
    </section>}

    {page.sources && <section className="content-block sources-block">
      <div className="sources-heading">
        <div><span className="detail-label">TRAÇABILITÉ</span><h3>Sources</h3></div>
        <span className="verified-chip">Contenu sourcé</span>
      </div>
      <div className="source-list">
        {page.sources.map((source,i)=><div className="source-card" key={source.name+i}>
          <span className="source-type">{source.type}</span>
          <div>
            {source.url
              ? <a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a>
              : <strong>{source.name}</strong>}
            {source.checked && <small>Vérifié le {source.checked}</small>}
            {source.note && <small>{source.note}</small>}
          </div>
        </div>)}
      </div>
    </section>}
  </div>
}

function App(){
  const [active, setActive] = useState(null)
  const [activeSub, setActiveSub] = useState(null)
  const section = sections.find(s => s.id === active)
  const selectedEntry = active && activeSub ? subpages[active].find(e => e.title === activeSub) : null

  const dashboard = sections.filter(s => s.group === 'dashboard')
  const learn = sections.filter(s => s.group === 'learn')
  const practice = sections.filter(s => s.group === 'practice')

  return <div className="app-shell">
    <header className="hero">
      <div>
        <span className="eyebrow">AGRÉGATION EXTERNE ÉCONOMIE-GESTION</span>
        <h1>Marketing & Tourisme</h1>
        <p>Un espace de consultation et d’entraînement pour apprendre, mémoriser, s’exercer et travailler sur des cas réels sourcés.</p>
      </div>
      <div className="status-card">
        <span className="status-dot"></span>
        <div><strong>Application en construction</strong><small>Structure et navigation actives</small></div>
      </div>
    </header>

    {!active ? <>
      <section className="dashboard-zone">
        <div className="section-label-row">
          <div>
            <span className="section-kicker">TABLEAU DE BORD</span>
            <h2>Suivre, retrouver, s’orienter</h2>
          </div>
          <p>Des accès rapides pour piloter la préparation et retrouver les ressources.</p>
        </div>
        <div className="dashboard-grid">
          {dashboard.map(s => <Tile key={s.id} section={s} variant="dashboard" onOpen={(id)=>{setActive(id);setActiveSub(null)}} />)}
        </div>
      </section>

      <section className="workspace-section learn-zone">
        <div className="section-label-row">
          <div>
            <span className="section-kicker">APPRENDRE</span>
            <h2>Comprendre et mémoriser</h2>
          </div>
          <p>Cours, concepts, auteurs et applications sectorielles.</p>
        </div>
        <div className="mosaic-grid learn-grid">
          {learn.map(s => <Tile key={s.id} section={s} onOpen={(id)=>{setActive(id);setActiveSub(null)}} />)}
        </div>
      </section>

      <section className="workspace-section practice-zone">
        <div className="section-label-row">
          <div>
            <span className="section-kicker">S’ENTRAÎNER</span>
            <h2>Mobiliser les connaissances</h2>
          </div>
          <p>Des exercices progressifs jusqu’aux situations proches du concours.</p>
        </div>
        <div className="mosaic-grid practice-grid">
          {practice.map(s => <Tile key={s.id} section={s} onOpen={(id)=>{setActive(id);setActiveSub(null)}} />)}
        </div>
      </section>
    </> : activeSub && selectedEntry ? <DetailPage
      section={section}
      entry={selectedEntry}
      onBack={()=>setActiveSub(null)}
    /> : <>
      <button className="back" onClick={()=>{setActive(null);setActiveSub(null)}}>← Retour à l’accueil</button>
      <section className="section-head" style={{'--tile':section.color}}>
        <span className="icon big">{section.icon}</span>
        <div><h2>{section.title}</h2><p>{section.desc}</p></div>
      </section>
      <main className="subgrid">
        {subpages[active].map((entry,i)=><button
          className="subtile"
          key={entry.title}
          style={{'--tile':section.color}}
          onClick={()=>setActiveSub(entry.title)}
        >
          <span className="sub-icon" aria-hidden>{entry.icon}</span>
          <span className="subtile-copy">
            <span className="sub-number">{String(i+1).padStart(2,'0')}</span>
            <span className="sub-title">{entry.title}</span>
          </span>
          <span className="sub-arrow" aria-hidden>→</span>
        </button>)}
      </main>
      <div className="placeholder-note">Les fiches publiées ouvrent un contenu sourcé. Les autres restent volontairement vides tant qu’elles ne sont pas vérifiées.</div>
    </>}

    <footer>
      <span>Préparation Agrégation • Option C Marketing</span>
      <span>Contenus sourcés • Cas datés • Progression à venir</span>
    </footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
