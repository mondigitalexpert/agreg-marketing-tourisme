const checked='08/11/2026'
const p=(title,intro,keyPoints,sections,sources)=>({label:'Veille',title,intro,keyPoints,sections,sources})

export const watchPages = {
  'veille|Marketing': p(
    'Veille marketing — quoi surveiller ?',
    'La veille doit fournir des exemples récents utilisables au concours sans remplacer les concepts. Chaque information est classée selon la notion qu’elle peut illustrer.',
    [
      'Plateformes et distribution : évolution des règles applicables à Booking.com dans l’Union européenne.',
      'CRM et fidélité : développement des écosystèmes de fidélité chez Accor et Air France-KLM.',
      'Expérience : extension d’offres intégrées combinant hébergement, loisirs, transport ou destinations propres.',
      'Prix : généralisation des pratiques de tarification dynamique dans les services à capacité contrainte.',
      'Marketing responsable : nécessité de documenter les preuves derrière les allégations environnementales.'
    ],
    [
      {heading:'Méthode de veille',text:'Pour chaque actualité : date, fait vérifié, source, notion du programme, question qu’elle permet d’illustrer et limite de l’exemple.'},
      {heading:'À éviter',text:'Conserver une actualité plusieurs années sans la dater, ou utiliser une communication d’entreprise comme preuve indépendante de son efficacité.'}
    ],
    [
      {type:'Officiel UE',name:'Commission européenne — Digital Markets Act et Booking.com',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked},
      {type:'Entreprise',name:'Accor — Résultats financiers',url:'https://group.accor.com/fr/finance/financial-results',checked}
    ]
  ),

  'veille|Tourisme': p(
    'Veille tourisme — conjoncture 2026',
    'Atout France publie des notes de conjoncture qui agrègent plusieurs indicateurs. Elles sont utiles pour contextualiser une copie, à condition de conserver le champ et la source de chaque chiffre.',
    [
      '49,4 Md€ de recettes internationales de janvier à fin juillet 2026, chiffre Banque de France cité par Atout France.',
      '+1,1 % de nuitées dans les hébergements collectifs de janvier à juillet 2026 par rapport à 2025, données Insee citées par Atout France.',
      '-0,7 % d’arrivées aériennes en France métropolitaine de janvier à août 2026 par rapport à 2025, données Amadeus citées par Atout France.',
      'Atout France observe un meilleur étalement des séjours de juin à septembre et une pression accrue sur les budgets de la clientèle française.',
      'Ces indicateurs ne mesurent pas la même chose et ne doivent pas être additionnés.'
    ],
    [
      {heading:'Utilisation concours',text:'Ces données peuvent ouvrir une introduction ou contextualiser un cas de destination, mais l’analyse doit ensuite revenir au problème précis posé.'}
    ],
    [{type:'Officiel',name:'Atout France — Conjoncture et dernières tendances, mise à jour 05/10/2026',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked}]
  ),

  'veille|Consommation': p(
    'Veille consommation — arbitrages et comportements',
    'La veille consommation cherche les évolutions qui modifient choix, valeur perçue, fréquence ou canal. Il faut distinguer signal conjoncturel et transformation durable.',
    [
      'Pression budgétaire : Atout France signale en 2026 des arbitrages plus visibles chez la clientèle française.',
      'Recherche de valeur : une baisse de budget ne signifie pas nécessairement recherche du prix minimum ; le client peut arbitrer durée, date, gamme ou services.',
      'Comparaison numérique : avis, plateformes et moteurs de recherche réduisent certains coûts de recherche mais augmentent l’exposition à la comparaison.',
      'Personnalisation : elle peut accroître la pertinence mais dépend de la confiance et du cadre de protection des données.',
      'Durabilité : attitudes déclarées et comportements effectifs peuvent diverger ; éviter de supposer automatiquement une disposition à payer.'
    ],
    [
      {heading:'Exercice de veille',text:'Prends une tendance médiatique. Cherche une donnée officielle qui la confirme ou la nuance, puis indique ce qu’on peut réellement conclure.'}
    ],
    [
      {type:'Officiel',name:'Atout France — Conjoncture 2026',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked},
      {type:'Académique',name:'Ajzen — Theory of Planned Behavior',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T'}
    ]
  ),

  'veille|Digital & IA': p(
    'Veille Digital & IA — tourisme 2026',
    'La veille IA doit partir des usages et des règles plutôt que des annonces de performance non vérifiées.',
    [
      'France Tourisme Tech 2026 cible explicitement des solutions mobilisant IA, data, objets connectés, réalité augmentée, jumeaux numériques, cybersécurité ou blockchain.',
      'Le programme a accompagné 35 entreprises sur ses trois premières promotions.',
      'Atout France propose en 2026 des formations à l’IA pour les professionnels et conseillers en séjour.',
      'La CNIL continue de renforcer l’encadrement des traceurs et de la personnalisation fondée sur des données.',
      'Une démonstration technologique n’est pas une preuve de valeur client ou de rentabilité.'
    ],
    [
      {heading:'Grille de lecture',text:'Pour chaque usage IA : problème, utilisateur, donnée, qualité attendue, erreur possible, coût, gain, responsabilité et KPI.'}
    ],
    [
      {type:'Officiel',name:'DGE — France Tourisme Tech 2026',url:'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0',checked},
      {type:'Officiel',name:'Atout France — Formation IA pour conseillers en séjour',url:'https://www.atout-france.fr/fr/catalogue/operations-carte/initiation-lusage-des-ia-pour-les-conseillers-en-sejour',checked},
      {type:'Officiel',name:'CNIL — Cookies et traceurs',url:'https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi',checked}
    ]
  ),

  'veille|Environnement': p(
    'Veille environnement — mesurer avant de communiquer',
    'Les enjeux environnementaux deviennent des variables de produit, de coût, de réglementation et de réputation. La veille doit privilégier des indicateurs documentés.',
    [
      'Eurostat développe des indicateurs harmonisés liés à la durabilité du tourisme, dont l’intensité touristique.',
      'Atout France pilote des labels d’État qui intègrent qualité et/ou accessibilité selon leur référentiel.',
      'Transport et hébergement publient de plus en plus de trajectoires environnementales, souvent dans leurs rapports de durabilité.',
      'Un objectif futur n’est pas un résultat atteint.',
      'Comparer les acteurs suppose de vérifier périmètre, unité, année de référence et méthode de calcul.'
    ],
    [
      {heading:'Usage concours',text:'Une bonne illustration environnementale distingue action concrète, indicateur, résultat et communication. Cette distinction protège contre le greenwashing analytique.'}
    ],
    [
      {type:'Officiel UE',name:'Eurostat — Tourism nights and sustainability indicators',url:'https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20261016-1',checked},
      {type:'Officiel',name:'Atout France — Labels tourisme',url:'https://www.atout-france.fr/fr/labels-tourisme',checked}
    ]
  ),

  'veille|Réglementation': p(
    'Veille réglementation — points chauds 2026',
    'La réglementation marketing évolue particulièrement autour des données, traceurs, plateformes, influence et hébergements touristiques.',
    [
      'Prospection B2C par courrier électronique : consentement préalable en principe, avec exceptions encadrées pour clients existants.',
      'Traceurs non nécessaires : consentement préalable valable en principe.',
      'Réductions de prix : référence au prix le plus bas pratiqué pendant les 30 jours précédents, sauf cas prévus.',
      'Influence commerciale : obligation de rendre explicite l’intention commerciale.',
      'Booking.com : obligations de gatekeeper au titre du DMA ; procédure formelle DSA ouverte en octobre 2026.',
      'Meublés de tourisme : cadre national renforcé depuis la loi de novembre 2024, avec mise en œuvre progressive de plusieurs dispositions.'
    ],
    [
      {heading:'Méthode',text:'Pour une règle juridique, privilégier CNIL, DGCCRF, Légifrance, Commission européenne ou Service-Public.fr. Ne pas utiliser un article de blog comme source normative.'}
    ],
    [
      {type:'Officiel',name:'CNIL — Prospection commerciale électronique, juin 2026',url:'https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel',checked},
      {type:'Officiel',name:'DGCCRF — Annonces de réduction de prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/annonces-de-reduction-de-prix-ce-que-vous-devez-savoir',checked},
      {type:'Officiel UE',name:'Commission européenne — Booking.com et DMA',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked},
      {type:'Officiel',name:'Service-Public.fr — Meublé de tourisme',url:'https://www.service-public.fr/particuliers/vosdroits/F2045',checked}
    ]
  ),

  'veille|Entreprises à suivre': p(
    'Entreprises à suivre comme réservoir d’exemples',
    'Suivre quelques organisations dans la durée donne de meilleurs exemples qu’une collection d’actualités isolées. Le choix ci-dessous couvre plusieurs modèles du tourisme.',
    [
      'Accor : portefeuille de marques, fidélité, distribution, luxe, asset-light et développement international.',
      'Booking Holdings / Booking.com : plateforme, effets de réseau, régulation, confiance et acquisition.',
      'Air France-KLM : réseau, fidélité, transformation de flotte, expérience et partenariats.',
      'Compagnie des Alpes / Parc Astérix : loisirs, événementiel, hôtellerie et extension d’expérience.',
      'Royal Caribbean Group : croisière, écosystème de destinations, fidélité et capacité.',
      'France Tourisme Tech : utile pour suivre les start-up et expérimentations plutôt qu’une seule entreprise.'
    ],
    [
      {heading:'Routine',text:'Une fois par mois : noter un fait nouveau, la source, les notions du programme auxquelles il se rattache et une question de cas possible.'}
    ],
    [
      {type:'Entreprise',name:'Accor — News & Finance',url:'https://group.accor.com/fr/finance/financial-results',checked},
      {type:'Entreprise',name:'Booking Holdings — Factsheet',url:'https://www.bookingholdings.com/about/factsheet/',checked},
      {type:'Entreprise',name:'Air France-KLM — Newsroom',url:'https://www.airfranceklm.com/fr/newsroom/communiques-de-presse',checked},
      {type:'Entreprise',name:'Compagnie des Alpes — Finance',url:'https://www.compagniedesalpes.com/finance',checked},
      {type:'Entreprise',name:'Royal Caribbean Group — News',url:'https://www.royalcaribbeangroup.com/news',checked}
    ]
  ),

  'veille|Chiffres clés': p(
    'Chiffres clés — repères datés',
    'Ces chiffres servent de repères, pas de “vérités éternelles”. La date et le périmètre doivent accompagner toute utilisation.',
    [
      'France, 2025 : 220,2 millions de nuitées hôtelières — Insee.',
      'France, 2025 : taux d’occupation hôtelier moyen 62,3 % — Insee.',
      'France, janvier-juillet 2026 : 49,4 Md€ de recettes internationales — Banque de France citée par Atout France.',
      'France, janvier-juillet 2026 : +1,1 % de nuitées collectives vs 2025 — Insee cité par Atout France.',
      'Booking Holdings, 2025 : 186,1 Md$ de gross travel bookings et environ 1,2 Md de nuitées réservées — entreprise.',
      'Accor, 2025 : 5,639 Md€ de chiffre d’affaires — entreprise.',
      'Air France-KLM, 2025 : 33,0 Md€ de chiffre d’affaires consolidé — entreprise.',
      'Royal Caribbean Group, 2025 : 9,4 millions de vacances délivrées — entreprise.'
    ],
    [
      {heading:'Règle',text:'Toujours préciser si le chiffre vient d’un organisme statistique, d’une autorité ou de l’entreprise elle-même. Leur fonction probatoire n’est pas identique.'}
    ],
    [
      {type:'Officiel',name:'Insee — Hôtellerie 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked},
      {type:'Officiel',name:'Atout France — Conjoncture 2026',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked},
      {type:'Entreprise',name:'Booking Holdings — Factsheet',url:'https://www.bookingholdings.com/about/factsheet/',checked},
      {type:'Entreprise',name:'Accor — Résultats financiers',url:'https://group.accor.com/fr/finance/financial-results',checked},
      {type:'Entreprise',name:'Air France-KLM — Groupe',url:'https://www.airfranceklm.com/fr',checked},
      {type:'Entreprise',name:'Royal Caribbean Group — Q4 2025',url:'https://www.royalcaribbeangroup.com/q4-2025-earnings',checked}
    ]
  ),

  'veille|Relier une actualité à une notion': p(
    'Méthode','Transformer une actualité en exemple de concours',
    'Une actualité devient utile quand elle permet d’illustrer un mécanisme théorique et non simplement de montrer que l’on suit la presse.',
    [
      '1. Écrire le fait en une phrase, avec date et source.',
      '2. Identifier la notion du programme réellement illustrée.',
      '3. Nommer éventuellement un auteur ou modèle pertinent.',
      '4. Expliquer le mécanisme : pourquoi ce cas illustre-t-il la notion ?',
      '5. Ajouter une limite : ce que le cas ne permet pas de démontrer.',
      '6. Préparer une phrase réutilisable dans une copie.'
    ],
    [
      {heading:'Exemple Booking',text:'Fait : Booking.com est soumis au DMA et ne peut plus imposer certaines clauses de parité. Notions : plateforme, pouvoir de distribution, dépendance des fournisseurs, concurrence. Modèle possible : Porter. Limite : la suppression d’une clause ne signifie pas disparition du pouvoir de marché de la plateforme.'},
      {heading:'Exemple Accor',text:'Fait : plus de 220 millions de membres ALL annoncés mi-2026. Notions : CRM, fidélité, écosystème. Limite : nombre de membres ≠ fidélité active ou rentabilité du programme.'}
    ],
    [
      {type:'Officiel UE',name:'Commission européenne — Booking.com et DMA',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked},
      {type:'Entreprise',name:'Accor at a glance — juillet 2026',url:'https://assets.group.accor.com/yrj0orc8tx24/1gfnIc7BnVhT7xnnVrKMYj/cde89098605135e4610f1e2b48c855b2/Accor_Overview_JULY_2026.pdf',checked}
    ]
  )
}
