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
    metrics:[['80+','mises en relation'],['55+','expérimentations / partenariats'],['IA / IoT / 3D','technologies']],
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

export const courseDeepVisuals = {
  'cours|Marché & environnement': [
    {after:2,kind:'fiveforces',title:'Cinq forces — où se situe le pouvoir ?',items:[
      'Rivalité entre concurrents','Nouveaux entrants','Produits ou services de substitution','Pouvoir des clients','Pouvoir des fournisseurs'
    ],caption:'Le modèle de Porter explique la pression sur la rentabilité structurelle d’un secteur ; il ne remplace ni l’analyse de la demande ni celle des ressources internes.'},
    {after:4,kind:'matrix6',title:'PESTEL — six familles à relier au marketing',items:[
      ['P','Politique'],['E','Économique'],['S','Socioculturel'],['T','Technologique'],['E','Environnemental'],['L','Légal']
    ],caption:'Un facteur PESTEL n’est utile que s’il modifie la demande, les coûts, les canaux ou les règles du jeu.'},
    {after:6,kind:'matrix4',title:'SWOT — synthèse, pas point de départ',items:[
      ['Forces','Interne • favorable'],['Faiblesses','Interne • défavorable'],['Opportunités','Externe • favorable'],['Menaces','Externe • défavorable']
    ],caption:'Chaque case doit contenir un fait prouvé et une conséquence, pas une généralité.'}
  ],
  'cours|Comportement du consommateur': [
    {after:3,kind:'tpb',title:'Théorie du comportement planifié — Ajzen',left:['Attitude','Norme subjective','Contrôle perçu'],center:'Intention',right:'Comportement',caption:'Le passage de l’intention au comportement dépend aussi du contrôle réel et du contexte.'},
    {after:4,kind:'risk',title:'Risque perçu et réducteurs de risque',items:[
      ['Financier','garantie / flexibilité'],['Fonctionnel','preuves / démonstration'],['Social','avis / recommandation'],['Temporel','simplicité / assistance']
    ],caption:'Plus l’incertitude est forte, plus le client cherche des signaux qui réduisent le risque.'}
  ],
  'cours|Segmentation • Ciblage • Positionnement': [
    {after:1,kind:'criteria',title:'Les grandes familles de critères de segmentation',items:[
      ['Qui ?','Sociodémographique'],['Où ?','Géographique'],['Comment ?','Comportemental'],['Pourquoi ?','Bénéfices recherchés'],['Quel style ?','Psychographique']
    ],caption:'Les critères descriptifs sont faciles à observer ; les critères comportementaux ou de bénéfices expliquent souvent mieux la réponse marketing.'},
    {after:6,kind:'perceptual',title:'Carte perceptuelle — positionnement perçu',x:'Prix perçu',y:'Expérience / service',points:[['A','25%','68%'],['B','68%','72%'],['C','72%','30%'],['D','40%','38%']],caption:'Les axes doivent provenir des perceptions clients. Un espace vide ne prouve pas qu’un segment rentable existe.'}
  ],
  'cours|Produit / Service / Marque': [
    {after:3,kind:'portfolio',title:'Architecture de gamme — rôles possibles',items:[
      ['Entrée','Recruter'],['Cœur','Porter le volume'],['Premium','Valoriser'],['Spécialité','Servir une niche']
    ],caption:'Chaque référence doit avoir un rôle ; sinon la gamme devient illisible et coûteuse.'},
    {after:5,kind:'brandnet',title:'Capital de marque — réseau d’associations',center:'MARQUE',items:['Notoriété','Qualité perçue','Associations','Préférence','Fidélité'],caption:'Le capital de marque dépasse la notoriété : il tient aussi aux associations et aux réponses qu’elles déclenchent.'}
  ],
  'cours|Prix': [
    {after:2,kind:'elasticity',title:'Élasticité-prix — lire le sens avant le chiffre',left:'Prix ↑',middle:'Demande',right:'Quantité ↓',caption:'La réaction peut être forte ou faible selon les substituts, le segment, la période et le niveau initial du prix.'},
    {after:6,kind:'rm',title:'Revenue management — quatre décisions liées',items:['Prévoir la demande','Segmenter','Fixer les prix','Ouvrir / fermer l’inventaire'],caption:'L’objectif n’est pas seulement de remplir : il faut optimiser la contribution de la capacité disponible.'}
  ],
  'cours|Communication': [
    {after:2,kind:'message',title:'Anatomie d’un message marketing',items:['Promesse','Bénéfice','Preuve','Ton','Action attendue'],caption:'Un message convaincant relie ce que la marque promet à une preuve crédible pour la cible.'},
    {after:8,kind:'kpiladder',title:'Des métriques de visibilité aux résultats',items:['Portée','Engagement','Trafic','Conversion','Valeur client'],caption:'Plus on descend, plus l’indicateur se rapproche d’un résultat économique ou relationnel.'}
  ],
  'cours|Distribution & omnicanal': [
    {after:1,kind:'channel',title:'Circuit direct et indirect',left:['Entreprise','Canal direct','Client'],right:['Entreprise','Intermédiaire','Client'],caption:'L’intermédiaire ne “disparaît” pas sans contrepartie : ses fonctions doivent être reprises ailleurs.'},
    {after:6,kind:'hub',title:'Omnicanal — un client, plusieurs points de contact',center:'CLIENT',items:['Magasin','Site','App','Réseaux sociaux','Centre de contact','Plateforme'],caption:'Le défi n’est pas d’avoir beaucoup de canaux, mais de rendre leurs informations et processus cohérents.'}
  ],
  'cours|Marketing digital': [
    {after:0,kind:'journey',title:'Parcours digital — les touchpoints s’enchaînent',items:['Inspiration','Recherche','Comparaison','Conversion','Usage','Avis / fidélité'],caption:'Le parcours réel est souvent non linéaire et passe par plusieurs appareils ou acteurs.'},
    {after:7,kind:'metricchain',title:'Chaîne de mesure digitale',items:[
      ['Audience','Qui voit ?'],['Acquisition','Qui vient ?'],['Conversion','Qui agit ?'],['Rétention','Qui revient ?'],['Valeur','Qui rapporte ?']
    ],caption:'Une métrique intermédiaire n’a de sens que reliée à la suite du parcours.'}
  ],
  'cours|Marketing des services': [
    {after:1,kind:'servuction',title:'Schéma de servuction',front:['Client','Personnel en contact','Support physique'],back:['Organisation interne','Systèmes','Back-office'],caption:'La prestation visible dépend d’un système plus large que le seul contact client.'},
    {after:2,kind:'sevenp',title:'Les 7P du marketing des services',items:['Product','Price','Place','Promotion','People','Process','Physical Evidence'],caption:'Les trois P supplémentaires obligent à considérer les personnes, le processus et les preuves tangibles.'}
  ],
  'cours|Marketing BtoB': [
    {after:2,kind:'buyingcenter',title:'Centre d’achat — plusieurs rôles autour d’une même décision',center:'Décision BtoB',items:['Utilisateur','Prescripteur','Acheteur','Décideur','Influenceur','Gatekeeper'],caption:'Une même personne peut cumuler plusieurs rôles, et leur poids varie selon la situation d’achat.'},
    {after:5,kind:'valueeq',title:'Proposition de valeur BtoB',left:'Bénéfices économiques + opérationnels',right:'Coûts + risques + effort de changement',center:'VALEUR NETTE',caption:'Le prix facial n’est qu’une partie de l’équation.'}
  ],
  'cours|Marketing territorial': [
    {after:4,kind:'stakeholders',title:'Écosystème territorial',center:'TERRITOIRE',items:['Habitants','Collectivités','Entreprises','Visiteurs','Associations','Transporteurs'],caption:'Le territoire est co-produit par des acteurs aux intérêts parfois divergents.'},
    {after:2,kind:'identity',title:'Identité, image, réputation',items:['Identité voulue','Signaux envoyés','Expériences vécues','Image perçue','Réputation dans le temps'],caption:'La communication influence l’image, mais l’expérience finit par arbitrer la crédibilité de la promesse.'}
  ],
  'cours|Marketing entrepreneurial': [
    {after:1,kind:'effectuation',title:'Causation vs effectuation',left:['Objectif fixé','Prévoir','Choisir les moyens'],right:['Moyens disponibles','Agir','Construire les possibles'],caption:'L’effectuation n’est pas l’improvisation : c’est une logique de contrôle dans l’incertitude.'},
    {after:4,kind:'experiment',title:'Boucle d’expérimentation',items:['Hypothèse','Test minimal','Mesure','Apprentissage','Décision'],caption:'Chaque expérimentation doit réduire une incertitude précise.'}
  ],
  'cours|Marketing international': [
    {after:2,kind:'entry',title:'Modes d’entrée — contrôle vs engagement',items:[
      ['Export','Faible engagement'],['Licence / franchise','Partage'],['Alliance / JV','Co-contrôle'],['Filiale','Contrôle élevé']
    ],caption:'Plus le contrôle augmente, plus l’investissement et l’exposition augmentent généralement.'},
    {after:3,kind:'adapt',title:'Standardiser ou adapter ?',left:['Identité de marque','Économies d’échelle','Process'],right:['Langue','Usage local','Réglementation','Canaux'],center:'ARBITRAGE',caption:'Une stratégie internationale combine souvent standardisation et adaptation.'}
  ],
  'cours|Études marketing': [
    {after:2,kind:'methodchoice',title:'Quel type d’étude choisir ?',items:[
      ['Explorer','Qualitatif'],['Mesurer','Quantitatif'],['Expliquer un effet','Expérimentation'],['Contextualiser','Données secondaires']
    ],caption:'La méthode dépend de la question, pas de la préférence du chercheur.'},
    {after:6,kind:'questionnaire',title:'Questionnaire — quatre pièges à éviter',items:['Question double','Formulation orientée','Échelle incohérente','Modalités incomplètes'],caption:'Une mauvaise mesure produit une donnée fragile, même sur un grand échantillon.'}
  ],
  'cours|Statistiques & décision': [
    {after:4,kind:'testlogic',title:'Logique d’un test statistique',items:['Formuler H0','Choisir le test','Calculer','Comparer au seuil','Conclure avec prudence'],caption:'La p-value ne donne pas la probabilité que H0 soit vraie.'},
    {after:7,kind:'causality',title:'Corrélation ≠ causalité',left:'X varie avec Y',middle:'Association observée',right:'Cause possible ?',caption:'Variable omise, causalité inverse ou coïncidence peuvent produire une corrélation.'}
  ],
  'cours|Droit appliqué au marketing': [
    {after:6,kind:'gdpr',title:'RGPD — les réflexes avant de collecter',items:['Finalité','Base légale','Minimisation','Information','Durée','Droits'],caption:'La conformité commence avant la collecte, pas après.'},
    {after:3,kind:'promo',title:'Promotion — contrôle rapide',items:['Prix antérieur','Période 30 jours','Affichage clair','Preuve conservée'],caption:'Le prix de référence doit pouvoir être justifié.'}
  ]
}

export function getDeepVisualsForPage(pageKey){
  return courseDeepVisuals[pageKey] || []
}

export function getVisualForPage(pageKey,sectionId,page){
  if(courseVisuals[pageKey]) return courseVisuals[pageKey]
  if(caseVisuals[pageKey]) return caseVisuals[pageKey]

  const points=(page?.keyPoints||[]).slice(0,4)
  const chapters=(page?.sections||[]).slice(0,4).map(s=>String(s.heading||'').replace(/^\d+\.\s*/,''))
  const flashcards=(page?.flashcards||[]).slice(0,4).map(card=>card.front)
  const quizTopics=(page?.quiz||[]).slice(0,4).map(q=>q.q.length>58?q.q.slice(0,55)+'…':q.q)
  const available=points.length?points:chapters.length?chapters:flashcards.length?flashcards:quizTopics

  if(sectionId==='auteurs'){
    return {
      kind:'concept',
      title:'Carte de mémorisation',
      nodes:(available.length?available:['Auteur','Concept','Mécanisme','Usage dans la copie']).slice(0,4),
      caption:'Relier la référence à son concept, son mécanisme et son usage est plus efficace que mémoriser un nom isolé.'
    }
  }
  if(sectionId==='tourisme'){
    return {
      kind:'flow',
      title:'Lecture marketing du sujet',
      nodes:(available.length?available:['Contexte','Client','Offre','Expérience','Performance']).slice(0,5),
      caption:'Le secteur touristique sert de terrain d’application : toujours revenir au mécanisme marketing.'
    }
  }
  if(sectionId==='entrainement'){
    return {
      kind:'steps',
      title:page?.quiz?.length?'Boucle d’entraînement':'Méthode de travail',
      nodes:(available.length?available:['Consigne','Réponse','Correction','Compréhension','Nouvel essai']).slice(0,5),
      caption:'L’ancrage vient de la récupération active, de la correction expliquée et de la répétition.'
    }
  }
  if(sectionId==='veille'){
    return {
      kind:'flow',
      title:'Transformer une actualité en exemple',
      nodes:['Fait daté','Source','Notion','Mécanisme','Limite'],
      caption:'Une actualité n’est utile au concours que si elle illustre précisément un concept.'
    }
  }
  if(sectionId==='bibliotheque'){
    return {
      kind:'source',
      title:'Hiérarchie des sources',
      nodes:['Officiel','Académique','Professionnel','Ressource de préparation'],
      caption:'La nature de la source détermine la force de ce qu’elle permet d’affirmer.'
    }
  }
  if(sectionId==='concours'){
    return {
      kind:'steps',
      title:'Repère concours',
      nodes:(available.length?available:['Programme','Méthode','Entraînement','Évaluation','Ajustement']).slice(0,5),
      caption:'Situer chaque ressource dans la logique générale de préparation et d’épreuve.'
    }
  }
  if(sectionId==='progression'){
    return {
      kind:'flow',
      title:'Boucle de progression',
      nodes:['Activité','Résultats','Erreurs','Priorités','Nouvel entraînement'],
      caption:'Le suivi sert à décider quoi revoir et quoi pratiquer ensuite.'
    }
  }
  return {
    kind:'concept',
    title:'Repère visuel',
    nodes:(available.length?available:['Idée centrale','Mécanisme','Application','À retenir']).slice(0,4),
    caption:'Synthèse graphique des idées principales de la fiche.'
  }
}
