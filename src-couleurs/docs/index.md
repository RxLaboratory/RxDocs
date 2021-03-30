# Guide technique pour la gestion des couleurs dans la production audiovisuelle

## À propos

Ce guide fait partie d'une collection de documents gérés par [*RxLaboratory*](http://rainboxlab.org) : [***RxDocs***](http://docs.rainboxlab.org).  

[*RxLaboratory*](http://rainboxlab.org) est une organisation ayant pour mission de développer, distribuer, promouvoir les logiciels libres et l'innovation dans la production audiovisuelle, ainsi que de faciliter l'entraide, le partage et la coopération entre tous les acteurs de ce domaine.

[*RxDocs*](http://docs.rainboxlab.org) est un travail collaboratif de vulgarisation scientifique, technique et artistique dans le domaine de la production audiovisuelle au sens large : image, vidéo, animation, son... Ces documents s'adressent à toute personne travaillant dans le domaine (phographe, vidéaste, motion designer, réalisateur, animateur, illustrateur, chef opérateur, monteur...)

!!! warning
    Ce document est en cours d'écriture et encore loin d'être terminé ; si vous arrivez ici, considérez le bien comme un brouillon tout au long de votre lecture ! Tous les chapitres peuvent ne pas être encore écrits et la table des matières est toujours susceptible de changer.

## Introduction

Les méthodes et outils de gestion des couleurs dans le traitement de l'image (numérique) paraissent souvent compliqués et sont parfois mal compris des personnes travaillant dans la production audiovisuelle.

Les logiciels foisonnent de paramètres différents, et qui semblent varier beaucoup de l'un à l'autre.

Il en résulte que le traitement des couleurs n'est pas toujours maîtrisé ; on perd le contrôle sur les couleurs et on n'arrive plus à obtenir celles que l'on cherche dans le résultat final.

Ce domaine, certes très technique, n'est pourtant pas aussi compliqué qu'il n'y parait, et ce document a pour vocation d'expliquer et vulgariser les problématique liées à la gestion des couleurs dans le traitement d'image, et s'adresse à toute personne amenée à devoir s'en soucier dans la production d'images numériques[^1]. Le but n'est pas de faire de la théorie mais bien arriver rapidement à l'application concrète des explications, et nous limiterons les explications historiques et théoriques à leur strict nécessaire dans cette intention.

!!! note
    Concrètement, les espaces colorimétriques sont intrinsèquement liés aux formats d'encodage des données, et nous parlerons aussi en partie de ces différents formats.

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
- P - Les LUTs
- Q - OCIO, ACES
- R - Mise en pratique : choisir ses espaces colorimétriques
- RA - Calibration des écrans et leurs espaces colorimétriques
- RB - Color management : Adobe After Effects
- RD - Color management : Blender
- RF - Color management : DuME
- RG - Color management : Adobe Media Encoder
- RC - Color management : Krita
- RE - Color management : Darktable
- [Glossaire](ZZ-vocabulaire.md)
- [Dictionnaire français - anglais](ZZ-english.md)

À l'origine de ce document, cette vidéo enregistrée en direct avec [Motion Café](https://www.motion-cafe.com/) et [Nicolas Dufresne](http://duduf.com) : 

![YOUTUBE](m-lrOc2Fmck)

[^1]:
    Par souci de vulgarisation, nous nous permettrons certains raccourcis et approximations, le but étant la mise en application concrète et l'acquisition d'un savoir faire, et non pas l'étude scientifique du sujet.  
    Nous limiterons l'explication aussi aux éléments nécessaires à l'application concrète et la compréhension des paramètres ; nous éluderons les informations d'un intérêt purement historique, avec l'intention de garder ce guide clair et aussi concret que possible.  
    Nous invitons le lecteur à commencer par lire les articles [*Wikipedia*](https://fr.wikipedia.org/wiki/Couleur) pour approfondir le sujet et compléter les informations théoriques manquantes dans ce guide ; les ressources sur le sujet ne manquent pas.  
    Sur chaque page, nous ajoutons et complètons régulièrement les sources et références pour approfondir ce qui est expliqué.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/23)
