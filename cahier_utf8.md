# Cahier des charges — Site « Rencontrez notre équipe »
## Hancock Prospecting PTY LTD

Version 1.0 — Document de référence projet

---

## 1. Présentation du projet

### 1.1 Contexte
Hancock Prospecting PTY LTD est un groupe privé du secteur minier et des ressources
naturelles. Le présent projet vise la création d'un site vitrine institutionnel dont
la page centrale est « Rencontrez notre équipe », destinée à présenter la direction,
les équipes opérationnelles et la culture d'entreprise.

### 1.2 Objectifs
- Valoriser l'image institutionnelle du groupe.
- Présenter les dirigeants et les équipes de façon claire et crédible.
- Renforcer l'attractivité employeur (recrutement, carrières).
- Offrir un point de contact fiable pour presse, partenaires et candidats.
- Garantir la conformité légale (mentions légales, confidentialité, conditions d'utilisation).
- Permettre aux utilisateur de faire une demande de don 
### 1.3 Cibles
| Cible | Attente principale |
|---|---|
| Partenaires et investisseurs | Crédibilité, gouvernance, expertise |
| Candidats | Culture d'entreprise, métiers, offres |
| Journalistes / médias | Biographies, contacts presse, visuels |
| Communautés locales & international | Transparence, responsabilité, contacts |

### 1.4 Périmètre
Inclus : conception graphique, intégration, contenus structurés, pages légales,
formulaire de contact, référencement de base, mise en ligne.
Exclu (sauf avenant) : rédaction des biographies, photographies professionnelles,
traduction, campagnes publicitaires, application mobile.

---

## 2. Arborescence du site

```text
Accueil
├── À propos
│   ├── Notre histoire
│   └── Nos valeurs
├── Rencontrez notre équipe        (page centrale)
│   ├── Direction / Conseil
│   ├── Équipes opérationnelles
│   └── Fiche membre (détail)
├── Activités / Opérations
├── Responsabilité (RSE, communautés, environnement)
├── Carrières
│   └── Offres d'emploi
├── Actualités / Presse
├── Contact
└── Pages légales
    ├── Mentions légales
    ├── Politique de confidentialité
    ├── Conditions d'utilisation
    └── Politique cookies
```

---

## 3. Spécifications fonctionnelles

### 3.1 Page « Rencontrez notre équipe »
| Réf | Fonctionnalité | Description | Priorité |
|---|---|---|---|
| F1 | Bandeau d'introduction | Titre, accroche, image ou vidéo de fond | Haute |
| F2 | Grille de membres | Photo, nom, fonction, rattachement | Haute |
| F3 | Filtres | Par département, site, niveau hiérarchique | Moyenne |
| F4 | Recherche | Recherche par nom ou fonction | Moyenne |
| F5 | Fiche détaillée | Biographie, parcours, domaines d'expertise, LinkedIn | Haute |
| F6 | Sections groupées | Direction / Opérations / Support | Haute |
| F7 | Bloc culture | Chiffres clés, témoignages, valeurs | Moyenne |
| F8 | Appel à l'action | Lien vers Carrières et Contact | Haute |

### 3.2 Fonctionnalités transverses
- Navigation principale et pied de page avec accès aux pages légales.
- Formulaire de contact (nom, e-mail, objet, message, consentement RGPD, anti-spam).
- Bandeau de consentement cookies avec choix granulaire.
- Partage social et données structurées (`Organization`, `Person`).
- Plan du site et page 404 personnalisée.

### 3.3 Administration des contenus
- Gestion des membres : création, modification, ordre d'affichage, publication/dépublication.
- Champs par membre : photo, nom, fonction, département, biographie, e-mail public (optionnel), LinkedIn.
- Rôles : administrateur, éditeur, lecteur.

---

## 4. Spécifications non fonctionnelles

| Domaine | Exigence |
|---|---|
| Performance | Chargement page < 2,5 s ; images optimisées et chargées à la demande |
| Accessibilité | Conformité WCAG 2.1 niveau AA ; contrastes, navigation clavier, textes alternatifs |
| Compatibilité | Chrome, Safari, Firefox, Edge — 2 dernières versions ; mobile, tablette, desktop |
| Sécurité | HTTPS obligatoire, protection formulaires, sauvegardes régulières, mises à jour |
| SEO | Titres uniques < 60 caractères, méta-descriptions < 160, URL lisibles, balisage sémantique |
| Disponibilité | Objectif 99,5 % |
| Langues | Espagnol (principal), français et allemand italien etc (optionnel selon avenant) |

---

## 5. Charte graphique et contenus

- Identité sobre et institutionnelle : teintes terre/ocre, gris anthracite, accents dorés.
- Typographie : un titrage à fort caractère, un corps de texte hautement lisible.
- Photographies : portraits homogènes (cadrage, fond, éclairage identiques).
- Ton rédactionnel : factuel, professionnel, sans superlatifs.

Livrables contenus attendus du client : liste des membres, photos haute définition,
biographies validées, logos, textes institutionnels, informations légales.

---

## 6. Planning indicatif

| Phase | Durée | Livrable |
|---|---|---|
| Cadrage et validation du cahier des charges | 1 semaine | Document validé |
| Maquettes graphiques | 2 semaines | Maquettes desktop + mobile |
| Intégration et développement | 3 semaines | Site en préproduction |
| Intégration des contenus | 1 semaine | Site complet |
| Recette et corrections | 1 semaine | PV de recette |
| Mise en ligne | 2 jours | Site en production |

---

## 7. Recette et garantie
- Tests fonctionnels sur l'ensemble des parcours, tests responsive, tests d'accessibilité.
- Vérification des pages légales et du bandeau cookies.
- Garantie de correction des anomalies : 3 mois après mise en ligne.
- Maintenance corrective et évolutive : contrat séparé.

---

# 8. Mentions légales

**Éditeur du site**
Hancock Prospecting PTY LTD
Forme juridique : Proprietary Limited Company (Australie)
ACN / ABN : *[008676417/69008676417]*
Siège social : *[Western Australia (WA 6005)]*
Téléphone : *[+33 757754014]* — E-mail : *[ prospectinghancock0@gmail.com]*
Directeur de la publication : *[Gina Rinehart Directrice Generale executive chairman]*

**Hébergement**
*[Vercel]*

**Propriété intellectuelle**
L'ensemble des éléments du site (textes, photographies, logos, marques, éléments
graphiques, structure, code) est protégé par le droit de la propriété intellectuelle
et demeure la propriété exclusive de Hancock Prospecting PTY LTD ou de ses ayants droit.
Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle,
sans autorisation écrite préalable est interdite.

**Responsabilité**
Les informations publiées sont fournies à titre indicatif et peuvent être modifiées
à tout moment. L'éditeur ne saurait être tenu responsable des erreurs, d'une
indisponibilité du service, ni du contenu des sites tiers accessibles par lien
hypertexte.

**Droit applicable**
Le site et les présentes mentions sont soumis au droit applicable au siège de
l'éditeur, sous réserve des dispositions impératives protégeant les consommateurs.

**Contact**
Pour toute question relative au site : *[ prospectinghancock0@gmail.com]*

---

# 9. Politique de confidentialité

Dernière mise à jour : *[16/09/2026]*

## 9.1 Responsable du traitement
Hancock Prospecting PTY LTD, *[ Western Australia (WA 6005)
]*, joignable à *[ prospectinghancock0@gmail.com]*.
Délégué / référent protection des données : *[John Macklender]*.

## 9.2 Données collectées
| Catégorie | Exemples | Origine |
|---|---|---|
| Données de contact | Nom, e-mail, téléphone, message | Formulaire |
| Données de candidature | CV, lettre, parcours | Espace Carrières |
| Données techniques | Adresse IP, navigateur, pages vues | Navigation |
| Cookies | Identifiants de mesure d'audience | Consentement |

Aucune donnée sensible n'est demandée. Le site n'est pas destiné aux mineurs.

## 9.3 Finalités et bases légales
| Finalité | Base légale |
|---|---|
| Répondre aux demandes de contact | Intérêt légitime / mesures précontractuelles |
| Traiter les candidatures | Mesures précontractuelles |
| Mesurer l'audience du site | Consentement |
| Assurer la sécurité du site | Intérêt légitime |
| Respecter les obligations légales | Obligation légale |

## 9.4 Durées de conservation
- Demandes de contact : 12 mois après le dernier échange.
- Candidatures : 24 mois maximum, sauf opposition.
- Journaux techniques : 12 mois.
- Cookies de mesure : 13 mois maximum.

## 9.5 Destinataires
Les données sont accessibles aux services internes concernés (communication,
ressources humaines, informatique) et aux prestataires techniques agissant comme
sous-traitants (hébergement, messagerie, outil de mesure d'audience). Aucune donnée
n'est vendue. En cas de transfert hors de l'Espace économique européen, des garanties
appropriées (clauses contractuelles types) sont mises en place.

## 9.6 Sécurité
Chiffrement des échanges (HTTPS), contrôle des accès, journalisation, sauvegardes
et mises à jour régulières.

## 9.7 Vos droits
Vous disposez des droits d'accès, de rectification, d'effacement, de limitation,
d'opposition, de portabilité et du droit de retirer votre consentement à tout moment.
Demandes à adresser à *[e-mail]*. Réponse sous un mois. Vous pouvez introduire une
réclamation auprès de l'autorité de contrôle compétente.

## 9.8 Cookies
Seuls les cookies strictement nécessaires sont déposés sans consentement. Les cookies
de mesure d'audience et de partage social requièrent votre accord préalable, révocable
à tout moment via le lien « Gérer les cookies » présent en pied de page.

## 9.9 Modifications
La présente politique peut être mise à jour ; la date de dernière mise à jour figure
en tête de section.

---

# 10. Conditions d'utilisation

Dernière mise à jour : *[date à compléter]*

## 10.1 Objet
Les présentes conditions régissent l'accès et l'utilisation du site
*[adresse du site]* édité par Hancock Prospecting PTY LTD. Toute consultation du site
vaut acceptation pleine et entière des présentes conditions.

## 10.2 Accès au site
Le site est accessible gratuitement, 24h/24, sauf interruption pour maintenance,
mise à jour ou cas de force majeure. L'éditeur peut modifier, suspendre ou interrompre
tout ou partie du site sans préavis et sans indemnité.

## 10.3 Utilisation autorisée
L'utilisateur s'engage à utiliser le site de bonne foi et s'interdit notamment de :
- porter atteinte au fonctionnement ou à la sécurité du site ;
- extraire, indexer ou aspirer massivement les contenus, y compris les données des
  membres de l'équipe, par tout procédé automatisé ;
- utiliser les coordonnées publiées à des fins de démarchage commercial ou d'envoi
  de messages non sollicités ;
- reproduire, diffuser ou modifier les contenus sans autorisation écrite ;
- usurper l'identité d'un collaborateur ou du groupe.

## 10.4 Contenus soumis par l'utilisateur
Les informations transmises via les formulaires doivent être exactes, licites et
non attentatoires aux droits des tiers. L'éditeur peut supprimer tout contenu
manifestement illicite ou inapproprié.

## 10.5 Propriété intellectuelle
Une licence d'utilisation personnelle, non exclusive et non transférable est accordée
pour la seule consultation du site. Toute autre exploitation est soumise à autorisation.

## 10.6 Liens hypertextes
Les liens vers des sites tiers sont proposés à titre informatif ; l'éditeur n'exerce
aucun contrôle sur leur contenu et décline toute responsabilité à leur égard.
La création d'un lien vers le site est autorisée sous réserve de ne pas créer de
confusion ni de porter atteinte à l'image du groupe.

## 10.7 Limitation de responsabilité
Le site est fourni « en l'état ». L'éditeur ne garantit ni l'exhaustivité ni
l'actualité permanente des informations et ne saurait être tenu responsable des
dommages indirects résultant de l'utilisation du site, dans les limites autorisées
par la loi.

## 10.8 Informations non contractuelles
Les contenus publiés, y compris les présentations d'équipe et informations sur les
activités, sont fournis à titre d'information générale et ne constituent ni un conseil
en investissement, ni une offre, ni un engagement contractuel.

## 10.9 Protection des données
Le traitement des données personnelles est décrit dans la Politique de confidentialité,
qui fait partie intégrante des présentes conditions.

## 10.10 Modification et droit applicable
L'éditeur peut modifier les présentes conditions à tout moment ; la version en vigueur
est celle publiée sur le site. Les présentes sont régies par le droit applicable au
siège de l'éditeur, et tout litige relève des juridictions compétentes de ce ressort,
après tentative de résolution amiable.

---

## 11. Annexes — points à valider par le client
1. Dénomination exacte, numéros d'enregistrement et adresse du siège.
2. Directeur de la publication et contact presse.
3. Hébergeur retenu et coordonnées.
4. Liste définitive des membres à publier et accords écrits pour les portraits.
5. Outil de mesure d'audience et durée de conservation retenue.
6. Juridiction et droit applicable confirmés par le conseil juridique.

