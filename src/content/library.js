const checked='08/11/2026'
const p=(title,intro,keyPoints,sections,sources=[])=>({label:'Bibliothèque',title,intro,keyPoints,sections,sources})

export const libraryPages = {
  'bibliotheque|Ressources fournies': p(
    'Ressources fournies pour cette préparation',
    'Ces documents constituent le corpus de départ transmis pour le projet. Ils sont utilisés comme ressources de travail, mais leur statut est distingué des sources officielles ou académiques.',
    [
      'Programme officiel de l’agrégation externe économie-gestion 2027.',
      'Sujet officiel Option C externe 2026 — Coopérative U.',
      'Copie/support de préparation “Innovation et marketing des services” — ressource non officielle.',
      'Support INSPE de méthodologie — destiné à l’agrégation interne ; seules les pratiques générales de préparation sont transposées.',
      'Document “Les courants de pensée du management” — ressource de révision à recouper avec des références académiques.',
      'Dossier d’articles marketing/digital : Accor, OKKO Hotels, Taxis Bleus, RFID, Procter & Gamble, données personnelles, relation client, nouvelles consommations.',
      'Plusieurs articles du dossier datent de 2015 : ils sont utilisés comme cas historiques et non comme descriptions actuelles.'
    ],
    [
      {heading:'Règle de provenance',text:'Une ressource fournie peut servir de point de départ, de sujet ou de cas historique. Une affirmation théorique ou actuelle destinée à être publiée est recoupée avec une source académique, officielle ou primaire lorsque cela est nécessaire.'},
      {heading:'Droit de diffusion',text:'Le support méthodologique INSPE indique des restrictions de reproduction. Il n’est pas republié dans l’application ; seules des idées générales de méthode sont synthétisées.'}
    ]
  ),

  'bibliotheque|Programme officiel': p(
    'Programme officiel 2027',
    'Le programme officiel est la référence de périmètre. Chaque cours du site doit pouvoir être relié à un item du programme, directement ou comme approfondissement utile.',
    [
      'Socle commun : management, droit et économie.',
      'Option C : compréhension du marché et environnement.',
      'Stratégie marketing : segmentation, ciblage, positionnement.',
      'Marketing opérationnel : produit/service, prix, communication, distribution.',
      'Marketing sectoriel : services, tourisme, digital, influence, territorial, entrepreneurial, BtoB, etc.',
      'Marketing international.',
      'Méthodes et outils d’aide à la décision.',
      'Éléments juridiques et réglementaires.'
    ],
    [
      {heading:'Usage',text:'Lorsqu’une fiche est ajoutée, vérifier qu’elle sert soit un item officiel, soit une compétence transversale explicitement utile aux épreuves.'}
    ],
    [{type:'Officiel',name:'Programme de la session 2027 — Économie et gestion',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked}]
  ),

  'bibliotheque|Sujets officiels': p(
    'Sujets officiels',
    'Les sujets officiels permettent de calibrer la difficulté, le niveau de contextualisation et la diversité des tâches demandées.',
    [
      'Le sujet Option C externe 2026 fourni porte sur Coopérative U.',
      'Il combine analyse de modèle d’affaires, positionnement, attentes consommateurs, calculs de performance, assortiment et stratégie digitale.',
      'La consigne demande explicitement de mobiliser concepts et théories associés.',
      'Les sujets officiels doivent être travaillés avant de consulter tout corrigé ou aide.',
      'Une banque de sujets doit conserver année, type de concours, option et durée.'
    ],
    [
      {heading:'Protocole',text:'Première tentative en temps limité ; seconde lecture pour identifier les concepts ; correction ; troisième passage ciblé sur les points faibles.'}
    ],
    [
      {type:'Officiel',name:'Ministère — Sujets de l’agrégation 2026',url:'https://www.devenirenseignant.gouv.fr/sujets-et-rapports-des-jurys-concours-de-l-agregation-de-2026-1659',checked},
      {type:'Ressource fournie',name:'Sujet option C externe 2026.pdf'}
    ]
  ),

  'bibliotheque|Rapports de jury': p(
    'Rapports de jury',
    'Les rapports servent de cahier des charges qualitatif : ils décrivent les difficultés récurrentes, les attendus et les recommandations de préparation.',
    [
      'Au 8 novembre 2026, le dernier rapport externe économie-gestion publié est celui de la session 2025.',
      'Le rapport externe économie-gestion 2026 est encore annoncé comme à venir sur la page officielle.',
      'Le rapport 2025 recommande pour l’Option C la lecture de revues académiques et la maîtrise des calculs.',
      'Il insiste plus largement sur la précision des réponses, l’usage raisonné des concepts et la contextualisation.',
      'La publication du rapport 2026 devra déclencher une révision des fiches concernées.'
    ],
    [
      {heading:'Checklist',text:'Après un entraînement : notions définies ? calculs faits et interprétés ? annexes réellement exploitées ? références pertinentes ? recommandations justifiées ?'}
    ],
    [
      {type:'Officiel',name:'Rapport du jury externe économie-gestion 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked},
      {type:'Officiel',name:'Rapports des jurys 2026',url:'https://www.devenirenseignant.gouv.fr/rapports-des-jurys-des-concours-de-l-agregation-de-la-session-2026-1811',checked}
    ]
  ),

  'bibliotheque|Articles académiques': p(
    'Références académiques — sélection de base',
    'Cette sélection couvre les cadres mobilisés dans les fiches. Elle n’a pas vocation à remplacer une bibliographie universitaire complète.',
    [
      'Ajzen (1991) — Theory of Planned Behavior.',
      'Arnould & Thompson (2005) — Consumer Culture Theory.',
      'Keller (1993) — Customer-Based Brand Equity.',
      'Vargo & Lusch (2004) — Service-Dominant Logic.',
      'Lemon & Verhoef (2016) — Customer Journey et expérience.',
      'Kannan & Li (2017) — Digital Marketing framework.',
      'Sarasvathy (2001) — Effectuation.',
      'Payne & Frow (2005) — CRM stratégique.',
      'Webster & Wind (1972) — comportement d’achat organisationnel.',
      'Kimes — Yield / Revenue Management dans les services.'
    ],
    [
      {heading:'Conseil',text:'Lire au minimum résumé, modèle proposé, variables centrales, conditions d’application et limites. Pour le concours, comprendre le mécanisme est plus important que mémoriser une citation.'}
    ],
    [
      {type:'Académique',name:'Ajzen — Theory of Planned Behavior',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T'},
      {type:'Académique',name:'Arnould & Thompson — CCT',url:'https://doi.org/10.1086/426626'},
      {type:'Académique',name:'Keller — CBBE',url:'https://doi.org/10.1177/002224299305700101'},
      {type:'Académique',name:'Vargo & Lusch — Service-Dominant Logic',url:'https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036'},
      {type:'Académique',name:'Lemon & Verhoef — Customer Journey',url:'https://doi.org/10.1509/jm.15.0420'},
      {type:'Académique',name:'Kannan & Li — Digital Marketing',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006'}
    ]
  ),

  'bibliotheque|Articles professionnels': p(
    'Sources professionnelles — à utiliser avec méthode',
    'Les sources professionnelles sont utiles pour les pratiques, tendances et cas. Elles doivent être lues en tenant compte de l’intérêt de leur auteur.',
    [
      'Communiqués d’entreprise : fiables pour ce que l’entreprise déclare, pas nécessairement indépendants pour évaluer son succès.',
      'Presse économique : utile pour contextualiser, à recouper lorsque l’enjeu est important.',
      'Presse sectorielle : utile pour les tendances métier, mais vérifier méthode et échantillon des études.',
      'Cabinets de conseil : utiles pour modèles et enquêtes, mais leurs publications peuvent soutenir une offre commerciale.',
      'Articles anciens : utiles comme histoire d’un cas, à dater explicitement.',
      'Éviter de transformer un classement ou prix marketing en preuve absolue de performance.'
    ],
    [
      {heading:'Règle',text:'Pour les cas publiés sur le site, priorité à la source primaire de l’entreprise pour les faits la concernant, puis à une source indépendante pour la mise en perspective lorsque disponible.'}
    ],
    [
      {type:'Entreprise',name:'Accor — Finance',url:'https://group.accor.com/fr/finance/financial-results',checked},
      {type:'Entreprise',name:'Air France-KLM — Newsroom',url:'https://www.airfranceklm.com/fr/newsroom/communiques-de-presse',checked},
      {type:'Entreprise',name:'Compagnie des Alpes — News',url:'https://news.compagniedesalpes.com/',checked}
    ]
  ),

  'bibliotheque|Statistiques officielles': p(
    'Statistiques officielles',
    'Les statistiques publiques sont prioritaires pour décrire un marché ou une évolution macro-sectorielle. Elles restent néanmoins dépendantes de définitions et champs précis.',
    [
      'Insee : hébergements, hôtellerie, restauration, prix, entreprises et conjoncture.',
      'Eurostat : comparaisons européennes et données harmonisées.',
      'Banque de France : notamment recettes et dépenses de voyages dans la balance des paiements.',
      'Atout France / France Tourisme Observation : synthèses et données sectorielles, souvent issues de plusieurs producteurs.',
      'DGE : politique touristique, travel tech et données d’entreprise/secteur.',
      'Toujours relever champ, unité, période, caractère provisoire/définitif et méthode.'
    ],
    [
      {heading:'Réflexe',text:'Ne jamais écrire “selon une étude” : nommer l’organisme, l’année, le périmètre et, si possible, la nature de la donnée.'}
    ],
    [
      {type:'Officiel',name:'Insee — Tourisme',url:'https://www.insee.fr/fr/statistiques?debut=0&theme=67',checked},
      {type:'Officiel UE',name:'Eurostat — Tourism',url:'https://ec.europa.eu/eurostat/web/tourism',checked},
      {type:'Officiel',name:'Atout France — Conjoncture',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked},
      {type:'Officiel',name:'DGE — Tourisme',url:'https://www.entreprises.gouv.fr/secteurs-dactivite/tourisme',checked}
    ]
  ),

  'bibliotheque|Ressources tourisme': p(
    'Ressources tourisme',
    'Sélection de sources stables pour nourrir les cas et actualiser les chiffres.',
    [
      'Atout France : conjoncture, labels, observation, international et ingénierie.',
      'Insee : hébergement, fréquentation et chiffres d’affaires.',
      'DGE : politiques publiques, travel tech et réglementation économique.',
      'Eurostat : comparaison européenne.',
      'Service-Public / Légifrance : règles relatives aux hébergements touristiques lorsque nécessaire.',
      'Publications officielles des entreprises : Accor, Air France-KLM, Booking Holdings, Compagnie des Alpes, groupes de croisière.'
    ],
    [
      {heading:'Mise à jour',text:'Pour un chiffre conjoncturel, vérifier avant chaque utilisation importante si une publication plus récente existe.'}
    ],
    [
      {type:'Officiel',name:'Atout France',url:'https://www.atout-france.fr/',checked},
      {type:'Officiel',name:'Insee',url:'https://www.insee.fr/',checked},
      {type:'Officiel',name:'DGE',url:'https://www.entreprises.gouv.fr/',checked},
      {type:'Officiel UE',name:'Eurostat Tourism',url:'https://ec.europa.eu/eurostat/web/tourism',checked}
    ]
  ),

  'bibliotheque|Ressources marketing': p(
    'Ressources marketing',
    'Le corpus marketing doit mélanger fondamentaux académiques, articles récents et ressources réglementaires pour éviter deux écueils : théorie déconnectée et actualité sans concept.',
    [
      'Journal of Marketing et grandes revues académiques : articles de recherche.',
      'Harvard Business Review : certains articles canoniques de stratégie et expérience.',
      'Ouvrages de référence : marque, business model, entrepreneuriat, marketing des services.',
      'CNIL : données, prospection, cookies et personnalisation.',
      'DGCCRF : prix, pratiques commerciales, information du consommateur.',
      'Commission européenne : plateformes numériques et réglementation du marché européen.'
    ],
    [
      {heading:'Conseil',text:'Pour chaque notion importante, conserver au moins une référence académique et un cas actuel sourcé.'}
    ],
    [
      {type:'Officiel',name:'CNIL',url:'https://www.cnil.fr/',checked},
      {type:'Officiel',name:'DGCCRF',url:'https://www.economie.gouv.fr/dgccrf',checked},
      {type:'Officiel UE',name:'Commission européenne — Digital Strategy',url:'https://digital-strategy.ec.europa.eu/',checked}
    ]
  ),

  'bibliotheque|Mes fiches': p(
    'Mes fiches — modèle recommandé',
    'Cette rubrique sert de méthode de production personnelle. Le site ne prétend pas qu’une fiche a été rédigée tant qu’elle n’a pas réellement été enregistrée.',
    [
      'Titre de la notion.',
      'Définition en deux ou trois lignes.',
      'Auteur(s) / modèle(s) et mécanisme central.',
      'Deux distinctions à connaître.',
      'Un exemple tourisme actuel sourcé.',
      'Un exemple hors tourisme.',
      'Une limite ou critique.',
      'Trois questions d’entraînement.',
      'Date de dernière vérification.'
    ],
    [
      {heading:'Format recommandé',text:'Une fiche doit rester assez courte pour être relue, mais assez riche pour permettre une réponse argumentée. Si elle devient un cours de dix pages, créer une synthèse séparée.'}
    ]
  ),

  'bibliotheque|Mes favoris': p(
    'Mes favoris',
    'Cette rubrique est réservée aux fiches et cas que l’utilisatrice choisira de marquer. Aucun favori fictif n’est prérempli.',
    [
      'Les favoris doivent servir à créer une liste de révision courte.',
      'Une fiche peut être favorite parce qu’elle est importante ou parce qu’elle reste fragile.',
      'Le stockage persistant doit être relié au navigateur ou à un compte utilisateur.',
      'Tant que cette fonction n’est pas activée, le site ne doit pas afficher de faux favoris.'
    ],
    [
      {heading:'Fonction à activer',text:'Ajouter un bouton ☆ / ★ sur chaque fiche et enregistrer le choix dans le navigateur, puis éventuellement dans Supabase si plusieurs appareils doivent partager la progression.'}
    ]
  )
}
