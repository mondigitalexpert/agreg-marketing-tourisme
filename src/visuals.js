export const courseVisuals = {
  'cours|Marché & environnement': {
    kind:'flow', title:'Du marché à la décision',
    nodes:['Environnement','Marché','Diagnostic','Enjeux','Décision'],
    caption:'PESTEL éclaire le contexte, Porter la structure concurrentielle, puis le diagnostic hiérarchise les enjeux.'
  },
  'cours|Comportement du consommateur': {
    kind:'flow', title:'Du stimulus au comportement',
    nodes:['Stimuli','Perception & attitudes','Intention','Décision','Post-achat'],
    caption:'Le comportement dépend aussi des normes sociales, du contrôle perçu, des émotions et de la situation.'
  },
  'cours|Segmentation • Ciblage • Positionnement': {
    kind:'flow', title:'La logique SCP',
    nodes:['Segmenter','Évaluer','Cibler','Positionner','Décliner le mix'],
    caption:'Chaque étape réduit l’incertitude et prépare la suivante.'
  },
  'cours|Produit / Service / Marque': {
    kind:'layers', title:'Les couches de l’offre',
    nodes:['Bénéfice recherché','Offre / prestation','Services associés','Marque & gamme','Expérience'],
    caption:'La valeur perçue vient de l’ensemble, pas seulement des caractéristiques techniques.'
  },
  'cours|Prix': {
    kind:'triangle', title:'Les trois repères du prix',
    nodes:['Coûts','Valeur perçue','Concurrence'],
    center:'Prix acceptable et rentable',
    caption:'Le bon prix se situe à l’intersection de l’économie de l’offre et de la valeur pour le client.'
  },
  'cours|Communication': {
    kind:'flow', title:'Construire une communication efficace',
    nodes:['Objectif','Cible','Message','Canaux','KPI'],
    caption:'Le canal vient après l’objectif et la cible.'
  },
  'cours|Distribution & omnicanal': {
    kind:'split', title:'Distribuer sans perdre la relation',
    left:['Direct','Site / app','Données client'],
    right:['Indirect','Intermédiaires','Audience / portée'],
    center:'Mix omnicanal',
    caption:'Comparer les canaux par coût net, contrôle, portée, données et fidélisation.'
  },
  'cours|Marketing digital': {
    kind:'funnel', title:'Le cycle digital',
    nodes:['Acquisition','Engagement','Conversion','Rétention','Recommandation'],
    caption:'Chaque étape a ses propres leviers et KPI.'
  },
  'cours|Marketing des services': {
    kind:'flow', title:'La chaîne de l’expérience de service',
    nodes:['Attentes','Servuction','Expérience','Satisfaction','Fidélité'],
    caption:'Personnel, processus, support physique et client participent à la production du service.'
  },
  'cours|Marketing BtoB': {
    kind:'flow', title:'Le parcours d’achat organisationnel',
    nodes:['Besoin','Centre d’achat','Évaluation','Négociation','Relation'],
    caption:'Plusieurs acteurs peuvent avoir des critères et des pouvoirs différents.'
  },
  'cours|Marketing territorial': {
    kind:'flow', title:'Construire l’attractivité',
    nodes:['Identité','Parties prenantes','Offre territoriale','Image','Attractivité'],
    caption:'La marque territoriale ne vaut que si elle repose sur une expérience réelle et une gouvernance crédible.'
  },
  'cours|Marketing entrepreneurial': {
    kind:'cycle', title:'Boucle d’apprentissage entrepreneurial',
    nodes:['Moyens','Hypothèse','Test','Apprentissage','Adaptation'],
    caption:'Dans l’incertitude, apprendre vite vaut souvent mieux que prédire parfaitement.'
  },
  'cours|Marketing international': {
    kind:'flow', title:'Décider à l’international',
    nodes:['Choisir le marché','Mode d’entrée','Adapter / standardiser','Déployer le mix','Contrôler'],
    caption:'Le niveau d’adaptation dépend des différences de marché, de réglementation, de culture et de concurrence.'
  },
  'cours|Études marketing': {
    kind:'flow', title:'De la décision à l’étude',
    nodes:['Question de gestion','Question d’étude','Collecte','Analyse','Décision'],
    caption:'On ne commence pas par un questionnaire, mais par une décision à éclairer.'
  },
  'cours|Statistiques & décision': {
    kind:'flow', title:'Du chiffre à la décision',
    nodes:['Données','Décrire','Tester / modéliser','Interpréter','Décider'],
    caption:'Le calcul n’est jamais la conclusion : il faut toujours interpréter.'
  },
  'cours|Droit appliqué au marketing': {
    kind:'flow', title:'Réflexe juridique marketing',
    nodes:['Pratique','Règle','Risque','Conformité','Confiance'],
    caption:'Le droit doit être intégré dès la conception de l’action marketing.'
  }
}

export const caseVisuals = {
  'cas|Hôtellerie': {
    kind:'case', title:'Accor 2026 — lecture rapide',
    metrics:[['5,639 Md€','CA 2025'],['45+','marques'],['220 M+','membres ALL']],
    tension:'Portefeuille puissant ↔ cohérence des marques et maîtrise de la distribution',
    levers:['Architecture de marque','CRM / fidélité','Réservation directe','Mix OTA / direct']
  },
  'cas|Plateformes': {
    kind:'case', title:'Booking.com — puissance et régulation',
    metrics:[['186,1 Md$','gross bookings 2025'],['1,2 Md','nuitées réservées'],['DMA + DSA','cadre UE']],
    tension:'Audience et conversion ↔ dépendance des fournisseurs et régulation',
    levers:['Effets de réseau','Données','Canal direct','Confiance']
  },
  'cas|Transport': {
    kind:'case', title:'Air France-KLM — réseau et transformation',
    metrics:[['33 Md€','CA 2025'],['320+','destinations'],['80 %','flotte nouvelle génération visée 2030']],
    tension:'Puissance du réseau ↔ coûts, transition et expérience',
    levers:['Flying Blue','Réseau','Digital','Renouvellement flotte']
  },
  'cas|Destinations touristiques': {
    kind:'case', title:'France 2026 — signaux de conjoncture',
    metrics:[['49,4 Md€','recettes internationales janv.-juil.'],['+1,1 %','nuitées collectives'],['-0,7 %','arrivées aériennes']],
    tension:'Fréquentation solide ↔ arbitrages budgétaires et marchés hétérogènes',
    levers:['Valeur','Saisonnalité','Segmentation','Partenariats']
  },
  'cas|Parcs & loisirs': {
    kind:'case', title:'Parc Astérix — prolonger le séjour',
    metrics:[['90 %','occupation hôtelière'],['450','chambres actuelles'],['+300','chambres annoncées 2027']],
    tension:'Extension de capacité ↔ remplissage et qualité d’expérience',
    levers:['Hôtellerie','Événementiel','Panier global','Saisonnalité']
  },
  'cas|Restauration': {
    kind:'case', title:'Restauration — lire au-delà du CA',
    metrics:[['+9,8 %','CA hiver 2026'],['+1,4 %','prix à la consommation'],['Provisoire','données 2026']],
    tension:'Hausse du chiffre d’affaires ↔ marge et volumes réels',
    levers:['Panier moyen','Couverts','Marge','Saisonnalité']
  },
  'cas|Croisières': {
    kind:'case', title:'Royal Caribbean — stratégie d’écosystème',
    metrics:[['9,4 M','vacances 2025'],['8','nouveaux navires annoncés'],['5','destinations terrestres visées']],
    tension:'Croissance de capacité ↔ différenciation et remplissage',
    levers:['Écosystème','Fidélité','Cross-selling','Expérience']
  },
  'cas|Acteurs publics': {
    kind:'case', title:'France Tourisme Tech — orchestrer un écosystème',
    metrics:[['35','entreprises accompagnées'],['≈80','partenaires'],['4e','édition 2026']],
    tension:'Soutenir l’innovation ↔ démontrer des usages et retombées',
    levers:['Open innovation','Mentorat','Expérimentation','Internationalisation']
  },
  'cas|Start-up tourisme': {
    kind:'case', title:'Travel tech française — potentiel et fragilité',
    metrics:[['72,5 M€','levés en 2025'],['34 %','utilisent IA / big data'],['49 %','implantées en région']],
    tension:'Innovation technologique ↔ validation marché et modèle économique',
    levers:['Proposition de valeur','CAC','Rétention','Effets de réseau']
  },
  'cas|Crises & controverses': {
    kind:'case', title:'Booking.com — crise de confiance',
    metrics:[['2026','procédure DSA'],['Fraude','annonces'],['Phishing','risque client']],
    tension:'Croissance de plateforme ↔ sécurité et confiance',
    levers:['Prévention','Transparence','Assistance','Récupération de confiance']
  },
  'cas|Transformation digitale': {
    kind:'case', title:'France Tourisme Tech — du pilote au déploiement',
    metrics:[['80+','mises en relation'],['≈50','expérimentations'],['IA / IoT / 3D','technologies']],
    tension:'Expérimenter vite ↔ prouver la valeur à l’échelle',
    levers:['Adoption','ROI','Intégration','Conduite du changement']
  },
  'cas|Développement durable': {
    kind:'case', title:'Air France-KLM — engagement et preuve',
    metrics:[['80 %','flotte nouvelle génération visée 2030'],['2030','horizon annoncé'],['Mesure','impact réel à démontrer']],
    tension:'Promesse environnementale ↔ indicateurs réellement observés',
    levers:['Flotte','Carburants','Intensité','Émissions absolues']
  }
}

export function getVisualForPage(pageKey,sectionId,page){
  if(courseVisuals[pageKey]) return courseVisuals[pageKey]
  if(caseVisuals[pageKey]) return caseVisuals[pageKey]

  const points=(page?.keyPoints||[]).slice(0,4)
  const chapters=(page?.sections||[]).slice(0,4).map(s=>String(s.heading||'').replace(/^\d+\.\s*/,''))

  if(sectionId==='auteurs'){
    return {kind:'concept',title:'Carte de mémorisation',nodes:(points.length?points:chapters).slice(0,4),caption:'Relier le concept à son auteur, son mécanisme et son usage dans une copie.'}
  }
  if(sectionId==='tourisme'){
    return {kind:'flow',title:'Lecture marketing du sujet',nodes:(chapters.length?chapters:['Contexte','Client','Offre','Performance']).slice(0,5),caption:'Toujours relier le secteur touristique aux concepts marketing mobilisés.'}
  }
  if(sectionId==='entrainement'){
    return {kind:'steps',title:'Méthode de travail',nodes:(points.length?points:chapters).slice(0,5),caption:'La progression visuelle aide à automatiser la méthode avant le travail chronométré.'}
  }
  if(sectionId==='veille'){
    return {kind:'flow',title:'Transformer une actualité en exemple',nodes:['Fait daté','Source','Notion','Mécanisme','Limite'],caption:'Une actualité n’est utile au concours que si elle illustre précisément un concept.'}
  }
  if(sectionId==='bibliotheque'){
    return {kind:'source',title:'Hiérarchie des sources',nodes:['Officiel','Académique','Professionnel','Ressource de préparation'],caption:'La nature de la source détermine la force de ce qu’elle permet d’affirmer.'}
  }
  if(sectionId==='concours'){
    return {kind:'steps',title:'Repère concours',nodes:(points.length?points:chapters).slice(0,5),caption:'Situer la fiche dans la logique générale de préparation et d’épreuve.'}
  }
  if(points.length||chapters.length){
    return {kind:'concept',title:'Repère visuel',nodes:(points.length?points:chapters).slice(0,4),caption:'Synthèse graphique des idées principales de la fiche.'}
  }
  return null
}
