# Petit Guide pratique de la gestion des couleurs dans la production audiovisuelle

## À propos

Ce guide fait partie d'une collection de documents gérés par [*RxLaboratory*](http://rainboxlab.org) : [***RxDocs***](http://docs.rainboxlab.org).  

[*RxLaboratory*](http://rainboxlab.org) est une organisation ayant pour mission de développer, distribuer, promouvoir les logiciels libres et l'innovation dans la production audiovisuelle, ainsi que de faciliter l'entraide, le partage et la coopération entre tous les acteurs de ce domaine.

[*RxDocs*](http://docs.rainboxlab.org) est un travail collaboratif de vulgarisation scientifique, technique et artistique dans le domaine de la production audiovisuelle au sens large : image, vidéo, animation, son... Ces documents s'adressent à toute personne travaillant dans le domaine (phographie, vidéo, motion design, réalisation, animation, illustration, chef op, montage...)

!!! note
    Tous les noms suivis d'une astérisque* sont expliqués dans le [Glossaire](ZZ-vocabulaire.md)

## Introduction

Les méthodes et outils de gestion des couleurs dans le traitement de l'image (numérique) paraissent souvent compliqués et sont parfois mal compris des personnes travaillant dans la production audiovisuelle.

Les logiciels foisonnent de paramètres différents, et qui semblent varier beaucoup de l'un à l'autre.

Il en résulte que le traitement des couleurs n'est pas toujours maîtrisé ; on perd le contrôle sur les couleurs et on n'arrive plus à obtenir celles que l'on cherche dans le résultat final.

Ce domaine, certes très technique, n'est pourtant pas aussi compliqué qu'il n'y parait, et ce document a pour vocation d'expliquer et vulgariser les problématique liées à la gestion des couleurs dans le traitement d'image, et s'adresse à toute personne amenée à devoir s'en soucier dans la production d'images numériques[^1]. Le but n'est pas de faire de la théorie mais bien arriver rapidement à l'application concrète des explications, et nous limiterons les explications historiques et théoriques à leur strict nécessaire dans cette intention.

!!! note
    Concrètement, les espaces colorimétriques sont intrinsèquement liés aux formats d'encodage des données, et nous parlerons aussi en partie de ces différents formats.

Nous commencerons par une partie théorique, partant de la lumière, et la couleur, physique et étudiant comment nous la percevons, puis comment la l'enregistrer, la représenter et la reproduire dans un système numérique.

Puis nous aborderons l'aspect pratique, en expliquant dans des cas concrets quels sont les paramètres utiles et recommandés dans vos productions de tous types, et dans différentes applications.


!!! tip
    Ce document est évolutif ! Si vous y trouvez des erreurs, ou souhaitez y apporter des améliorations, [contribuez](http://docs.rxlab.guide/contribute.html) ou [signalez-le nous](https://rainboxlab.org/about/contact/) !

### I - Théorie

- A - [Qu'est ce que la couleur ?](A-definition.md)
    - A.1 - La couleur physique : la lumière visible
    - A.2 - Suivons une lumière : de l'émission à la réception
        - A.2.a - Emission, transmission, réflexion, réception
        - A.2.b - Décomposition de la lumière reçue
- B - [Petit inventaire et classification des couleurs](B-inventaire.md)
    - note : intro brève sur la perception
    - B.1 - Noir
    - B.2 - Lumières monochromatiques
    - B.3 - Pourpres
    - B.4 - Gris et blancs
        - B.4.a - Couleurs complémentaires
        - B.4.b - Perception
- C - [Perception de la lumière et des couleurs par l'être humain](C-perception.md)
    - B.1 - L'œil
    - B.2 - Le système nerveux
    - B.3 - Conséquences
        - B.3.a - Sur la luminosité et le contraste
        - B.3.b - Sur les teintes
- D - [Reproduction des couleurs](D-reproduction.md)
    - D.1 - Synthèse additive
    - D.2 - Synthèse soustractive
- E - [Retour sur les blancs : température](E-temperature.md)
    - E.1 - Corps noir
    - E.2 - Lieu planckien
    - E.3 - Balance des blancs
- F - [Représentation objective des couleurs](F-representation.md)
    - F.1 - Décomposer les couleurs
    - F.2 - Diagrammes de couleurs, *CIE XYZ* de 1931 et *CIE xyZ*
    - F.3 - Autres espaces de la *CIE*
- G - [Du réel au numérique](G-numerisation.md)
    - G.1 - Numérisation et stockage : passer en binaire
    - G.2 - Les Espaces colorimétriques
- H - [Qu’est ce qu’un espace colorimétrique ?](H-espace-colo.md)
    - H.1 - Ce qui définit un espace colorimétrique
        - H.1.a - Les primaires et le gamut
        - H.1.b - Le point blanc
        - H.1.c - La courbe de transfert
    - H.2 - Autres paramètres
        - H.2.a - Format de pixel
        - H.2.b - Profondeur
    - H.3 - Pourquoi différents espaces colorimétriques ?
- I - [Liste d'espaces colorimétriques](I-liste-espaces.md)
- J - [Liste des paramètres d'espaces colorimétriques](J-liste-params.md)
- K - [Format des pixels](K-pix-format.md)
    - K.1 - RGB et YUV
        - K.1.a - RGB
        - K.1.b - YUV
        - K.1.c - Comparaison
        - K.1.d - Autres
    - K.2 - YUV 4:4:4, 4:2:2, 4:2:0... Le sous-échantillonage de la chrominance
        - K.2.a - 4:4:4
        - K.2.b - 4:2:2
        - K.2.c - 4:2:0
    - K.3 - Profondeur de couleurs (bits, bpc et bpp)
        - K.3.a - En RGB
        - K.3.b - En YUV
        - K.3.c - Autres
    - K.4 - Full range / Limited / TV / PC ?
        - K.4.a - Full range / PC
        - K.4.b - Limited range / TV
        - K.4.c - Conséquence pratique
            - K.4.c.a - Encodage
            - K.4.c.b - Lecture et affichage
- L - [Courbes de transfert, espace linéaire et gamma](L-transfert.md)
- M - [Les LUTs](M-LUT.md)
    - M.1 - Description
    - M.2 - Utilisation
- N - [OpenColorIO et ACES](N-ocio.md)
    - N.1 - Applications compatibles
    - N.2 - ACES
        - N.2.a - Espaces colorimétriques ACES
            - N.2.a.a - ACES2065-1
            - N.2.a.b - ACEScg
            - N.2.a.c - ACEScc

### II - Pratique

!!! hint
    La liste des applications est classée par ordre alphabétique, avec le nom de l'éditeur en tête.

- A - [Mise en pratique : choisir ses espaces colorimétriques et formats](pratique.md)
    - A.1 - Théorie
        - A.1.a - Parcours d'une couleur
    - A.2 - Espace de travail (scene referred)
    - A.3 - Entrée
    - A.4 - Affichage
        - A.4.a - Espace de l'écran
        - A.4.b - Réglages et profils colorimétriques
        - A.4.c - Dans l'application
    - A.5 - Sélecteurs de couleur
    - A.6 - Sortie intermédaire
    - A.7 - Sortie finale
- B - [Quelques standards](standards.md)
- C - [Calibration des écrans](calibration.md)
    - C.1 - Introduction
    - C.2 - Environnement
    - C.3 - Calibration
        - C.3.a - Choix de l'espace colorimétrique de l'écran et de la calibration
        - C.3.b - Point blanc et luminosité
        - C.3.c - Calibration et application du profil colorimétrique
            - C.3.c.1 - Calibration
            - C.3.c.2 - Profil colorimétrique
- D - [Épreuvage (Soft-Proofing) et simulation](epreuvage.md)
- E - [Préparer la chaîne de fabrication](preparer.md)
    - E.1 - Animation 3D avec Blender, Filmic
        - E.1.a - Textures et autres images 2D
        - E.1.b - Rendu 3D
        - E.1.c - Compositing
            - E.1.c.a - Filmic et After Effects
        - E.1.d - Exports
    - E.2 - Animation 3D avec ACES
        - E.2.a - Textures et autres images 2D
        - E.2.b - Rendu 3D
        - E.2.c - Compositing
        - E.2.d - Exports
    - E.3 - Animation 2D
    - E.4 - Vidéos, prise de vues réelles et VFX
- F - [Concevoir une chaîne de fabrication avec *OpenColorIO*](ocio.md)
    - F.1 - Mise en place
    - F.2 - Anatomie d’une config OCIO
        - F.2.a - Métadonnées
        - F.2.b - Roles
        - F.2.c - Displays
- G - [Color management : Adobe After Effects](ae.md)
    - G.1 - Paramètres du projet - Espace de travail
    - G.2 - Interprétation des métrages - Espaces d'entrée
    - G.3 - Options de vues - Espace d'affichage et simulations
    - G.4 - Options d'export - Espaces de sortie
    - G.5 - *OCIO*
        - G.5.a - Introduction
        - G.5.b - Installer le plug-in *OCIO*
        - G.5.c - Désactiver la gestion des couleurs de After Effects
        - G.5.d - Organisation
        - G.5.e - Entrée et espace de travail
        - G.5.f - Sortie
        - G.5.g - Affichage
- H - [Color management : Adobe Premiere et Media Encoder](premiere.md)
    - H.1 - Espace de sortie
    - H.2 - Appliquer une LUT
    - H.3 - Espace de travail et affichage
- I - Color management : Adobe Photoshop
- J - [Gestion des couleurs : Autodesk Maya](maya.md)
- K - [Gestion des couleurs : Blender](blender.md)
    - K.1 - Configuration par défaut : *Filmic*
        - K.1.a - Rendu (scene referred) et affichage
        - K.1.b - Sortie
        - K.1.c - Entrée (textures)
    - K.2 - Chaîne de fabrication OCIO
        - K.2.a - Changer la configuration OCIO
    - K.3 - Utiliser *ACES*
        - K.3.a - Rendu (scene referred) et affichage
        - K.3.b - Entrée (textures)
- L - [Gestion des couleurs : Darktable](darktable.md)
    - L.1 - Entrée et espace de travail
    - L.2 - Sortie
    - L.3 - Épreuvage (Soft-Proofing)
- M - [Gestion des couleurs : DuME](dume.md)
    - M.1 - Espace de travail
    - M.2 - Entrée
    - M.3 - Sortie
    - M.4 - Pré-réglages
    - M.5 - LUT
    - M.6 - OCIO
- N - [Gestion des couleurs : Krita](krita.md)
    - N.1 - Espace de travail
    - N.2 - Affichage
        - N.2.a - Écran
        - N.2.b - Épreuvage (soft-proofing)
    - N.3 - Sélecteur de Couleurs
    - N.4 - Sortie
    - N.5 - *OCIO* dans Krita

### III - Annexes

- [En bref : le résumé pour ne pas se tromper](ZZ-bref.md)
- [Erreurs et incompréhensions courantes, résolution des problèmes](ZZ-erreurs.md)
- [Glossaire](ZZ-vocabulaire.md)
- [Dictionnaire français - anglais](ZZ-english.md)
- [Téléchargements et autres ressources](ZZ-download.md)

[^1]:
    Par souci de vulgarisation, nous nous permettrons certains raccourcis et approximations, le but étant la mise en application concrète et l'acquisition d'un savoir faire, et non pas l'étude scientifique du sujet.  
    Nous limiterons l'explication aussi aux éléments nécessaires à l'application concrète et la compréhension des paramètres ; nous éluderons les informations d'un intérêt purement historique, avec l'intention de garder ce guide clair et aussi concret que possible.  
    Nous invitons le lecteur à commencer par lire les articles [*Wikipedia*](https://fr.wikipedia.org/wiki/Couleur) pour approfondir le sujet et compléter les informations théoriques manquantes dans ce guide ; les ressources sur le sujet ne manquent pas.  
    Sur chaque page, nous ajoutons et complètons régulièrement les sources et références pour approfondir ce qui est expliqué.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/04/17)
