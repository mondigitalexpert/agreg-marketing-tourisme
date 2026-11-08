import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { contentPages } from './content'
import DetailPage from './DetailPage'
import { PROFILES, ProgressView, loadActiveProfile, saveActiveProfile, useProgress } from './progressStore'
import { isSupabaseConfigured } from './supabaseClient'
import { claimProfile, fetchProfile, getSession, onAuthChange, requestEmailOtp, signOut, verifyEmailOtp } from './remoteProgress'

const sections = [
  { id:'concours', group:'dashboard', title:'Le concours', icon:'🎓', color:'#1F3A5F', desc:'Programme, épreuves, méthode et attentes du jury.', size:'small', meta:'8 repères clés' },
  { id:'progression', group:'dashboard', title:'Ma progression', icon:'🎯', color:'#417C78', desc:'Résultats, points faibles, historique et révisions recommandées.', size:'medium', meta:'Suivi local' },
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
    item('📂','Ressources fournies'), item('🎬','Médias & ressources fournies'), item('📘','Programme officiel'), item('📝','Sujets officiels'), item('📊','Rapports de jury'),
    item('🎓','Articles académiques'), item('📰','Articles professionnels'), item('📈','Statistiques officielles'), item('🧳','Ressources tourisme'),
    item('📣','Ressources marketing'), item('🗒️','Mes fiches'), item('⭐','Mes favoris')
  ],
  progression:[
    item('📈','Mes résultats'), item('⚠️','Points faibles'), item('✅','Notions maîtrisées'), item('🔁','À revoir'),
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


function AuthPanel({activeProfile,activeProfileLabel,onProfileChange,session,cloudProfile,onRequestOtp,onVerifyOtp,onClaim,onLogout,busy,error}) {
  const [email,setEmail]=useState('')
  const [otp,setOtp]=useState('')
  const [inviteCode,setInviteCode]=useState('')
  const [otpSent,setOtpSent]=useState(false)
  const [localMessage,setLocalMessage]=useState('')

  const requestCode=async()=>{
    setLocalMessage('')
    const ok=await onRequestOtp(email)
    if(ok){
      setOtpSent(true)
      setLocalMessage('Un e-mail de connexion a été envoyé. S’il contient un code, saisis-le ci-dessous ; s’il contient un lien, tu peux aussi cliquer dessus.')
    }
  }

  const verifyCode=async()=>{
    setLocalMessage('')
    const ok=await onVerifyOtp(email,otp)
    if(ok) setLocalMessage('')
  }

  const claim=async()=>{
    setLocalMessage('')
    const ok=await onClaim(inviteCode)
    if(ok){
      setInviteCode('')
      setLocalMessage('Profil associé. La progression est maintenant synchronisée.')
    }
  }

  if(!isSupabaseConfigured){
    return <div className="profile-switcher">
      <span className="profile-switcher-label">Profil de suivi</span>
      <div className="profile-options">
        {PROFILES.map(profile=><button key={profile.id} className={`profile-option ${activeProfile===profile.id?'active':''}`} onClick={()=>onProfileChange(profile.id)}>{profile.label}</button>)}
      </div>
      <small>Mode local.</small>
    </div>
  }

  if(session && cloudProfile){
    return <div className="profile-switcher cloud-account">
      <span className="profile-switcher-label">Compte connecté</span>
      <strong className="cloud-account-name">{cloudProfile.display_name}</strong>
      <small>Progression synchronisée entre ordinateur et mobile.</small>
      <button className="logout-button" onClick={onLogout} disabled={busy}>Se déconnecter</button>
    </div>
  }

  if(session && !cloudProfile){
    return <div className="profile-switcher auth-panel">
      <span className="profile-switcher-label">Première connexion</span>
      <small>Choisis ton profil puis saisis le code d’invitation qui t’a été remis.</small>
      <div className="profile-options">
        {PROFILES.map(profile=><button
          key={profile.id}
          className={`profile-option ${activeProfile===profile.id?'active':''}`}
          onClick={()=>onProfileChange(profile.id)}
          aria-pressed={activeProfile===profile.id}
        >{profile.label}</button>)}
      </div>
      <input className="auth-input" type="text" value={inviteCode} onChange={e=>setInviteCode(e.target.value.toUpperCase())} placeholder={"Code d’invitation "+activeProfileLabel} autoComplete="one-time-code" />
      <button className="login-button" disabled={busy||!inviteCode} onClick={claim}>{busy?'Association…':'Associer ce compte à '+activeProfileLabel}</button>
      {(error||localMessage)&&<small className={error?'auth-error':'auth-message'}>{error||localMessage}</small>}
      <button className="logout-button" onClick={onLogout} disabled={busy}>Utiliser une autre adresse e-mail</button>
    </div>
  }

  return <div className="profile-switcher auth-panel">
    <span className="profile-switcher-label">Connexion au suivi</span>
    <div className="profile-options">
      {PROFILES.map(profile=><button
        key={profile.id}
        className={`profile-option ${activeProfile===profile.id?'active':''}`}
        onClick={()=>onProfileChange(profile.id)}
        aria-pressed={activeProfile===profile.id}
      >{profile.label}</button>)}
    </div>

    {!otpSent ? <>
      <input className="auth-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder={"E-mail de "+activeProfileLabel} autoComplete="email" />
      <button className="login-button" disabled={busy||!email} onClick={requestCode}>{busy?'Envoi…':'Recevoir un code par e-mail'}</button>
    </> : <>
      <div className="otp-email">{email}</div>
      <input className="auth-input otp-input" inputMode="numeric" value={otp} onChange={e=>setOtp(e.target.value.replace(/\D/g,'').slice(0,8))} placeholder="Code reçu par e-mail (si présent)" autoComplete="one-time-code" />
      <button className="login-button" disabled={busy||otp.length<6} onClick={verifyCode}>{busy?'Vérification…':'Valider le code'}</button>
      <button className="text-button" onClick={()=>{setOtpSent(false);setOtp('');setLocalMessage('')}} disabled={busy}>Changer d’adresse e-mail</button>
    </>}

    {(error||localMessage)&&<small className={error?'auth-error':'auth-message'}>{error||localMessage}</small>}
    <small>À la première connexion seulement, un code d’invitation sera demandé après authentification de l’e-mail.</small>
  </div>
}

function formatActivityDate(value){
  if(!value) return ''
  const date=new Date(value)
  if(Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('fr-FR',{dateStyle:'medium',timeStyle:'short'}).format(date)
}

function ResumeCard({activity,onResume}){
  if(!activity) return null
  return <section className="resume-card">
    <div className="resume-icon" aria-hidden>{activity.entryIcon||'↩️'}</div>
    <div className="resume-copy">
      <span className="section-kicker">REPRENDRE</span>
      <h2>{activity.entryTitle}</h2>
      <p>{activity.sectionTitle}{activity.action?' • '+activity.action:''}</p>
      {activity.updatedAt&&<small>Dernière activité : {formatActivityDate(activity.updatedAt)}</small>}
    </div>
    <button className="resume-button" onClick={onResume}>Reprendre <span aria-hidden>→</span></button>
  </section>
}

function ProgressDashboard({section,entries,progress,syncState,profileLabel,onBack,onOpen}){
  return <div className="progress-dashboard-page">
    <button className="back" onClick={onBack}>← Retour à l’accueil</button>
    <section className="section-head" style={{'--tile':section.color}}>
      <span className="icon big">{section.icon}</span>
      <div><h2>{section.title}</h2><p>Vue d’ensemble immédiate du profil {profileLabel}, puis accès au détail des résultats et priorités de révision.</p></div>
    </section>

    <section className="content-block progress-overview-direct">
      <div className="progress-overview-heading">
        <div><span className="section-kicker">VUE D’ENSEMBLE</span><h3>Où en est {profileLabel} ?</h3></div>
        <span className={'sync-chip '+syncState}>{syncState==='cloud'?'☁ Synchronisé':syncState==='loading'?'↻ Synchronisation':syncState==='error'?'⚠ Copie locale':'Appareil local'}</span>
      </div>
      <ProgressView type="overview" progress={progress} profileLabel={profileLabel} syncState={syncState}/>
    </section>

    <section className="content-block">
      <div className="section-label-row progress-detail-heading">
        <div><span className="section-kicker">DÉTAIL</span><h2>Analyser la progression</h2></div>
        <p>Résultats, erreurs, notions maîtrisées et éléments à revoir.</p>
      </div>
      <main className="subgrid">
        {entries.map((entry,i)=><button
          className="subtile"
          key={entry.title}
          style={{'--tile':section.color}}
          onClick={()=>onOpen(entry.title)}
        >
          <span className="sub-icon" aria-hidden>{entry.icon}</span>
          <span className="subtile-copy">
            <span className="sub-number">{String(i+1).padStart(2,'0')}</span>
            <span className="sub-title">{entry.title}</span>
          </span>
          <span className="sub-arrow" aria-hidden>→</span>
        </button>)}
      </main>
    </section>
  </div>
}

function App(){
  const [active, setActive] = useState(null)
  const [activeSub, setActiveSub] = useState(null)
  const [activeProfile, setActiveProfile] = useState(loadActiveProfile)
  const [session,setSession] = useState(null)
  const [cloudProfile,setCloudProfile] = useState(null)
  const [authBusy,setAuthBusy] = useState(false)
  const [authError,setAuthError] = useState('')
  const activeProfileLabel = PROFILES.find(p=>p.id===activeProfile)?.label || 'Rachid'
  const progressUserId = cloudProfile ? (session?.user?.id || null) : null
  const [progress,updateProgress,syncState] = useProgress(activeProfile,progressUserId)

  const changeProfile=(profile)=>{
    if(session) return
    setActiveProfile(profile)
    saveActiveProfile(profile)
    setAuthError('')
  }

  const applySession=async(nextSession)=>{
    setSession(nextSession)
    if(!nextSession){
      setCloudProfile(null)
      return
    }
    try{
      const profile=await fetchProfile(nextSession.user.id)
      setCloudProfile(profile)
      const match=PROFILES.find(p=>p.label===profile?.display_name)
      if(match){
        setActiveProfile(match.id)
        saveActiveProfile(match.id)
      }
    }catch{
      setCloudProfile(null)
      setAuthError('Impossible de lire le profil associé à ce compte.')
    }
  }

  useEffect(()=>{
    if(!isSupabaseConfigured) return
    let mounted=true
    getSession().then(s=>{if(mounted) applySession(s)}).catch(()=>{})
    const subscription=onAuthChange(s=>{if(mounted) applySession(s)})
    return ()=>{
      mounted=false
      subscription?.unsubscribe?.()
    }
  },[])

  const handleRequestOtp=async(email)=>{
    setAuthBusy(true)
    setAuthError('')
    try{
      await requestEmailOtp(email)
      return true
    }catch(err){
      setAuthError(err?.message || 'Envoi du code impossible.')
      return false
    }finally{
      setAuthBusy(false)
    }
  }

  const handleVerifyOtp=async(email,token)=>{
    setAuthBusy(true)
    setAuthError('')
    try{
      const {session:nextSession}=await verifyEmailOtp(email,token)
      await applySession(nextSession)
      return Boolean(nextSession)
    }catch(err){
      setAuthError(err?.message || 'Code invalide ou expiré.')
      return false
    }finally{
      setAuthBusy(false)
    }
  }

  const handleClaim=async(code)=>{
    if(!session?.user?.id) return false
    setAuthBusy(true)
    setAuthError('')
    try{
      await claimProfile(activeProfileLabel,code)
      const profile=await fetchProfile(session.user.id)
      setCloudProfile(profile)
      const match=PROFILES.find(p=>p.label===profile?.display_name)
      if(match){
        setActiveProfile(match.id)
        saveActiveProfile(match.id)
      }
      return Boolean(profile)
    }catch(err){
      const msg=String(err?.message||'')
      if(msg.toLowerCase().includes('invitation')||msg.toLowerCase().includes('code')){
        setAuthError('Code d’invitation invalide.')
      }else if(msg.toLowerCase().includes('déjà')||msg.toLowerCase().includes('already')){
        setAuthError('Ce profil est déjà associé à un autre compte.')
      }else{
        setAuthError('Association du profil impossible.')
      }
      return false
    }finally{
      setAuthBusy(false)
    }
  }

  const handleLogout=async()=>{
    setAuthBusy(true)
    setAuthError('')
    try{
      await signOut()
      setSession(null)
      setCloudProfile(null)
    }catch(err){
      setAuthError(err?.message || 'Déconnexion impossible.')
    }finally{
      setAuthBusy(false)
    }
  }
  const section = sections.find(s => s.id === active)
  const selectedEntry = active && activeSub ? subpages[active].find(e => e.title === activeSub) : null

  const dashboard = sections.filter(s => s.group === 'dashboard')
  const learn = sections.filter(s => s.group === 'learn')
  const practice = sections.filter(s => s.group === 'practice')

  const lastActivity=progress.lastActivity
  const canResume=Boolean(
    lastActivity &&
    sections.some(s=>s.id===lastActivity.sectionId) &&
    subpages[lastActivity.sectionId]?.some(e=>e.title===lastActivity.entryTitle)
  )
  const resumeActivity=canResume?lastActivity:null

  const resumeLastActivity=()=>{
    if(!resumeActivity) return
    setActive(resumeActivity.sectionId)
    setActiveSub(resumeActivity.entryTitle)
  }

  const totalAnswered=Object.values(progress.quiz||{}).reduce((sum,r)=>sum+(r.answered||0),0)
  const totalCorrect=Object.values(progress.quiz||{}).reduce((sum,r)=>sum+(r.correct||0),0)
  const score=totalAnswered?Math.round(totalCorrect/totalAnswered*100):0
  const progressMeta=totalAnswered?score+'% QCM':'Profil : '+activeProfileLabel

  return <div className="app-shell">
    <header className="hero">
      <div>
        <span className="eyebrow">AGRÉGATION EXTERNE ÉCONOMIE-GESTION</span>
        <h1>Marketing & Tourisme</h1>
        <p>Un espace de consultation et d’entraînement pour apprendre, mémoriser, s’exercer et travailler sur des cas réels sourcés.</p>
      </div>
      <div className="hero-tools">
        <AuthPanel
          activeProfile={activeProfile}
          activeProfileLabel={activeProfileLabel}
          onProfileChange={changeProfile}
          session={session}
          cloudProfile={cloudProfile}
          onRequestOtp={handleRequestOtp}
          onVerifyOtp={handleVerifyOtp}
          onClaim={handleClaim}
          onLogout={handleLogout}
          busy={authBusy}
          error={authError}
        />
        <div className="status-card">
          <span className="status-dot"></span>
          <div><strong>Base de préparation complète</strong><small>108 fiches + tableau de bord • {session?'synchronisé : ':'profil actif : '}{activeProfileLabel}</small></div>
        </div>
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
          {dashboard.map(s => <Tile key={s.id} section={s.id==='progression'?{...s,meta:progressMeta}:s} variant="dashboard" onOpen={(id)=>{setActive(id);setActiveSub(null)}} />)}
        </div>
      </section>

      {resumeActivity&&<ResumeCard activity={resumeActivity} onResume={resumeLastActivity}/>}

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
    </> : active==='progression' && !activeSub ? <ProgressDashboard
      section={section}
      entries={subpages.progression}
      progress={progress}
      syncState={syncState}
      profileLabel={activeProfileLabel}
      onBack={()=>{setActive(null);setActiveSub(null)}}
      onOpen={setActiveSub}
    /> : activeSub && selectedEntry ? <DetailPage
      key={activeProfile+'|'+active+'|'+activeSub}
      section={section}
      entry={selectedEntry}
      onBack={()=>setActiveSub(null)}
      profileLabel={activeProfileLabel}
      progress={progress}
      updateProgress={updateProgress}
      syncState={syncState}
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
      <div className="placeholder-note">Toutes les rubriques disposent d’un contenu. Les cas réels indiquent leurs sources et leur date de vérification.</div>
    </>}

    <footer>
      <span>Préparation Agrégation • Option C Marketing</span>
      <span>Sources identifiées • Cas datés • {session?'Progression synchronisée':'Progression locale'}</span>
    </footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
