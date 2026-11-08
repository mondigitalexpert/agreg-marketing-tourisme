import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const sections = [
  { id:'concours', title:'Le concours', icon:'🎓', color:'#1F3A5F', desc:'Programme, épreuves, méthode et attentes du jury.' },
  { id:'cours', title:'Cours Marketing', icon:'📚', color:'#2F6B6D', desc:'Les notions du programme, structurées pour réviser efficacement.' },
  { id:'tourisme', title:'Marketing & Tourisme', icon:'🏨', color:'#C96F4A', desc:'Applications au tourisme, à l’hôtellerie et aux services.' },
  { id:'auteurs', title:'Auteurs & Modèles', icon:'🧠', color:'#6F5B8C', desc:'Concepts, modèles, références et flashcards.' },
  { id:'entrainement', title:'S’entraîner', icon:'✍️', color:'#3F7D5A', desc:'QCM, mini-cas, exercices et concours blancs.' },
  { id:'cas', title:'Cas réels', icon:'🧳', color:'#B67A32', desc:'Situations réelles, sourcées, datées et corrigées.' },
  { id:'veille', title:'Actualité & Veille', icon:'📰', color:'#4C7EA8', desc:'Actualités marketing, tourisme, digital, IA et réglementation.' },
  { id:'bibliotheque', title:'Bibliothèque', icon:'📖', color:'#59636E', desc:'Ressources, sujets, rapports, articles et favoris.' },
  { id:'progression', title:'Ma progression', icon:'🎯', color:'#417C78', desc:'Résultats, points faibles, historique et révisions recommandées.' },
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

function App(){
  const [active, setActive] = useState(null)
  const section = sections.find(s => s.id === active)

  return <div className="app-shell">
    <header className="hero">
      <div>
        <span className="eyebrow">AGRÉGATION EXTERNE ÉCONOMIE-GESTION</span>
        <h1>Marketing & Tourisme</h1>
        <p>Un espace de consultation et d’entraînement pour apprendre, mémoriser, s’exercer et travailler sur des cas réels sourcés.</p>
      </div>
      <div className="status-card">
        <span className="status-dot"></span>
        <div><strong>Version initiale</strong><small>Structure de l’application</small></div>
      </div>
    </header>

    {!active ? <>
      <section className="intro">
        <h2>Que veux-tu travailler ?</h2>
        <p>Choisis une rubrique. Chaque espace regroupera cours, fiches, sources et exercices adaptés.</p>
      </section>
      <main className="tile-grid">
        {sections.map(s => <button key={s.id} className="tile" style={{'--tile':s.color}} onClick={()=>setActive(s.id)}>
          <span className="icon">{s.icon}</span>
          <span className="tile-title">{s.title}</span>
          <span className="tile-desc">{s.desc}</span>
          <span className="tile-link">Ouvrir <span aria-hidden>→</span></span>
        </button>)}
      </main>
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
