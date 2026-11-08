export const trainingMeta={
  'entrainement|QCM rapides':{objective:'Vérifier le rappel immédiat des notions et repérer les confusions.',time:'5–10 min',difficulty:'★☆☆',skills:['Rappel','Discrimination conceptuelle'],step:1},
  'entrainement|Vrai / Faux argumenté':{objective:'Passer du rappel à une justification courte et précise.',time:'10–15 min',difficulty:'★☆☆',skills:['Explication','Justification'],step:2},
  'entrainement|Flashcards':{objective:'Automatiser définitions, auteurs et mécanismes essentiels.',time:'5–15 min',difficulty:'★☆☆',skills:['Mémorisation active'],step:1},
  'entrainement|Questions ouvertes':{objective:'Expliquer une notion avec ses propres mots et la relier à une décision.',time:'15–20 min',difficulty:'★★☆',skills:['Explication','Mobilisation'],step:2},
  'entrainement|Définitions':{objective:'Produire des définitions précises, courtes et contextualisables.',time:'10 min',difficulty:'★☆☆',skills:['Définition','Précision'],step:1},
  'entrainement|Retrouver l’auteur':{objective:'Associer une idée ou un mécanisme à la bonne référence théorique.',time:'10 min',difficulty:'★☆☆',skills:['Auteur','Concept'],step:1},
  'entrainement|Retrouver le modèle':{objective:'Choisir le cadre d’analyse adapté au problème posé.',time:'10–15 min',difficulty:'★★☆',skills:['Diagnostic','Choix du modèle'],step:3},
  'entrainement|Mini-cas 10 min':{objective:'Reconnaître rapidement les notions utiles dans une situation concrète.',time:'10 min par cas',difficulty:'★★☆',skills:['Lecture de cas','Diagnostic court'],step:3},
  'entrainement|Cas 30–45 min':{objective:'Construire un diagnostic et des recommandations sur un cas intermédiaire.',time:'30–45 min',difficulty:'★★☆',skills:['Diagnostic','Préconisations','KPI'],step:5},
  'entrainement|Études de cas longues':{objective:'Traiter un ensemble documentaire proche de l’épreuve de spécialité.',time:'1 h 30 à 3 h',difficulty:'★★★',skills:['Annexes','Calcul','Concepts','Recommandations'],step:8},
  'entrainement|Calculs marketing':{objective:'Calculer correctement puis interpréter le résultat pour la décision.',time:'15–25 min',difficulty:'★★☆',skills:['Calcul','Interprétation'],step:4},
  'entrainement|Analyse de documents':{objective:'Extraire une preuve utile, qualifier la source et éviter la paraphrase.',time:'20–30 min',difficulty:'★★☆',skills:['Analyse documentaire','Esprit critique'],step:4},
  'entrainement|Diagnostic':{objective:'Transformer des faits en enjeux hiérarchisés et spécifiques au cas.',time:'20–30 min',difficulty:'★★☆',skills:['Diagnostic','Hiérarchisation'],step:5},
  'entrainement|Problématique':{objective:'Formuler une tension décisionnelle qui organise le raisonnement.',time:'10–15 min',difficulty:'★★☆',skills:['Problématisation'],step:6},
  'entrainement|Plan':{objective:'Construire une architecture de réponse qui fait progresser la démonstration.',time:'15–20 min',difficulty:'★★☆',skills:['Structuration','Argumentation'],step:6},
  'entrainement|Préconisations':{objective:'Formuler des actions justifiées, contextualisées, priorisées et mesurables.',time:'20–30 min',difficulty:'★★★',skills:['Recommandation','KPI','Justification'],step:7},
  'entrainement|Chronométré':{objective:'Automatiser la méthode sous contrainte de temps et identifier les goulots d’étranglement.',time:'30 min puis progressif',difficulty:'★★★',skills:['Gestion du temps','Synthèse','Production'],step:8},
  'entrainement|Concours blanc':{objective:'Simuler une épreuve complète et s’autoévaluer après un délai.',time:'5 h',difficulty:'★★★',skills:['Endurance','Méthode','Mobilisation complète'],step:8}
}

export const tourismPedagogy={
  'tourisme|Fondamentaux':{
    objectives:['Lire correctement un indicateur touristique et son champ.','Relier demande, capacité, saisonnalité et expérience.','Éviter les généralisations à partir d’une seule donnée.'],
    recap:['Le tourisme est un système d’acteurs interdépendants.','Une nuitée ne mesure ni toute la demande ni toute la dépense.','Toujours préciser territoire, période et champ statistique.'],
    examTips:['Distinguer fait statistique et interprétation.','Comparer des sources seulement après avoir vérifié leur périmètre.','Relier les chiffres à un enjeu marketing précis.']
  },
  'tourisme|Hôtellerie':{
    objectives:['Analyser capacité, marque, prix, distribution et fidélité.','Comprendre le rôle des OTA et du direct.','Mobiliser RevPAR, expérience et portefeuille de marques.'],
    recap:['La chambre est un inventaire périssable.','Le canal de vente affecte marge, donnée et relation.','Une marque hôtelière doit rendre sa promesse visible dans l’expérience.'],
    examTips:['Ne pas réduire la performance au taux d’occupation.','Comparer le coût net des canaux.','Dater explicitement les cas Accor/OKKO anciens et actuels.']
  },
  'tourisme|Restauration':{
    objectives:['Relier carte, capacité, expérience et marge.','Comprendre les leviers du revenue management en restauration.','Distinguer croissance du CA et amélioration de rentabilité.'],
    recap:['CA = volume × panier, mais la marge dépend du mix et des coûts.','La durée d’occupation des tables est une variable de capacité.','Avis et réservation influencent acquisition et confiance.'],
    examTips:['Toujours demander les coûts avant de conclure sur la rentabilité.','Proposer des leviers autres que le prix.','Associer chaque recommandation à un KPI de marge ou d’expérience.']
  },
  'tourisme|Destinations & territoires':{
    objectives:['Analyser une destination comme offre collective.','Articuler image, flux, saisonnalité et gouvernance.','Intégrer habitants et capacité d’accueil.'],
    recap:['Une destination n’est pas contrôlée par un seul acteur.','La communication ne peut durablement contredire l’expérience.','La performance doit intégrer dépenses, flux et acceptabilité.'],
    examTips:['Nommer les parties prenantes.','Éviter “faire plus de communication” sans offre correspondante.','Distinguer attractivité et surfréquentation.']
  },
  'tourisme|Agences / TO / plateformes':{
    objectives:['Distinguer les rôles des intermédiaires.','Évaluer valeur créée et dépendance.','Comparer coût, audience, contrôle et données par canal.'],
    recap:['Une plateforme réduit certains coûts de recherche mais capte une partie de la valeur.','Les effets de réseau renforcent les grandes plateformes.','Le direct et l’indirect sont souvent complémentaires.'],
    examTips:['Ne pas recommander la désintermédiation par principe.','Intégrer DMA/DSA seulement quand ils éclairent le cas.','Comparer contribution nette plutôt que commissions seules.']
  },
  'tourisme|Expérience touristique':{
    objectives:['Cartographier l’expérience avant, pendant et après.','Identifier les moments de vérité.','Relier expérience, récupération de service et fidélité.'],
    recap:['L’expérience dépasse les points de contact contrôlés par une seule organisation.','Le souvenir final peut être influencé par quelques moments critiques.','Une récupération rapide peut restaurer contrôle et confiance.'],
    examTips:['Cartographier le parcours avec besoins et émotions, pas seulement canaux.','Choisir des KPI par moment critique.','Distinguer satisfaction globale et causes opérationnelles.']
  },
  'tourisme|Distribution & OTA':{
    objectives:['Construire un mix de distribution par segment.','Mesurer coût net et valeur relationnelle.','Comprendre les enjeux réglementaires de plateforme.'],
    recap:['Le nombre de réservations ne suffit pas pour évaluer un canal.','La dépendance est un risque même quand le volume est élevé.','Le direct nécessite aussi des coûts d’acquisition et de conversion.'],
    examTips:['Comparer marge, CAC, conversion et réachat.','Distinguer fait réglementaire et enquête en cours.','Ne pas présenter une procédure DSA comme une culpabilité établie.']
  },
  'tourisme|E-réputation':{
    objectives:['Lire une note avec volume, récence et dispersion.','Transformer les avis en causes actionnables.','Comprendre le rôle des réponses dans la confiance.'],
    recap:['La note moyenne masque les thèmes et les étapes du parcours.','La réputation doit être reliée aux opérations.','Les avis sont une preuve sociale mais peuvent être biaisés.'],
    examTips:['Coder les avis par thème.','Croiser avis et données opérationnelles.','Ne jamais inventer une causalité à partir de quelques commentaires.']
  },
  'tourisme|Revenue management':{
    objectives:['Comprendre la logique capacité-demande-prix.','Interpréter ADR, occupation et RevPAR.','Intégrer équité perçue et segmentation.'],
    recap:['Une capacité périssable exige anticipation et arbitrage.','RevPAR ne mesure pas toute la rentabilité.','Prix et disponibilité doivent être pilotés ensemble.'],
    examTips:['Toujours interpréter un calcul.','Comparer coûts variables et revenus annexes.','Ne pas confondre revenue management et hausse opportuniste des prix.']
  },
  'tourisme|Fidélisation & CRM':{
    objectives:['Distinguer satisfaction, réachat et fidélité.','Comprendre le CRM comme stratégie et processus.','Relier avantages, données et valeur client.'],
    recap:['Un programme ne vaut que par la valeur perçue et l’usage.','Le CRM ne se réduit pas au logiciel.','La donnée doit servir une finalité claire et licite.'],
    examTips:['Mesurer membres actifs plutôt que seuls inscrits.','Relier investissement relationnel à CLV ou rétention.','Intégrer protection des données dans les recommandations.']
  },
  'tourisme|Tourisme durable':{
    objectives:['Distinguer promesse, action et performance environnementale.','Choisir des preuves mesurables.','Identifier les risques de greenwashing.'],
    recap:['Le tourisme durable concerne opérations, mobilité et territoire.','Une certification n’épuise pas la question de l’impact.','Toute allégation doit avoir un périmètre et une preuve.'],
    examTips:['Éviter les promesses absolues.','Comparer intensité et impact absolu quand possible.','Relier durabilité à l’offre et au modèle économique.']
  },
  'tourisme|IA & nouvelles technologies':{
    objectives:['Évaluer un cas d’usage avant la technologie.','Identifier données, valeur, risques et KPI.','Distinguer pilote et déploiement à l’échelle.'],
    recap:['IA et IoT ne créent pas de valeur sans adoption.','La qualité des données conditionne la qualité du service.','Un gain doit être mesuré en temps, qualité, conversion ou coût.'],
    examTips:['Formuler le problème utilisateur avant la solution.','Prévoir erreurs, contrôle et gouvernance.','Ne pas citer l’IA comme recommandation autonome.']
  },
  'tourisme|Influence & réseaux sociaux':{
    objectives:['Comparer portée et qualité d’audience.','Définir le rôle du créateur dans le parcours.','Mesurer au-delà de l’engagement.'],
    recap:['L’audience la plus grande n’est pas toujours la plus pertinente.','Le contenu influence inspiration et preuve sociale.','La transparence commerciale est indispensable.'],
    examTips:['Préciser cible, format et KPI.','Intégrer droits d’usage des contenus.','Ne pas confondre likes et réservations.']
  },
  'tourisme|Luxe & tourisme':{
    objectives:['Comprendre la création de valeur premium.','Relier personnalisation, marque et excellence opérationnelle.','Identifier les preuves d’une montée en gamme.'],
    recap:['Le prix élevé doit être soutenu par une valeur crédible.','La personnalisation doit rester fluide et respectueuse.','L’expérience premium est un système, pas un décor.'],
    examTips:['Donner des preuves opérationnelles de montée en gamme.','Mesurer expérience et réachat.','Éviter de définir le luxe uniquement par le prix.']
  },
  'tourisme|Événementiel':{
    objectives:['Analyser l’événement comme produit et levier de destination.','Mesurer effets commerciaux et expérience.','Comprendre son rôle dans la désaisonnalisation.'],
    recap:['Un événement peut devenir un actif de marque.','Les flux et la capacité font partie de l’expérience.','Le volume d’entrées ne suffit pas pour juger le succès.'],
    examTips:['Séparer visiteurs incrémentaux et habituels.','Intégrer coûts et externalités.','Construire un tableau de bord commercial + expérience.']
  },
  'tourisme|Crises & tourisme':{
    objectives:['Distinguer faits confirmés, hypothèses et investigation.','Protéger la confiance sans spéculer.','Préparer reprise et résilience.'],
    recap:['La communication de crise ne remplace pas la gestion opérationnelle.','Rapidité et exactitude doivent être arbitrées ensemble.','Les dépendances concentrées augmentent la vulnérabilité.'],
    examTips:['Dater les informations de crise.','Ne pas transformer une enquête en conclusion de culpabilité.','Proposer assistance, mesure et scénario de reprise.']
  }
}

export const casePedagogy={
  'cas|Hôtellerie':{time:'35–45 min',difficulty:'★★★',skills:['Diagnostic','Marque','Distribution','CRM'],facts:['Chiffre d’affaires et indicateurs publiés par Accor.','Portefeuille multimarque et programme de fidélité documentés.'],interpretations:['Le portefeuille peut accroître la couverture mais aussi la complexité.'],hypotheses:['ALL réduit-il réellement le coût d’acquisition ?','La croissance du direct améliore-t-elle la contribution nette ?']},
  'cas|Plateformes':{time:'35–45 min',difficulty:'★★★',skills:['Plateforme','Porter','Régulation'],facts:['Booking Holdings publie 186,1 Md$ de gross bookings et 1,2 Md de nuitées 2025.','Booking.com est gatekeeper DMA et fait l’objet d’une procédure DSA ouverte le 21/10/2026.'],interpretations:['L’échelle renforce audience et pouvoir d’intermédiation.'],hypotheses:['Quelle part de valeur nette l’OTA apporte-t-elle à un hôtel donné ?']},
  'cas|Transport':{time:'30–45 min',difficulty:'★★☆',skills:['Réseau','Fidélité','Digital'],facts:['Données financières et réseau publiées par Air France-KLM.'],interpretations:['Le réseau peut renforcer fidélité et connectivité.'],hypotheses:['Quels segments valorisent le plus les avantages réseau ?']},
  'cas|Destinations touristiques':{time:'30–45 min',difficulty:'★★☆',skills:['Conjoncture','Segmentation','Territoire'],facts:['Recettes internationales et indicateurs de fréquentation datés 2026.'],interpretations:['L’activité reste solide mais hétérogène selon indicateurs.'],hypotheses:['Quels segments expliquent l’étalement saisonnier ?']},
  'cas|Parcs & loisirs':{time:'30–45 min',difficulty:'★★☆',skills:['Capacité','Expérience','Événementiel'],facts:['Occupation hôtelière et projet d’extension publiés par Compagnie des Alpes.'],interpretations:['L’hébergement soutient la stratégie de séjour.'],hypotheses:['Les 300 nouvelles chambres créeront-elles de la demande incrémentale ?']},
  'cas|Restauration':{time:'30 min',difficulty:'★★☆',skills:['CA','Marge','Capacité'],facts:['Évolution de chiffre d’affaires issue de l’Insee.'],interpretations:['La hausse du CA ne démontre pas une hausse de marge.'],hypotheses:['La progression vient-elle du volume, du prix ou du mix ?']},
  'cas|Croisières':{time:'30–45 min',difficulty:'★★☆',skills:['Écosystème','Capacité','Fidélité'],facts:['Données publiées par Royal Caribbean Group.'],interpretations:['L’intégration de destinations peut augmenter la captation de valeur.'],hypotheses:['La capacité nouvelle sera-t-elle remplie sans dégrader prix et expérience ?']},
  'cas|Acteurs publics':{time:'30 min',difficulty:'★★☆',skills:['Écosystème','Innovation','Impact'],facts:['France Tourisme Tech a accompagné 35 entreprises et mobilise près de 80 partenaires en 2026.'],interpretations:['L’acteur public peut réduire les coûts de coordination.'],hypotheses:['Combien d’expérimentations deviennent réellement des déploiements durables ?']},
  'cas|Start-up tourisme':{time:'30–45 min',difficulty:'★★★',skills:['Effectuation','Business model','Validation'],facts:['Données DGE sur levées, implantation et usages technologiques.'],interpretations:['L’IA est fréquente mais ne constitue pas une différenciation automatique.'],hypotheses:['Le CAC et la rétention rendent-ils le modèle viable ?']},
  'cas|Crises & controverses':{time:'30–45 min',difficulty:'★★★',skills:['Crise','Confiance','Régulation'],facts:['Procédure formelle DSA ouverte en octobre 2026.'],interpretations:['La fraude peut devenir un risque systémique de confiance.'],hypotheses:['Quelles mesures réduisent effectivement fraude et abandon ?']},
  'cas|Transformation digitale':{time:'30–45 min',difficulty:'★★☆',skills:['Adoption','ROI','Conduite du changement'],facts:['France Tourisme Tech documente plus de 80 mises en relation et plus de 55 expérimentations/partenariats d’open innovation selon ses bilans.'],interpretations:['Le nombre de pilotes ne mesure pas à lui seul la transformation.'],hypotheses:['Quel taux d’industrialisation et quels gains opérationnels ?']},
  'cas|Développement durable':{time:'30–45 min',difficulty:'★★★',skills:['Preuve','Greenwashing','KPI environnementaux'],facts:['Air France-KLM publie des engagements de renouvellement de flotte.'],interpretations:['Un engagement de moyen ne prouve pas une baisse absolue d’impact.'],hypotheses:['Comment évoluent émissions absolues et intensité par passager-km ?']}
}
