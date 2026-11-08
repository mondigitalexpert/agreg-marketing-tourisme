const PORTER='https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy'
const AJZEN='https://www.sciencedirect.com/science/article/pii/074959789190020T'
const KELLER='https://doi.org/10.1177/002224299305700101'
const LEMON='https://doi.org/10.1509/jm.15.0420'
const SERVUCTION='https://catalogue.bnf.fr/ark:/12148/cb34968117n'
const VARGO='https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036'
const WEBSTER='https://journals.sagepub.com/doi/10.1177/002224297203600204'
const SARAS='https://journals.aom.org/doi/10.5465/AMR.2001.4378020'
const CNIL='https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi'

const d=(definition,questions,data,interpretation,marketing,tourism,decision,errors,source)=>({
  definition,questions,data,interpretation,marketing,tourism,decision,errors,source
})

export const interactiveModelDetails={
  'cours|Marché & environnement':{
    'Cinq forces — où se situe le pouvoir ?':{
      'Rivalité entre concurrents':d(
        'Intensité avec laquelle les acteurs en place se disputent clients, volumes, prix, innovation ou visibilité.',
        ['Combien d’acteurs significatifs ?','Le marché croît-il assez pour éviter une guerre de parts ?','Les offres sont-elles différenciées ?','Les coûts fixes poussent-ils à remplir la capacité ?'],
        ['Parts de marché','Croissance du secteur','Écarts de prix','Capacité','Promotions','Taux de sortie/entrée','Différenciation perçue'],
        'La rivalité augmente notamment quand la croissance ralentit, que les acteurs sont nombreux ou proches, que la différenciation est faible ou que les coûts fixes sont élevés.',
        'Sur un marché de téléphonie mature, une forte comparabilité et des coûts de changement faibles peuvent accentuer la rivalité tarifaire.',
        'Dans l’hôtellerie urbaine, une capacité importante sur des dates creuses peut intensifier la concurrence par le prix et les OTA.',
        'Renforcer la différenciation, choisir des segments moins exposés, réduire les coûts de comparaison ou améliorer l’efficience.',
        ['Assimiler concurrence et rivalité sans analyser ses déterminants','Conclure “forte concurrence” à partir du seul nombre d’acteurs','Confondre intensité concurrentielle et attractivité de la demande'],
        PORTER
      ),
      'Nouveaux entrants':d(
        'Pression créée par la possibilité que de nouveaux acteurs entrent sur le marché et captent clients ou marges.',
        ['Quelles barrières à l’entrée ?','Faut-il beaucoup de capital, de réputation, de données ou de réseau ?','La réglementation protège-t-elle ou freine-t-elle l’entrée ?'],
        ['Investissements initiaux','Coûts d’acquisition','Accès aux canaux','Réglementation','Brevets','Effets de réseau','Économies d’échelle'],
        'La menace est forte lorsque l’entrée est relativement facile et que les acteurs installés disposent de peu d’avantages défendables.',
        'Une marque digitale peut entrer rapidement sur une niche si la production est externalisée, mais l’acquisition client peut constituer une barrière réelle.',
        'Une nouvelle plateforme de réservation peut être techniquement facile à créer, mais difficile à imposer face aux effets de réseau et budgets marketing des acteurs dominants.',
        'Construire des actifs difficiles à copier : marque, relation, données propriétaires, réseau, coûts de changement ou excellence opérationnelle.',
        ['Confondre possibilité technique d’entrer et viabilité économique','Oublier les barrières de distribution et de réputation'],
        PORTER
      ),
      'Produits ou services de substitution':d(
        'Solutions différentes capables de satisfaire le même besoin ou de remplir une fonction proche pour le client.',
        ['Quel besoin fondamental est satisfait ?','Quelles alternatives le client considère-t-il réellement ?','Le rapport valeur/prix du substitut s’améliore-t-il ?'],
        ['Études de choix','Élasticité croisée','Recherche web','Motifs de non-achat','Arbitrages budgétaires'],
        'La menace augmente lorsque le client peut changer facilement de solution et que le substitut améliore son rapport bénéfices/coût.',
        'La visioconférence peut substituer certains déplacements professionnels sans être un “concurrent” direct d’une compagnie aérienne.',
        'Pour une destination, un parc de loisirs, un city-break ou un séjour chez des proches peuvent se substituer dans l’arbitrage d’un week-end.',
        'Redéfinir le marché par le besoin, renforcer les bénéfices non substituables ou adapter la proposition de valeur.',
        ['Limiter les substituts aux concurrents de même catégorie','Définir le marché trop étroitement'],
        PORTER
      ),
      'Pouvoir des clients':d(
        'Capacité des acheteurs à imposer prix, conditions, qualité ou transfert de valeur à leur avantage.',
        ['Les clients sont-ils concentrés ?','Peuvent-ils comparer facilement ?','Quel est leur coût de changement ?','Leur achat représente-t-il une part importante du revenu du vendeur ?'],
        ['Concentration client','Taux de churn','Comparabilité prix','Coût de changement','Part du CA par grands comptes','Sensibilité au prix'],
        'Le pouvoir client est plus élevé quand les alternatives sont nombreuses, comparables et faciles d’accès, ou lorsque quelques acheteurs représentent une forte part des ventes.',
        'Un grand distributeur peut négocier fortement avec une petite marque dont il représente une part majeure des débouchés.',
        'Une entreprise négociant un important contrat hôtelier corporate dispose d’un pouvoir supérieur à celui d’un voyageur occasionnel isolé.',
        'Différencier, diversifier la clientèle, créer des coûts de changement légitimes ou renforcer la valeur relationnelle.',
        ['Confondre satisfaction client et pouvoir de négociation','Supposer que le consommateur final a toujours un pouvoir élevé'],
        PORTER
      ),
      'Pouvoir des fournisseurs':d(
        'Capacité des fournisseurs de ressources essentielles à imposer prix, conditions ou contraintes au secteur.',
        ['Combien de fournisseurs alternatifs ?','La ressource est-elle différenciée ou rare ?','Quel coût pour changer ?','Le fournisseur peut-il intégrer l’aval ?'],
        ['Concentration fournisseurs','Part des achats','Délais','Disponibilité','Dépendance technologique','Coûts de changement'],
        'Le pouvoir est élevé lorsque la ressource est critique, rare, différenciée ou difficile à remplacer.',
        'Une plateforme technologique propriétaire peut augmenter le coût ou les conditions d’accès d’entreprises dépendantes de son infrastructure.',
        'Un hôtel très dépendant d’une plateforme de distribution ou d’un système propriétaire peut subir un pouvoir fournisseur au sens large selon le périmètre retenu.',
        'Diversifier, sécuriser les contrats, standardiser certains composants ou développer des alternatives.',
        ['Classer mécaniquement tout partenaire comme fournisseur','Oublier que le rôle dépend du périmètre du secteur étudié'],
        PORTER
      )
    },
    'PESTEL — six familles à relier au marketing':{
      'Politique':d(
        'Décisions publiques, stabilité institutionnelle, politiques sectorielles et orientations susceptibles de modifier les conditions d’activité.',
        ['Quelles politiques publiques modifient la demande ou l’offre ?','Existe-t-il des aides, restrictions, taxes ou priorités publiques ?','Le secteur dépend-il fortement d’acteurs publics ?'],
        ['Budgets publics','Textes de politique sectorielle','Fiscalité','Aides et appels à projets','Décisions d’autorités publiques'],
        'Un facteur politique n’est pertinent que s’il modifie concrètement une variable marketing : demande, coût, accès au marché, confiance ou capacité.',
        'Une nouvelle aide à la rénovation peut améliorer la proposition de valeur d’un réseau hôtelier si elle finance des investissements visibles pour le client.',
        'Une politique de mobilité ou de limitation des flux peut transformer l’accessibilité et la fréquentation d’une destination.',
        'Adapter le ciblage, les investissements, les partenariats ou le calendrier de déploiement.',
        ['Confondre politique et juridique','Lister des élections sans effet démontré','Présenter toute action publique comme une opportunité'],
        PORTER
      ),
      'Économique':d(
        'Variables macroéconomiques qui influencent pouvoir d’achat, coûts, financement et arbitrages de consommation.',
        ['Comment évoluent revenus, inflation et taux ?','Quels coûts sont particulièrement sensibles ?','La demande est-elle cyclique ?'],
        ['Inflation','Pouvoir d’achat','Taux d’intérêt','Emploi','Coûts énergie/matières','Taux de change'],
        'Il faut distinguer effet prix, effet volume et effet mix : une hausse de chiffre d’affaires peut masquer des volumes en baisse.',
        'Une inflation forte peut conduire une enseigne à revoir formats, promotions et architecture de gamme.',
        'Dans le tourisme, le pouvoir d’achat peut modifier durée de séjour, période, niveau de gamme et réservation anticipée.',
        'Revoir prix, gamme, segmentation, conditions de paiement ou arbitrages d’investissement.',
        ['Déduire automatiquement une baisse de demande d’une inflation','Utiliser une moyenne nationale sans regarder les segments'],
        'https://www.insee.fr/'
      ),
      'Socioculturel':d(
        'Évolutions des valeurs, styles de vie, normes, pratiques et représentations qui modifient attentes et comportements.',
        ['Quelles pratiques émergent ?','Quelles attentes deviennent non négociables ?','Quels groupes évoluent différemment ?'],
        ['Enquêtes d’usage','Études qualitatives','Données démographiques','Avis et communautés','Pratiques médiatiques'],
        'Une tendance déclarée n’est pas toujours un comportement effectif ; il faut chercher des preuves d’usage.',
        'La recherche de simplicité peut favoriser des offres par abonnement ou des parcours sans friction.',
        'Le besoin d’authenticité peut renforcer l’intérêt pour des expériences locales, mais doit être confronté aux comportements réels de réservation.',
        'Faire évoluer proposition de valeur, message, expérience ou segmentation.',
        ['Transformer une mode médiatique en tendance établie','Stéréotyper un groupe social'],
        AJZEN
      ),
      'Technologique':d(
        'Innovations et infrastructures qui transforment produits, processus, données, canaux ou rapports de force.',
        ['La technologie réduit-elle un coût ou une friction ?','Crée-t-elle une nouvelle attente ?','Modifie-t-elle l’accès au client ou aux données ?'],
        ['Taux d’adoption','Coûts technologiques','Usages','Brevets','Investissements','Performance des canaux'],
        'La nouveauté technologique n’est pas une opportunité en soi : il faut démontrer un usage et une création de valeur.',
        'L’IA peut améliorer assistance ou personnalisation si la qualité des données et le contrôle sont suffisants.',
        'Un assistant de destination peut réduire le temps de recherche, mais devient contre-productif s’il recommande des horaires faux.',
        'Tester, automatiser, personnaliser ou revoir la chaîne de valeur.',
        ['Confondre technologie et stratégie','Ignorer coûts d’intégration et adoption'],
        'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0'
      ),
      'Environnemental':d(
        'Contraintes et attentes liées aux ressources, au climat, aux émissions, à la biodiversité et aux impacts de l’activité.',
        ['Quels impacts sont matériels ?','Quelles ressources deviennent contraintes ?','Quelles attentes clients ou réglementaires évoluent ?'],
        ['Énergie','Eau','Émissions','Déchets','Saisonnalité climatique','Indicateurs de pression territoriale'],
        'Il faut distinguer engagement, action et performance mesurée.',
        'Une marque peut réduire emballages et logistique, mais doit mesurer l’impact réel avant de communiquer.',
        'Une destination peut déplacer sa saison ou ses activités face à des conditions climatiques changeantes.',
        'Modifier offre, opérations, investissements et communication de preuve.',
        ['Greenwashing','Se concentrer sur un impact marginal','Utiliser une promesse absolue sans périmètre'],
        'https://ec.europa.eu/eurostat/web/tourism'
      ),
      'Légal':d(
        'Règles qui encadrent produit, prix, communication, données, concurrence et relation avec le consommateur.',
        ['Quelle règle s’applique à la pratique envisagée ?','Quelles obligations d’information ?','Quel risque de sanction ou de perte de confiance ?'],
        ['Textes officiels','Décisions d’autorités','Recommandations CNIL/DGCCRF','Jurisprudence pertinente'],
        'La contrainte juridique peut modifier directement le design d’une campagne, d’un parcours ou d’un modèle de données.',
        'Une campagne influence doit rendre son intention commerciale explicite.',
        'Une plateforme touristique doit articuler obligations de transparence, données et protection contre la fraude.',
        'Adapter process, wording, collecte de données ou gouvernance.',
        ['Dire “le RGPD exige le consentement pour tout”','Confondre recommandation et règle obligatoire'],
        CNIL
      )
    },
    'SWOT — synthèse, pas point de départ':{
      'Forces':d(
        'Ressources ou capacités internes qui donnent un avantage dans le problème étudié.',
        ['Qu’est-ce que l’organisation fait mieux ?','Quels actifs sont difficiles à reproduire ?','Quelles preuves chiffrées le montrent ?'],
        ['Performance interne','Marque','Données clients','Compétences','Réseau','Coûts','Taux de satisfaction'],
        'Une force n’existe que relativement à un objectif et à des alternatives.',
        'Une base CRM riche peut être une force si elle est exploitable, à jour et utile à la personnalisation.',
        'Un emplacement exceptionnel peut être une force pour un hôtel, mais seulement s’il soutient la cible et le prix.',
        'Capitaliser, protéger ou combiner cette capacité avec une opportunité.',
        ['Écrire “bonne image” sans preuve','Confondre résultat actuel et capacité durable'],
        PORTER
      ),
      'Faiblesses':d(
        'Limites internes qui réduisent la performance ou la capacité à saisir une opportunité.',
        ['Où perd-on de la valeur ?','Quelle dépendance interne limite les choix ?','Quelle capacité manque ?'],
        ['Coûts','Conversion','Délais','Réclamations','Turnover','Dépendance à un canal','Qualité des données'],
        'La faiblesse doit être reliée à une conséquence mesurable.',
        'Un taux de conversion direct faible devient une faiblesse si l’entreprise veut réduire le coût des intermédiaires.',
        'Une forte saisonnalité opérationnelle peut limiter la rentabilité d’un établissement touristique.',
        'Corriger, contourner, externaliser ou accepter la faiblesse selon le coût.',
        ['Transformer toute performance moyenne en faiblesse','Ne pas prioriser'],
        PORTER
      ),
      'Opportunités':d(
        'Évolution externe favorable que l’organisation pourrait exploiter.',
        ['Quelle évolution crée un espace de valeur ?','L’organisation a-t-elle les moyens de la saisir ?','L’opportunité est-elle durable ?'],
        ['Tendances de demande','Évolution réglementaire','Technologies','Nouveaux segments','Canaux'],
        'Une opportunité n’est pas “le digital” ou “l’IA” : c’est une évolution externe précise avec un mécanisme de valeur.',
        'La croissance d’un segment peut justifier une nouvelle offre si le coût d’accès reste compatible.',
        'Un meilleur étalement saisonnier peut permettre de développer des offres d’automne si les partenaires restent ouverts.',
        'Investir, tester, segmenter ou nouer des partenariats.',
        ['Confondre idée interne et opportunité externe','Surestimer une tendance non mesurée'],
        'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances'
      ),
      'Menaces':d(
        'Évolution externe susceptible de dégrader la position ou la performance.',
        ['Quel changement extérieur peut réduire la demande, la marge ou l’accès au client ?','Quelle dépendance amplifie le risque ?'],
        ['Concurrence','Réglementation','Coûts','Substituts','Changements de plateforme','Risque réputationnel'],
        'La menace doit être reliée à la vulnérabilité concrète de l’organisation.',
        'Une modification d’algorithme devient une menace forte pour une marque dépendante d’un seul canal social.',
        'Une plateforme touristique très dominante peut devenir une menace si les commissions augmentent ou si la visibilité directe baisse.',
        'Diversifier, réduire la dépendance, renforcer la preuve ou préparer un scénario de réponse.',
        ['Lister toute incertitude comme menace','Ne pas distinguer probabilité et impact'],
        PORTER
      )
    }
  },

  'cours|Comportement du consommateur':{
    'Théorie du comportement planifié — Ajzen':{
      'Attitude':d(
        'Évaluation favorable ou défavorable du comportement envisagé.',
        ['Quels bénéfices et coûts la personne associe-t-elle au comportement ?','Quelles croyances expliquent cette évaluation ?'],
        ['Entretiens','Échelles d’attitude','Arguments spontanés','Expériences antérieures'],
        'Une attitude favorable augmente souvent l’intention mais ne garantit pas le comportement.',
        'Un client peut juger l’achat en ligne pratique tout en évitant le canal pour des raisons de sécurité perçue.',
        'Un voyageur peut préférer le train mais choisir l’avion si le trajet ferroviaire est jugé trop long.',
        'Agir sur bénéfices perçus, preuves et réduction des coûts psychologiques.',
        ['Confondre attitude envers une marque et attitude envers un comportement','Déduire l’action d’une attitude seule'],
        AJZEN
      ),
      'Norme subjective':d(
        'Pression sociale perçue provenant de personnes ou groupes importants.',
        ['Qui compte dans la décision ?','Quelles attentes sociales sont perçues ?','Le groupe de référence valorise-t-il ce comportement ?'],
        ['Influence des proches','Communautés','Avis','Normes professionnelles','Contenus sociaux'],
        'La norme est subjective : ce qui compte est la pression perçue, pas seulement l’opinion réelle du groupe.',
        'Dans un achat visible, la recommandation des pairs peut modifier l’intention.',
        'Le choix d’une destination peut être influencé par le groupe familial ou les normes de voyage du cercle social.',
        'Mobiliser preuve sociale, communautés ou prescripteurs sans manipulation.',
        ['Réduire la norme au nombre d’avis','Stéréotyper un groupe'],
        AJZEN
      ),
      'Contrôle perçu':d(
        'Perception de la facilité ou difficulté à réaliser le comportement.',
        ['Quelles barrières pratiques ?','Le client se sent-il capable ?','A-t-il temps, budget, compétences ou accès ?'],
        ['Temps','Budget','Disponibilité','Compétence','Accessibilité','Friction du parcours'],
        'Une intention forte peut rester sans effet si le contrôle réel ou perçu est faible.',
        'Un parcours de souscription complexe peut bloquer un client pourtant convaincu.',
        'Un séjour durable peut être souhaité mais non choisi si l’accès sans voiture paraît impossible.',
        'Réduire friction, coût d’effort, incertitude et barrières d’accès.',
        ['Confondre contrôle perçu et contrôle réel','Ne mesurer que l’intention'],
        AJZEN
      ),
      'Intention':d(
        'Disposition consciente à réaliser un comportement futur.',
        ['Quelle action précise est envisagée ?','À quel horizon ?','Avec quelle force ?'],
        ['Intention déclarée','Ajout au panier','Demande de devis','Pré-réservation'],
        'L’intention est un prédicteur utile mais imparfait du comportement.',
        'Une intention d’achat élevée doit être confrontée aux abandons et à la conversion réelle.',
        'Une intention de revisite ne vaut pas une réservation future.',
        'Suivre intention puis comportement et analyser l’écart.',
        ['Présenter l’intention comme un comportement','Oublier les contraintes situationnelles'],
        AJZEN
      ),
      'Comportement':d(
        'Action effectivement réalisée dans un contexte donné.',
        ['Que fait réellement la personne ?','Quand ?','Avec quel canal ou fréquence ?'],
        ['Transactions','Usage','Réservation','Rétention','Données comportementales'],
        'Le comportement est le résultat final à expliquer, mais son observation ne révèle pas à elle seule les motivations.',
        'Le taux de réachat mesure un comportement de fidélité mais pas nécessairement l’attachement.',
        'La réservation directe peut résulter d’un meilleur prix, d’une habitude ou d’un avantage fidélité.',
        'Croiser comportement avec données qualitatives et attitudinales.',
        ['Inférer une motivation à partir d’un clic','Confondre répétition et fidélité attitudinale'],
        AJZEN
      )
    }
  },

  'cours|Segmentation • Ciblage • Positionnement':{
    'Les grandes familles de critères de segmentation':{
      'Sociodémographique':d(
        'Critères décrivant les personnes ou foyers : âge, revenu, profession, composition, etc.',
        ['Ces caractéristiques expliquent-elles vraiment le comportement étudié ?','Sont-elles mesurables et actionnables ?'],
        ['CRM','Statistiques publiques','Panel','Enquête'],
        'Faciles à mesurer, ces critères sont parfois peu explicatifs seuls.',
        'Segmenter une offre bancaire par situation de vie peut être plus utile que par âge seul.',
        'Une destination peut distinguer familles avec enfants et couples sans enfants, mais doit ensuite vérifier les motivations réelles.',
        'Adapter offre, message ou canal si les différences sont démontrées.',
        ['Faire de l’âge une explication automatique','Créer trop de segments descriptifs'],
        'https://www.pearson.com/en-us/subject-catalog/p/marketing-an-introduction/P200000006082'
      ),
      'Géographique':d(
        'Critères liés au lieu de résidence, territoire, distance ou accessibilité.',
        ['La distance modifie-t-elle coût, usage ou canal ?','Existe-t-il des différences territoriales de demande ?'],
        ['Origine clients','Temps de trajet','Zones de chalandise','Données territoriales'],
        'Pertinent quand l’accès ou les habitudes locales structurent fortement la demande.',
        'Une enseigne peut adapter assortiment et média selon zone de chalandise.',
        'Une destination peut cibler les bassins accessibles en moins de trois heures pour un court séjour.',
        'Prioriser zones de communication, distribution ou adaptation locale.',
        ['Confondre territoire et motivation','Ignorer mobilité réelle'],
        'https://www.insee.fr/'
      ),
      'Comportemental':d(
        'Segmentation fondée sur usage, fréquence, fidélité, canal, occasion ou réaction à l’offre.',
        ['Quels comportements différencient vraiment la valeur ou les besoins ?','Les données sont-elles stables ?'],
        ['Transactions','Fréquence','Canal','Panier','Récence','Usage produit'],
        'Souvent directement actionnable, mais dépend de la qualité des données et peut évoluer rapidement.',
        'Distinguer clients occasionnels et intensifs pour personnaliser relation et offre.',
        'Séparer voyageurs affaires, week-end et longs séjours selon comportements réels de réservation.',
        'Adapter CRM, prix, service et pression commerciale.',
        ['Créer des segments à partir d’un comportement ponctuel','Confondre corrélation et besoin'],
        LEMON
      ),
      'Bénéfices recherchés':d(
        'Segmentation fondée sur la valeur ou le résultat que le client cherche à obtenir.',
        ['Quel problème veut-il résoudre ?','Quels bénéfices arbitrent réellement le choix ?'],
        ['Qualitatif','Conjoint','Questionnaires','Avis','Entretiens'],
        'Très explicative pour le positionnement, mais plus coûteuse à mesurer.',
        'Pour un logiciel, certains cherchent simplicité, d’autres profondeur fonctionnelle.',
        'Pour un hôtel, certains cherchent localisation, d’autres expérience, flexibilité ou statut.',
        'Construire des propositions de valeur et messages différents.',
        ['Confondre bénéfice et caractéristique','Inventer des bénéfices sans recherche'],
        KELLER
      ),
      'Psychographique':d(
        'Critères liés aux valeurs, styles de vie, intérêts et représentations.',
        ['Les valeurs influencent-elles réellement la décision ?','Peut-on atteindre ces groupes opérationnellement ?'],
        ['Enquêtes','Entretiens','Panels','Communautés'],
        'Peut expliquer certaines préférences mais est parfois difficile à mesurer et cibler proprement.',
        'Une marque peut distinguer recherche de performance et recherche de simplicité.',
        'Une destination peut travailler aventure, bien-être ou culture, mais doit relier ces univers à des comportements observables.',
        'Affiner proposition de valeur et communication.',
        ['Réduire les personnes à des profils caricaturaux','Utiliser des personas non fondés'],
        AJZEN
      )
    }
  },

  'cours|Produit / Service / Marque':{
    'Capital de marque — réseau d’associations':{
      'Notoriété':d(
        'Capacité à reconnaître ou rappeler la marque.',
        ['La marque est-elle connue spontanément ?','Est-elle reconnue dans la catégorie ?'],
        ['Notoriété spontanée','Assistée','Search volume','Reconnaissance'],
        'La notoriété est nécessaire dans certains marchés mais ne dit rien sur la qualité des associations.',
        'Une marque très connue peut rester peu considérée à l’achat.',
        'Une chaîne hôtelière connue peut être peu choisie si son image ne correspond pas au séjour recherché.',
        'Travailler disponibilité mentale et pertinence de catégorie.',
        ['Confondre notoriété et préférence'],
        KELLER
      ),
      'Qualité perçue':d(
        'Jugement global du client sur le niveau de qualité attendu ou vécu.',
        ['Quels attributs signalent la qualité ?','La perception correspond-elle à la performance réelle ?'],
        ['Avis','Satisfaction','Tests','Prix','Réputation'],
        'La qualité perçue est subjective et peut différer de la conformité technique.',
        'Un packaging premium peut élever les attentes et la perception.',
        'Une classification hôtelière peut rassurer, mais l’expérience réelle reste décisive.',
        'Renforcer preuves, cohérence et expérience.',
        ['Traiter la qualité perçue comme une mesure objective'],
        KELLER
      ),
      'Associations':d(
        'Idées, images, émotions et attributs reliés à la marque dans la mémoire.',
        ['Quelles associations viennent spontanément ?','Sont-elles fortes, favorables et distinctives ?'],
        ['Études d’image','Associations libres','Avis','Social listening'],
        'Les associations structurent le positionnement perçu et peuvent être positives ou négatives.',
        'Une marque peut être associée à innovation mais aussi complexité.',
        'Une destination peut être associée à fête, patrimoine, luxe ou foule selon les publics.',
        'Renforcer les associations utiles et corriger celles qui nuisent au positionnement.',
        ['Choisir soi-même les associations sans mesurer les perceptions'],
        KELLER
      ),
      'Préférence':d(
        'Avantage attitudinal relatif d’une marque face aux alternatives.',
        ['La marque est-elle réellement préférée ?','Dans quelles situations ?'],
        ['Considération','Préférence déclarée','Share of choice'],
        'La préférence peut ne pas produire d’achat si prix, disponibilité ou contraintes interviennent.',
        'Une marque préférée peut perdre la vente faute de distribution.',
        'Un hôtel préféré peut ne pas être réservé s’il n’est pas disponible aux dates voulues.',
        'Travailler disponibilité, prix et conversion en plus de l’image.',
        ['Confondre préférence et achat'],
        KELLER
      ),
      'Fidélité':d(
        'Maintien d’une relation comportementale et/ou attitudinale.',
        ['Le client revient-il ?','Pourquoi ?','La relation résisterait-elle à une offre concurrente ?'],
        ['Réachat','Rétention','Part de portefeuille','Attachement'],
        'La répétition peut être une habitude ou une contrainte, pas une fidélité forte.',
        'Un abonnement peut créer rétention sans préférence.',
        'Un voyageur peut revenir pour le programme de points ou pour une véritable préférence de marque.',
        'Renforcer valeur relationnelle et réduire les raisons de départ.',
        ['Confondre réachat et attachement'],
        KELLER
      )
    }
  },

  'cours|Distribution & omnicanal':{
    'Omnicanal — un client, plusieurs points de contact':{
      'Magasin':d('Canal physique de vente et d’expérience.',['Quel rôle joue le lieu physique ?','Que peut-il faire mieux que le digital ?'],['Trafic','Conversion','Temps de visite','Panier'],'Le magasin peut vendre, rassurer, conseiller ou servir de point logistique.','Un magasin peut devenir un lieu d’essai et de conseil avant achat digital.','Un office de tourisme physique peut compléter l’information mobile et résoudre des situations complexes.','Clarifier son rôle dans le parcours omnicanal.',['Mesurer uniquement le CA magasin'],LEMON),
      'Site':d('Point de contact web contrôlé par la marque.',['Quel besoin résout-il ?','Où sont les frictions ?'],['Trafic','Conversion','Abandon','Recherche interne'],'Le site est à la fois média, vendeur et support selon le parcours.','Un site e-commerce doit articuler contenu et conversion.','Le site d’un hôtel doit rassurer, informer et convertir sans friction.','Améliorer UX, contenu et continuité entre canaux.',['Optimiser uniquement le trafic'],LEMON),
      'App':d('Interface mobile persistante pouvant intégrer service, transaction et fidélité.',['L’usage récurrent justifie-t-il une app ?','Quel bénéfice exclusif ?'],['MAU','Rétention','Usage fonction','Conversion'],'Une app n’a de sens que si elle apporte une valeur récurrente supérieure au web.','Une app retail peut intégrer fidélité et scan.','Une app de compagnie aérienne peut centraliser carte d’embarquement, alertes et rebooking.','Prioriser les usages à forte fréquence ou valeur.',['Créer une app sans usage récurrent'],LEMON),
      'Réseaux sociaux':d('Points de contact d’inspiration, conversation et preuve sociale.',['Quel rôle : inspiration, service, trafic ?','Quelle audience ?'],['Portée','Engagement','Trafic','Conversion attribuée'],'Ils sont rarement seuls responsables de la vente.','Une campagne peut créer considération puis recherche de marque.','Instagram peut inspirer un séjour sans être le canal final de réservation.','Relier contenu au parcours et mesurer au bon niveau.',['Confondre engagement et résultat'],LEMON),
      'Centre de contact':d('Canal humain ou assisté de résolution, conseil et vente.',['Quels problèmes nécessitent un humain ?','Quel niveau d’autonomie ?'],['FCR','Temps de réponse','Satisfaction','Conversion'],'Sa valeur est élevée sur les demandes complexes ou sensibles.','Un conseiller peut sauver un abandon complexe.','En tourisme, il peut gérer changement, incident ou voyage complexe.','Réserver l’humain aux interactions à forte valeur ou complexité.',['Mesurer uniquement le coût de contact'],LEMON),
      'Plateforme':d('Intermédiaire numérique apportant audience, comparaison et transaction.',['Quelle valeur apporte-t-elle ?','Quelle dépendance crée-t-elle ?'],['Commission','Conversion','Part de volume','Données accessibles'],'Une plateforme peut être simultanément partenaire et source de dépendance.','Une marketplace élargit l’audience mais capte une partie de la relation.','Une OTA apporte visibilité internationale mais prélève une commission et structure la comparaison.','Piloter un mix de distribution et la dépendance.',['Vouloir supprimer l’intermédiaire sans remplacer ses fonctions'],'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act')
    }
  },

  'cours|Marketing des services':{
    'Schéma de servuction':{
      'Client':d('Participant au système de service, avec attentes, comportements et effort propre.',['Que doit-il faire ?','Son effort est-il acceptable ?'],['Temps','Erreurs','Demandes','Satisfaction'],'Le client peut co-produire le service et créer une partie de sa propre expérience.','Le self-checkout transfère une tâche au client en échange de rapidité.','Le check-in en ligne peut réduire l’attente mais frustrer si l’interface est complexe.','Simplifier participation et expliciter les bénéfices.',['Considérer le client comme passif'],SERVUCTION),
      'Personnel en contact':d('Collaborateurs visibles qui délivrent, expliquent et récupèrent le service.',['Quels comportements attendus ?','Quelle autonomie pour résoudre ?'],['Satisfaction','Résolution','Formation','Turnover'],'Le personnel matérialise la promesse et gère la variabilité.','Un conseiller bien formé peut compenser un incident logistique.','Un réceptionniste peut restaurer la confiance après une erreur de chambre.','Former, outiller et donner des marges de manœuvre.',['Réduire la qualité de service à la courtoisie'],SERVUCTION),
      'Support physique':d('Environnement, objets et interfaces visibles qui rendent le service tangible.',['Que comprend le client avant usage ?','Quels signaux rassurent ?'],['Propreté','Design','Signalétique','Erreurs UX'],'Le support influence attentes, confiance et fluidité.','Une interface claire rassure avant achat.','Signalétique, chambre, lobby et application contribuent à l’expérience hôtelière.','Aligner preuves tangibles et promesse.',['Confondre décor et qualité globale'],SERVUCTION),
      'Organisation interne':d('Processus, règles et coordination invisibles qui permettent au front-office de fonctionner.',['Le back-office permet-il une réponse rapide ?','Où sont les ruptures de coordination ?'],['Délais','Erreurs','Escalades','Disponibilité information'],'Une mauvaise organisation interne se traduit souvent par une défaillance visible.','Un CRM non synchronisé peut faire répéter les informations au client.','Un mauvais partage de données réservation-réception peut créer des erreurs à l’arrivée.','Reconcevoir processus et responsabilités.',['Traiter les symptômes uniquement au front-office'],SERVUCTION),
      'Systèmes':d('Outils technologiques et informationnels soutenant la prestation.',['Sont-ils fiables ?','Sont-ils intégrés ?','Aident-ils le personnel ?'],['Disponibilité','Temps de réponse','Taux d’erreur','Adoption'],'Le système doit réduire l’effort, pas déplacer la complexité vers le client ou le personnel.','Un outil de ticketing peut accélérer la résolution s’il est bien intégré.','Un PMS et un CRM bien synchronisés améliorent reconnaissance et personnalisation.','Prioriser fiabilité, intégration et adoption.',['Digitaliser un mauvais processus sans le repenser'],VARGO),
      'Back-office':d('Activités non visibles qui produisent ou soutiennent le service.',['Quelles tâches critiques sont cachées ?','Quel impact sur le front ?'],['Productivité','Délais','Qualité','Capacité'],'La promesse visible dépend d’opérations souvent invisibles.','La préparation logistique conditionne une livraison annoncée rapide.','Housekeeping et maintenance déterminent la disponibilité réelle des chambres.','Piloter les opérations avec des KPI reliés à l’expérience.',['Séparer totalement marketing et opérations'],SERVUCTION)
    }
  },

  'cours|Marketing BtoB':{
    'Centre d’achat — plusieurs rôles autour d’une même décision':{
      'Utilisateur':d('Personne qui utilisera la solution.',['Quels usages et irritants ?','Quel niveau d’acceptation ?'],['Usage','Satisfaction','Temps gagné'],'Son critère peut différer de celui de l’acheteur.','Un logiciel apprécié des achats peut être rejeté par les utilisateurs.','Le participant d’un séminaire juge l’expérience, alors que l’acheteur négocie le contrat.','Adapter preuve et message à chaque rôle.',['Confondre utilisateur et décideur'],WEBSTER),
      'Prescripteur':d('Acteur qui définit ou recommande les caractéristiques.',['Quelles spécifications impose-t-il ?','Quelle expertise possède-t-il ?'],['Cahier des charges','Critères techniques'],'Il façonne le choix avant la comparaison commerciale.','La DSI peut imposer des exigences de sécurité.','Une agence MICE peut prescrire localisation, capacité et équipements.','Produire preuves techniques et contenus de référence.',['L’ignorer parce qu’il ne signe pas'],WEBSTER),
      'Acheteur':d('Acteur chargé de négocier et formaliser la transaction.',['Quels objectifs de coût et risque ?','Quelles règles d’achat ?'],['Prix','TCO','Délais','Conditions'],'Il cherche souvent à sécuriser coût et conditions, pas seulement la meilleure expérience.','Les achats négocient TCO et SLA.','Un service achats négocie tarifs corporate et conditions d’annulation hôtelières.','Quantifier valeur et coût total.',['Réduire sa motivation au prix'],WEBSTER),
      'Décideur':d('Acteur disposant du pouvoir final de choix ou validation.',['Quel risque porte-t-il ?','Quels critères stratégiques ?'],['Budget','ROI','Risque','Alignement stratégie'],'Il arbitre souvent entre plusieurs critères et parties prenantes.','Une direction peut privilégier conformité et adoption à la seule économie.','Un directeur RH peut choisir un lieu de séminaire selon objectifs managériaux.','Fournir une synthèse orientée décision.',['Supposer que le décideur connaît tous les détails'],WEBSTER),
      'Influenceur':d('Acteur qui apporte expertise, légitimité ou pression sur la décision.',['Qui est écouté ?','Sur quel critère ?'],['Recommandations','Expertise','Réseau'],'Son influence peut être forte sans pouvoir formel.','Un consultant peut orienter une sélection de fournisseurs.','Un travel manager peut influencer une politique hôtelière sans signer le contrat.','Identifier ses critères et produire des preuves.',['Se limiter à l’organigramme formel'],WEBSTER),
      'Gatekeeper':d('Acteur qui contrôle l’accès aux informations ou personnes clés.',['Qui filtre les fournisseurs ?','Quels critères d’accès ?'],['Procédures','Référencement','Accès agenda'],'Le gatekeeper peut bloquer une offre avant même son évaluation.','Une plateforme achats peut conditionner le référencement.','Une agence référencée peut filtrer l’accès aux entreprises clientes.','Travailler conformité, référencement et relation.',['Ignorer les barrières procédurales'],WEBSTER)
    }
  },

  'cours|Marketing entrepreneurial':{
    'Causation vs effectuation':{
      'Objectif fixé':d('Logique causale : partir d’un résultat déterminé et choisir les moyens pour l’atteindre.',['L’objectif est-il suffisamment stable ?','Peut-on prévoir le marché ?'],['Prévisions','Business plan','Budget'],'Pertinente lorsque l’environnement est assez prévisible.','Lancer une extension de gamme sur un marché connu peut suivre une logique causale.','Déployer un hôtel supplémentaire dans un concept déjà éprouvé peut relever de cette logique.','Planifier et optimiser.',['Opposer totalement causation et effectuation'],SARAS),
      'Prévoir':d('Utiliser des informations pour anticiper résultats et choisir le meilleur plan.',['Quelles hypothèses sont robustes ?','Quel niveau d’incertitude ?'],['Prévisions','Scénarios','Études'],'Plus l’incertitude est forte, plus les prévisions deviennent fragiles.','Une prévision de demande historique est utile sur un marché stable.','La demande saisonnière hôtelière peut être prévue mieux qu’un usage travel-tech totalement nouveau.','Ajuster le niveau de planification à l’incertitude.',['Présenter une prévision comme certitude'],SARAS),
      'Choisir les moyens':d('Sélectionner ressources et actions adaptées à l’objectif.',['Quels moyens minimisent coût ou risque ?'],['Budget','Ressources','Compétences'],'La logique causale cherche l’efficience vers un effet prédéfini.','Choisir média et budget pour atteindre une cible fixée.','Choisir canaux pour remplir une capacité hôtelière connue.','Optimiser ressources.',['Ignorer les opportunités émergentes'],SARAS),
      'Moyens disponibles':d('Logique effectuale : partir de qui je suis, ce que je sais et qui je connais.',['Quelles ressources sont déjà contrôlées ?','Quel réseau peut s’engager ?'],['Compétences','Réseau','Actifs'],'Les moyens limitent mais ouvrent plusieurs effets possibles.','Un entrepreneur peut construire une offre à partir d’une expertise et d’un réseau existants.','Une startup tourisme peut démarrer avec un territoire pilote et quelques partenaires plutôt qu’un marché national théorique.','Construire des possibilités réalistes.',['Confondre moyens disponibles et manque d’ambition'],SARAS),
      'Agir':d('Privilégier une action contrôlable à faible perte acceptable.',['Quelle perte est supportable ?','Quel test apprend vite ?'],['Coût test','Temps','Engagement partenaires'],'L’action produit de l’information et peut réduire l’incertitude.','Tester une landing page avant développer un produit complet.','Piloter un assistant touristique dans un office avant déploiement national.','Expérimenter et apprendre.',['Tester sans hypothèse'],SARAS),
      'Construire les possibles':d('Les engagements successifs de partenaires transforment progressivement l’espace des possibles.',['Qui peut co-construire ?','Quel engagement réduit l’incertitude ?'],['Partenariats','Précommandes','Pilotes'],'La stratégie émerge aussi des engagements obtenus.','Un distributeur partenaire peut faire évoluer le produit.','Un hôtel pilote peut transformer une idée travel-tech en solution métier.','Co-créer, pivoter ou consolider.',['Appeler “pivot” tout changement improvisé'],SARAS)
    }
  },

  'cours|Études marketing':{
    'Quel type d’étude choisir ?':{
      'Explorer':d('Comprendre un phénomène encore mal défini, faire émerger motivations et hypothèses.',['Que ne comprend-on pas encore ?','Quels mécanismes possibles ?'],['Entretiens','Observation','Focus groups'],'Le qualitatif approfondit mais ne mesure pas une fréquence dans la population.','Explorer les raisons d’abandon avant de construire un questionnaire.','Interroger des visiteurs pour comprendre pourquoi ils ne restent qu’une journée.','Formuler hypothèses et variables.',['Généraliser statistiquement quelques entretiens'],'https://www.insee.fr/fr/information/2387611'),
      'Mesurer':d('Estimer fréquence, niveau, différences ou relations sur un échantillon structuré.',['Quelle variable mesurer ?','Quelle population ?','Quelle précision ?'],['Questionnaires','Panels','Données transactionnelles'],'Le quantitatif mesure, sous réserve de la qualité de l’échantillon et des questions.','Mesurer la satisfaction par segment.','Estimer la part de visiteurs sensibles à la flexibilité d’annulation.','Prioriser selon ampleur et segments.',['Confondre grand échantillon et représentativité'],'https://www.insee.fr/fr/information/2387611'),
      'Expliquer un effet':d('Tester si une variation provoque un changement dans une variable résultat.',['Quelle cause supposée ?','Peut-on isoler l’effet ?'],['A/B test','Expérience contrôlée'],'Une association ne suffit pas pour conclure à une causalité.','Tester deux pages de prix aléatoirement.','Tester deux formulations de réservation sur des audiences comparables.','Choisir la variante si effet robuste et pertinent.',['Changer plusieurs éléments à la fois'],'https://www.insee.fr/fr/information/2387611'),
      'Contextualiser':d('Utiliser des données secondaires existantes pour cadrer le marché ou la question.',['Quelles données existent déjà ?','Sont-elles comparables ?'],['Insee','Eurostat','CRM','Études sectorielles'],'Rapide et utile mais le champ peut ne pas correspondre exactement au problème.','Utiliser une statistique sectorielle avant une étude propriétaire.','Comparer fréquentation nationale et données de destination avec prudence.','Définir le périmètre et éviter une collecte inutile.',['Utiliser une source ancienne ou hors champ'],'https://www.insee.fr/fr/information/2387611')
    }
  },

  'cours|Statistiques & décision':{
    'Logique d’un test statistique':{
      'Formuler H0':d('Définir l’hypothèse de référence que le test confronte aux données.',['Quelle absence d’effet ou différence teste-t-on ?'],['Hypothèse explicite'],'H0 structure la procédure ; elle n’est pas une croyance à prouver.','H0 : le taux de conversion est identique entre deux pages.','H0 : la satisfaction moyenne est identique entre deux types de séjour.','Clarifier la question avant calcul.',['Formuler H0 après avoir vu le résultat'],'https://www.insee.fr/fr/information/2387611'),
      'Choisir le test':d('Sélectionner une procédure compatible avec variables, plan et hypothèses.',['Variable quantitative ou qualitative ?','Groupes indépendants ?','Conditions respectées ?'],['Type variable','Distribution','Taille échantillon'],'Le choix du test dépend du design, pas du résultat souhaité.','Comparer proportions ou moyennes avec une méthode adaptée.','Comparer satisfaction de deux segments avec le bon test.','Éviter des conclusions invalides.',['Choisir un test par habitude'],'https://www.insee.fr/fr/information/2387611'),
      'Calculer':d('Appliquer la statistique de test et obtenir une mesure compatible avec la procédure.',['Les données sont-elles propres ?','Les unités correctes ?'],['Statistique','p-value','intervalle'],'Le calcul ne remplace pas l’interprétation.','Une p-value faible ne mesure pas l’importance de l’effet.','Une différence de satisfaction peut être significative mais minime.','Passer au sens managérial.',['Présenter uniquement un chiffre'],'https://www.insee.fr/fr/information/2387611'),
      'Comparer au seuil':d('Utiliser le seuil alpha défini pour décider si les données sont suffisamment incompatibles avec H0.',['Quel seuil a été choisi avant l’analyse ?'],['Alpha','p-value'],'Le seuil contrôle une procédure de risque, pas la vérité absolue.','p < 0,05 conduit souvent au rejet de H0 selon le protocole.','Même logique sur une expérimentation touristique.','Décider statistiquement avec prudence.',['Dire “95 % de chances que H1 soit vraie”'],'https://www.insee.fr/fr/information/2387611'),
      'Conclure avec prudence':d('Traduire le résultat statistique en conclusion limitée au plan d’étude.',['Quelle taille d’effet ?','Quelle utilité métier ?','Quelle causalité possible ?'],['Effet','IC','Contexte'],'Significativité statistique et importance managériale sont distinctes.','Un gain de 0,1 point peut être significatif mais non rentable.','Une hausse minime de satisfaction peut ne pas justifier un investissement.','Intégrer coût, effet et incertitude.',['Surinterpréter causalité ou importance'],'https://www.insee.fr/fr/information/2387611')
    }
  },

  'cours|Droit appliqué au marketing':{
    'RGPD — les réflexes avant de collecter':{
      'Finalité':d('Objectif déterminé, explicite et légitime du traitement.',['Pourquoi collecte-t-on cette donnée ?','L’usage futur est-il compatible ?'],['Registre des traitements','Information utilisateur'],'La finalité encadre ce que l’organisation peut faire ensuite.','Collecter un e-mail pour exécuter une commande ne permet pas automatiquement toute prospection.','Collecter des préférences de séjour doit être relié à un usage clairement annoncé.','Limiter les usages et informer.',['Collecter “au cas où”'],CNIL),
      'Base légale':d('Fondement juridique autorisant le traitement.',['Contrat, obligation, consentement, intérêt légitime… lequel s’applique ?'],['Analyse juridique','Documentation'],'Le consentement n’est qu’une base parmi plusieurs.','L’exécution d’une commande peut relever du contrat.','La réservation nécessite certaines données sans consentement marketing.','Choisir et documenter la base appropriée.',['Dire “RGPD = consentement”'],CNIL),
      'Minimisation':d('Ne collecter que les données adéquates, pertinentes et nécessaires.',['Cette donnée est-elle vraiment nécessaire ?'],['Champs formulaire','Données utilisées'],'Moins de données peut réduire risque et friction.','Demander une date de naissance sans usage réel est difficile à justifier.','Un hôtel ne doit pas collecter des préférences sans finalité claire.','Simplifier formulaires et gouvernance.',['Collecter tout ce qui est techniquement disponible'],CNIL),
      'Information':d('Informer les personnes de manière transparente sur traitement et droits.',['L’information est-elle accessible et compréhensible ?'],['Notice','Politique de confidentialité'],'La transparence influence conformité et confiance.','Expliquer clairement pourquoi une donnée est demandée.','Informer sur personnalisation CRM et durée de conservation.','Améliorer wording et parcours.',['Cacher l’information dans des textes illisibles'],CNIL),
      'Durée':d('Conserver les données pendant une durée proportionnée à la finalité.',['Combien de temps est nécessaire ?','Quand supprimer ou anonymiser ?'],['Politique de rétention'],'Une durée illimitée doit être évitée sans justification.','Supprimer des leads inactifs selon une règle documentée.','Nettoyer des préférences obsolètes d’anciens clients.','Définir règles de purge.',['Conserver indéfiniment par défaut'],CNIL),
      'Droits':d('Permettre l’exercice des droits applicables : accès, rectification, opposition, effacement, etc.',['Le canal d’exercice est-il simple ?','Le délai est-il maîtrisé ?'],['Demandes droits','Délais','Processus'],'Un droit théorique mais impraticable crée risque juridique et réputationnel.','Faciliter désinscription et correction des données.','Permettre à un membre fidélité de gérer ses préférences.','Concevoir des processus de réponse.',['Rendre l’opposition plus difficile que l’inscription'],CNIL)
    }
  }
}

export function findInteractiveDetail(pageKey,visualTitle,label){
  return interactiveModelDetails[pageKey]?.[visualTitle]?.[label] || null
}
