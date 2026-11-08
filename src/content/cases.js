const p=(title,intro,facts,questions,sources)=>({
  label:'Cas réel sourcé',title,intro,keyPoints:facts,
  sections:questions.map((text,i)=>({heading:i===questions.length-1?'Piste de travail':`Question ${i+1}`,text})),
  sources
})

const checked='08/11/2026'

export const casePages = {
  'cas|Hôtellerie': p(
    'Accor 2026 — croissance, marques et réservation directe',
    'Cas construit à partir des publications officielles d’Accor et de l’Insee. Les chiffres décrivent des périmètres différents : le groupe Accor d’un côté, le marché hôtelier français de l’autre.',
    [
      'Accor a publié 5,639 Md€ de chiffre d’affaires pour 2025.',
      'Au premier semestre 2026, le groupe publie 2,760 Md€ de chiffre d’affaires et un RevPAR en hausse de 2,2 % à taux de change constant par rapport au S1 2025.',
      'Le document “Accor at a glance” de juillet 2026 présente plus de 45 marques et plus de 220 millions de membres ALL Accor.',
      'En France, l’Insee mesure en 2025 un taux d’occupation hôtelier moyen de 62,3 %.',
      'Ces données ne permettent pas, à elles seules, d’attribuer la performance d’Accor à son programme de fidélité ou à sa stratégie de marques.'
    ],
    [
      'À partir des faits disponibles, formule un diagnostic de portefeuille : quels bénéfices et risques peut créer une architecture de plus de 45 marques ?',
      'Comment ALL Accor peut-il soutenir la réservation directe sans supprimer l’utilité des OTA ? Propose trois mécanismes et leurs KPI.',
      'Distingue trois faits, trois hypothèses et deux informations supplémentaires nécessaires avant de conclure sur la performance marketing.',
      'Piste : articuler différenciation des marques, valeur du CRM, coût de distribution, expérience client et cohérence de portefeuille. Ne pas transformer une corrélation entre fidélité et résultats en causalité.'
    ],
    [
      {type:'Entreprise',name:'Accor — Résultats financiers',url:'https://group.accor.com/fr/finance/financial-results',checked},
      {type:'Entreprise',name:'Accor — Half-Year 2026 Results',url:'https://group.accor.com/en/news-stories/accor-half-year-2026-results',checked},
      {type:'Entreprise',name:'Accor at a glance — juillet 2026',url:'https://assets.group.accor.com/yrj0orc8tx24/5fb92nCdGwFBM4lYRHTevc/940cd987ec64f05a7d81a6f310a7b489/ACCOR_AT_A_GLANCE_JULY_2026.pdf',checked},
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked}
    ]
  ),

  'cas|Plateformes': p(
    'Booking.com 2026 — puissance de plateforme et régulation',
    'Ce cas distingue clairement deux cadres européens : le Digital Markets Act, qui impose des obligations aux gatekeepers, et le Digital Services Act, dans lequel une procédure formelle a été ouverte en octobre 2026.',
    [
      'Booking Holdings indique 186,1 Md$ de gross travel bookings et environ 1,2 milliard de nuitées réservées en 2025.',
      'Booking.com doit respecter le Digital Markets Act pour son service d’intermédiation en ligne.',
      'Depuis novembre 2024, certaines clauses de parité qui empêchaient les hébergeurs de proposer de meilleurs prix ou conditions sur d’autres canaux ne peuvent plus être imposées par Booking.com au titre du DMA.',
      'Le 21 octobre 2026, la Commission européenne a ouvert une procédure formelle au titre du DSA concernant notamment les risques liés aux annonces frauduleuses, au phishing et la transparence de certains classements payants.',
      'L’ouverture d’une procédure ne constitue pas une constatation de culpabilité.'
    ],
    [
      'Analyse le pouvoir de marché d’une OTA en mobilisant les effets de réseau, la donnée et les cinq forces de Porter.',
      'Pourquoi un hôtel peut-il continuer à utiliser une OTA malgré les commissions ? Construis une matrice bénéfices/coûts.',
      'Quels leviers un hôtel peut-il utiliser pour développer son canal direct sans supposer qu’il puisse se passer totalement des plateformes ?',
      'Piste : considérer simultanément acquisition, confiance, conversion, données, coût de distribution, visibilité internationale et dépendance stratégique.'
    ],
    [
      {type:'Entreprise',name:'Booking Holdings — Factsheet 2025',url:'https://www.bookingholdings.com/about/factsheet/',checked},
      {type:'Officiel UE',name:'Commission européenne — Booking.com et obligations DMA',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked},
      {type:'Officiel UE',name:'Commission européenne — Procédure DSA Booking.com, 21 octobre 2026',url:'https://france.representation.ec.europa.eu/informations-et-evenements/informations/dsa-la-commission-enquete-sur-bookingcom-2026-10-21_fr',checked}
    ]
  ),

  'cas|Transport': p(
    'Air France-KLM — réseau, fidélité et transformation',
    'Cas fondé sur les informations officielles du groupe. Il sert à travailler le marketing des services, le réseau, la fidélité et la transformation de l’offre.',
    [
      'Air France-KLM publie 33,0 Md€ de chiffre d’affaires consolidé pour 2025, en hausse de 4,9 % par rapport à 2024.',
      'En 2025, les compagnies Air France, KLM et Transavia desservaient plus de 320 destinations dans plus de 100 pays.',
      'Le groupe indique viser le renouvellement de jusqu’à 80 % de sa flotte d’ici 2030.',
      'Les résultats du troisième trimestre 2026 ont été publiés le 5 novembre 2026 ; les résultats annuels 2026 sont programmés au 25 février 2027.',
      'Flying Blue constitue un actif relationnel partagé par les compagnies du groupe.'
    ],
    [
      'Quels bénéfices marketing crée un réseau de plus de 320 destinations ? Quels coûts ou risques peuvent l’accompagner ?',
      'Analyse le rôle d’un programme de fidélité dans une industrie où le client peut comparer facilement prix et horaires.',
      'Propose un parcours client où le digital améliore réellement l’expérience plutôt que d’ajouter un canal.',
      'Piste : articuler connectivité du réseau, expérience, fidélité, coûts opérationnels et transformation de la flotte sans confondre communication environnementale et performance mesurée.'
    ],
    [
      {type:'Entreprise',name:'Air France-KLM — site groupe et chiffres 2025',url:'https://www.airfranceklm.com/fr',checked},
      {type:'Entreprise',name:'Air France-KLM — Résultats financiers 2026',url:'https://www.airfranceklm.com/fr/relations-investisseurs/resultats-financiers',checked}
    ]
  ),

  'cas|Destinations touristiques': p(
    'France 2026 — fréquentation solide, arbitrages budgétaires',
    'Cas macro-sectoriel construit à partir de la note de conjoncture Atout France mise à jour le 5 octobre 2026.',
    [
      'Atout France rapporte 49,4 Md€ de recettes internationales de janvier à fin juillet 2026, selon la Banque de France.',
      'Les arrivées aériennes en France métropolitaine reculent de 0,7 % de janvier à août 2026 par rapport à 2025, selon les données Amadeus citées par Atout France.',
      'Les nuitées dans les hébergements collectifs augmentent de 1,1 % de janvier à juillet 2026 par rapport à 2025, selon l’Insee cité par Atout France.',
      'Atout France décrit un meilleur étalement des séjours de juin à septembre et des pressions sur les budgets de la clientèle française.',
      'Ces indicateurs n’ont pas tous le même champ ni la même source : ils ne doivent pas être additionnés ou comparés sans précaution.'
    ],
    [
      'Quel diagnostic marketing peut-on formuler sans extrapoler au-delà de ces données ?',
      'Propose deux stratégies de destination adaptées à des clients plus attentifs à leur budget, sans réduire la réponse à une baisse générale des prix.',
      'Comment exploiter l’étalement saisonnier comme opportunité de segmentation et de communication ?',
      'Piste : travailler valeur, durée de séjour, segmentation, calendrier, accessibilité et partenariats, tout en distinguant clientèle nationale et internationale.'
    ],
    [
      {type:'Officiel',name:'Atout France — Conjoncture et dernières tendances, mise à jour 05/10/2026',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked}
    ]
  ),

  'cas|Parcs & loisirs': p(
    'Parc Astérix — prolonger l’expérience par l’hôtellerie',
    'Cas construit à partir du chiffre d’affaires 2025-2026 publié par la Compagnie des Alpes et des informations presse du Parc Astérix.',
    [
      'La Compagnie des Alpes indique un taux d’occupation de 90 % pour les 450 chambres du Parc Astérix pendant les jours d’ouverture du site sur l’exercice 2025-2026.',
      'La recette moyenne par chambre disponible y progresse de 6,6 % selon la même publication.',
      'Un nouvel hôtel de 300 chambres est annoncé pour le printemps 2027.',
      'Peur sur le Parc 2025 a accueilli 557 500 visiteurs sur 20 jours selon le site presse du Parc Astérix.',
      'Ces données sont publiées par l’entreprise : elles décrivent ses propres performances et doivent être distinguées de statistiques sectorielles indépendantes.'
    ],
    [
      'Quel rôle l’hôtellerie joue-t-elle dans le modèle de valeur d’un parc de loisirs ?',
      'Comment l’événement Halloween peut-il contribuer à la désaisonnalisation et à la valeur de marque ?',
      'Quels risques crée l’ajout de 300 chambres ? Propose des indicateurs pour tester la capacité à remplir sans cannibaliser ou dégrader l’expérience.',
      'Piste : raisonner en durée de séjour, panier global, capacité, événementialisation, satisfaction et retour plutôt qu’en seule fréquentation du parc.'
    ],
    [
      {type:'Entreprise',name:'Compagnie des Alpes — Chiffre d’affaires 2025-2026',url:'https://news.compagniedesalpes.com/chiffre-affaires-2025-2026/?lang=fr',checked},
      {type:'Entreprise',name:'Parc Astérix — Peur sur le Parc 2026',url:'https://newsroom.parcasterix.fr/strongpeur-sur-le-parc-levenement-halloween-n1-en-france-se-reinvente-du-3-octobre-au-8-novembre-2026strong-30936/?lang=en',checked}
    ]
  ),

  'cas|Restauration': p(
    'Restauration touristique — croissance du chiffre d’affaires, quelle lecture ?',
    'Le cas part de données Insee sur l’hiver 2026. Il vise précisément à éviter une erreur courante : confondre chiffre d’affaires, volume, prix et rentabilité.',
    [
      'Entre l’hiver 2025 et l’hiver 2026, l’Insee mesure une hausse de 9,8 % du chiffre d’affaires de la restauration.',
      'Sur la même période, l’indice des prix à la consommation correspondant augmente de 1,4 %.',
      'L’Insee rapproche cette activité touristique d’un hiver marqué par un enneigement nettement meilleur dans les massifs.',
      'Les données 2026 utilisées dans cette publication sont provisoires.',
      'Une hausse de chiffre d’affaires ne permet pas de conclure directement à une hausse de bénéfice.'
    ],
    [
      'Décompose les explications possibles de la hausse de chiffre d’affaires entre volumes, prix, mix et saison.',
      'Quelles données supplémentaires faudrait-il obtenir pour parler de rentabilité ?',
      'Pour un restaurant de station, propose deux actions permettant de conserver une partie de la clientèle hors pics de fréquentation.',
      'Piste : raisonner en nombre de couverts, panier moyen, taux de remplissage, marge, personnel, coûts d’achat et saisonnalité.'
    ],
    [
      {type:'Officiel',name:'Insee — Saison touristique d’hiver 2026',url:'https://www.insee.fr/fr/statistiques/8983528',checked}
    ]
  ),

  'cas|Croisières': p(
    'Royal Caribbean Group — croissance par l’écosystème',
    'Cas construit sur les résultats publiés par Royal Caribbean Group en janvier 2026. Les chiffres et ambitions sont ceux communiqués par l’entreprise.',
    [
      'Royal Caribbean Group indique avoir délivré un record de 9,4 millions de vacances en 2025.',
      'Le groupe a lancé en 2025 de nouveaux navires, dont Star of the Seas et Celebrity Xcel, ainsi qu’une destination terrestre, Royal Beach Club Paradise Island.',
      'Le groupe annonce huit nouveaux navires sur les trois années suivantes et cinq nouvelles destinations terrestres d’ici 2028.',
      'L’entreprise met en avant un écosystème reliant marques, navires, destinations, technologies et programme de fidélité.',
      'Ces annonces doivent être analysées comme stratégie d’entreprise et non comme prévision certaine de demande.'
    ],
    [
      'En quoi le développement de destinations terrestres modifie-t-il la chaîne de valeur d’un croisiériste ?',
      'Quels avantages et risques présente une stratégie d’écosystème pour la fidélisation ?',
      'Propose quatre KPI permettant de vérifier que la croissance de capacité crée réellement de la valeur client et économique.',
      'Piste : analyser contrôle de l’expérience, différenciation, cross-selling, fidélité, capacité, investissements et dépendance à la demande.'
    ],
    [
      {type:'Entreprise',name:'Royal Caribbean Group — Q4 2025 Earnings, 29 janvier 2026',url:'https://www.royalcaribbeangroup.com/q4-2025-earnings',checked}
    ]
  ),

  'cas|Acteurs publics': p(
    'France Tourisme Tech — l’État comme facilitateur d’innovation',
    'Le programme France Tourisme Tech, piloté par la Direction générale des Entreprises, permet d’étudier le rôle d’un acteur public dans la structuration d’un écosystème d’innovation.',
    [
      'France Tourisme Tech est lancé en 2023 et a accompagné 35 entreprises sur trois promotions avant la quatrième édition 2026.',
      'Le programme s’appuie sur un réseau d’environ 80 partenaires.',
      'La quatrième édition 2026 cible des entreprises du tourisme mobilisant notamment IA, data, IoT, réalité augmentée, jumeaux numériques, cybersécurité ou blockchain.',
      'Le dispositif propose open innovation, mentorat et accompagnement à l’internationalisation.',
      'Le programme public ne garantit pas le succès commercial des entreprises accompagnées.'
    ],
    [
      'Quelle valeur un acteur public peut-il créer qu’une seule entreprise privée aurait plus de difficulté à produire ?',
      'Quels indicateurs permettraient d’évaluer l’efficacité du programme au-delà du nombre d’entreprises accompagnées ?',
      'Comment éviter que l’innovation technologique ne soit évaluée uniquement par la nouveauté de la technologie ?',
      'Piste : mesurer expérimentations, adoption, croissance, partenariats, internationalisation, retombées territoriales et problèmes réellement résolus.'
    ],
    [
      {type:'Officiel',name:'DGE — France Tourisme Tech, quatrième promotion 2026',url:'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0',checked}
    ]
  ),

  'cas|Start-up tourisme': p(
    'Travel tech française — croissance et fragilité du modèle',
    'Cas construit à partir du panorama officiel de la Direction générale des Entreprises publié en 2025 et du lancement de France Tourisme Tech 2026.',
    [
      'La DGE indique 72,5 M€ levés par les start-up de la travel tech en 2025.',
      'Le panorama cité par la DGE indique que 34 % utilisent du big data ou de l’IA et que 49 % sont implantées en région.',
      'Le même panorama indique une forte présence des modèles de plateforme de mise en relation et de vente en ligne.',
      'La DGE décrit un écosystème en développement mais encore fragmenté et fragile.',
      'Les technologies ne constituent pas à elles seules un avantage concurrentiel durable : problème client, accès au marché et modèle économique restent déterminants.'
    ],
    [
      'Pourquoi une start-up utilisant l’IA n’a-t-elle pas nécessairement un positionnement différenciant ?',
      'Identifie trois risques d’un modèle de plateforme B2C dans le tourisme.',
      'Construis un test de marché pour une start-up avant une levée de fonds : hypothèse, métrique, seuil de décision.',
      'Piste : mobiliser proposition de valeur, business model, effets de réseau, coût d’acquisition, rétention et effectuation.'
    ],
    [
      {type:'Officiel',name:'DGE — Panorama et chiffres clés de la travel tech',url:'https://www.entreprises.gouv.fr/files/files/presse/2025/122%20-%20DP%20-%20France%20Tourisme%20Tech%20-%20Bilan%20des%20deux%20premi%C3%A8res%20promotions%20et%20lancement%20de%20la%20troisi%C3%A8me%20%C3%A9dition%202025-2026.pdf',checked},
      {type:'Officiel',name:'DGE — France Tourisme Tech 2026',url:'https://www.entreprises.gouv.fr/espace-presse/serge-papin-lance-une-4e-edition-de-france-tourisme-tech-pour-faire-emerger-des',checked}
    ]
  ),

  'cas|Crises & controverses': p(
    'Booking.com — fraude, phishing et confiance de plateforme',
    'Le 21 octobre 2026, la Commission européenne a ouvert une procédure formelle au titre du Digital Services Act. Ce cas doit être traité avec prudence : une enquête n’est pas une condamnation.',
    [
      'La Commission examine notamment la manière dont Booking.com évalue et atténue certains risques liés aux annonces frauduleuses et aux escroqueries par hameçonnage.',
      'La procédure porte aussi sur la transparence de certains systèmes de recommandation comprenant des classements sponsorisés.',
      'La Commission indique que l’ouverture de la procédure ne préjuge pas de son issue.',
      'Pour une plateforme touristique, la confiance est un actif marketing mais aussi un enjeu de gouvernance et de conformité.',
      'Une fraude commise par un tiers peut néanmoins dégrader la réputation de l’intermédiaire qui organise l’environnement de transaction.'
    ],
    [
      'Construis une carte des parties prenantes affectées par ce type de crise.',
      'Quels messages de crise seraient nécessaires, et quelles promesses seraient imprudentes avant la fin de l’enquête ?',
      'Propose trois mesures de confiance à court terme et trois indicateurs de récupération.',
      'Piste : distinguer sécurité opérationnelle, transparence, aide aux victimes, communication et évolution du produit.'
    ],
    [
      {type:'Officiel UE',name:'Commission européenne — Enquête DSA Booking.com, 21 octobre 2026',url:'https://france.representation.ec.europa.eu/informations-et-evenements/informations/dsa-la-commission-enquete-sur-bookingcom-2026-10-21_fr',checked}
    ]
  ),

  'cas|Transformation digitale': p(
    'France Tourisme Tech — de la technologie à l’usage',
    'Ce cas utilise les expérimentations documentées par la DGE pour éviter de présenter la transformation numérique comme une simple adoption d’outils.',
    [
      'La DGE indique plus de 80 mises en relation entre start-up lauréates et acteurs du tourisme sur les deux premières années du programme.',
      'Une cinquantaine auraient abouti à des expérimentations selon le bilan publié en novembre 2025.',
      'Les exemples cités incluent la revente de billets chez Transavia, la modélisation environnementale d’infrastructures de Vinci Concessions et une expérience immersive au château de Versailles avec Ask Mona.',
      'Les solutions de la promotion 2025-2026 mobilisent notamment IA, IoT, 3D, SaaS et réalité augmentée.',
      'Une expérimentation n’est pas encore une preuve de déploiement à grande échelle ni de rentabilité.'
    ],
    [
      'Choisis une expérimentation et formule sa proposition de valeur sans citer la technologie dans la première phrase.',
      'Quels critères faut-il vérifier avant de passer du pilote au déploiement ?',
      'Propose un tableau de bord distinguant adoption, valeur client, valeur opérationnelle, risque et coût.',
      'Piste : partir du problème à résoudre, puis seulement évaluer la technologie, l’intégration, les données et la capacité de changement.'
    ],
    [
      {type:'Officiel',name:'DGE — Bilan France Tourisme Tech et troisième promotion, 21 novembre 2025',url:'https://www.entreprises.gouv.fr/la-dge/actualites/france-tourisme-tech-lancement-de-la-troisieme-promotion-et-bilan-des-deux',checked},
      {type:'Officiel',name:'DGE — Quatrième promotion France Tourisme Tech 2026',url:'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0',checked}
    ]
  ),

  'cas|Développement durable': p(
    'Air France-KLM — renouveler la flotte et prouver la transition',
    'Cas de marketing responsable construit à partir des communications officielles du groupe. Il faut distinguer engagements déclarés, investissements, indicateurs environnementaux et résultats effectivement mesurés.',
    [
      'Air France-KLM présente le renouvellement de flotte comme un axe majeur de sa stratégie de décarbonation.',
      'Le groupe indique viser le renouvellement de jusqu’à 80 % de sa flotte d’ici 2030.',
      'Le site du groupe met en avant l’amélioration de l’efficacité, du confort et de l’empreinte sonore grâce aux appareils plus récents.',
      'Un objectif de renouvellement ne suffit pas à lui seul à mesurer les émissions globales, qui dépendent aussi de l’activité, du carburant et des opérations.',
      'Une communication environnementale crédible doit relier objectifs, périmètre, indicateurs et résultats.'
    ],
    [
      'Quels indicateurs faut-il demander avant de conclure à une amélioration environnementale ?',
      'Comment communiquer sur le renouvellement de flotte sans transformer un moyen en résultat final ?',
      'Propose une structure de preuve pour une campagne de communication responsable.',
      'Piste : distinguer intensité par passager, émissions absolues, renouvellement, carburants, capacité et effets de croissance.'
    ],
    [
      {type:'Entreprise',name:'Air France-KLM — présentation du groupe et stratégie de flotte',url:'https://www.airfranceklm.com/fr',checked},
      {type:'Entreprise',name:'Air France-KLM — Sustainability',url:'https://www.airfranceklm.com/en/sustainability',checked}
    ]
  )
}
