import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

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

const subpages = {
  concours:['Épreuves 2027','Programme officiel','Option C Marketing','Attentes du jury','Méthodologie','Sujets officiels','Rapports de jury','Pièges à éviter'],
  cours:['Marché & environnement','Comportement du consommateur','Segmentation • Ciblage • Positionnement','Produit / Service / Marque','Prix','Communication','Distribution & omnicanal','Marketing digital','Marketing des services','Marketing BtoB','Marketing territorial','Marketing entrepreneurial','Marketing international','Études marketing','Statistiques & décision','Droit appliqué au marketing'],
  tourisme:['Fondamentaux','Hôtellerie','Restauration','Destinations & territoires','Agences / TO / plateformes','Expérience touristique','Distribution & OTA','E-réputation','Revenue management','Fidélisation & CRM','Tourisme durable','IA & nouvelles technologies','Influence & réseaux sociaux','Luxe & tourisme','Événementiel','Crises & tourisme'],
  auteurs:['Auteurs incontournables','Modèles marketing','Définitions','Théories contemporaines','Quel auteur pour quoi ?','Flashcards','Auteur ↔ Concept','Choisir le bon modèle'],
  entrainement:['QCM rapides','Vrai / Faux argumenté','Flashcards','Questions ouvertes','Définitions','Retrouver l’auteur','Retrouver le modèle','Mini-cas 10 min','Cas 30–45 min','Études de cas longues','Calculs marketing','Analyse de documents','Diagnostic','Problématique','Plan','Préconisations','Chronométré','Concours blanc'],
  cas:['Hôtellerie','Plateformes','Transport','Destinations touristiques','Parcs & loisirs','Restauration','Croisières','Acteurs publics','Start-up tourisme','Crises & controverses','Transformation digitale','Développement durable'],
  veille:['Marketing','Tourisme','Consommation','Digital & IA','Environnement','Réglementation','Entreprises à suivre','Chiffres clés','Relier une actualité à une notion'],
  bibliotheque:['Ressources fournies','Programme officiel','Sujets officiels','Rapports de jury','Articles académiques','Articles professionnels','Statistiques officielles','Ressources tourisme','Ressources marketing','Mes fiches','Mes favoris'],
  progression:['Vue d’ensemble','Mes résultats','Points faibles','Notions maîtrisées','À revoir','Historique QCM','Erreurs fréquentes','Cas réalisés','Flashcards difficiles','Favoris']
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

function App(){
  const [active, setActive] = useState(null)
  const section = sections.find(s => s.id === active)

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
          {dashboard.map(s => <Tile key={s.id} section={s} variant="dashboard" onOpen={setActive} />)}
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
          {learn.map(s => <Tile key={s.id} section={s} onOpen={setActive} />)}
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
          {practice.map(s => <Tile key={s.id} section={s} onOpen={setActive} />)}
        </div>
      </section>
    </> : <>
      <button className="back" onClick={()=>setActive(null)}>← Retour à l’accueil</button>
      <section className="section-head" style={{'--tile':section.color}}>
        <span className="icon big">{section.icon}</span>
        <div><h2>{section.title}</h2><p>{section.desc}</p></div>
      </section>
      <main className="subgrid">
        {subpages[active].map((item,i)=><button className="subtile" key={item} style={{'--tile':section.color}}>
          <span className="sub-number">{String(i+1).padStart(2,'0')}</span>
          <span>{item}</span>
          <span aria-hidden>→</span>
        </button>)}
      </main>
      <div className="placeholder-note">Les sous-pages seront alimentées progressivement avec les ressources fournies, des contenus complémentaires et des sources vérifiables.</div>
    </>}

    <footer>
      <span>Préparation Agrégation • Option C Marketing</span>
      <span>Contenus sourcés • Cas datés • Progression à venir</span>
    </footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
