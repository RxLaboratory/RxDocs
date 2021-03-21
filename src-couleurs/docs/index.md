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
    - B.1 - Lumières monochromatiques
    - B.2 - Gris et Blanc
    - B.3 - Noir
    - B.4 - Pourpre
    - B.5 - Description de toute couleur :
        - B.5.a - Intensité
        - B.5.b - Longueur d'onde dominante
        - B.5.c - Pureté d'excitation
- C - [Perception de la lumière et des couleurs par l'être humain](C-perception.md)
    - B.1 - L'œil
    - B.2 - Le système nerveux
    - B.3 - Conséquences
        - B.3.a - Sur la luminosité et le contraste
        - B.3.b - Sur les teintes
- D - [Retour sur les blancs : température](D-temperature.md)
    - D.1 - Corps noir
    - D2 - Lieu planckien
- E - [Représentation objective des couleurs](E-representation.md)
    - E.1 - Décomposer les couleurs
    - E.2 - Diagrammes de couleurs, *CIE XYZ* de 1931 et *CIE xyZ*
    - E.3 - Autres espaces de la *CIE*
- F - [Du réel au numérique](F-numerisation.md)
    - F.1 - Numérisation et stockage : passer en binaire
    - F.2 - Les Espaces colorimétriques
- G - [Qu’est ce qu’un espace colorimétrique ?](G-espace-colo.md)
    - G.1 - Ce qui définit un espace colorimétrique
        - G.1.a - Les primaires
        - G.1.b - Le point blanc
        - G.1.c - La courbe de transfert
    - G.2 - Pourquoi différents espaces colorimétriques ?
- H - [Liste d'espaces colorimétriques](H-liste-espaces.md)
- I - [Liste des paramètres d'espaces colorimétriques](I-liste-params.md)
- J - [RGB et YUV](J-rgb-yuv.md)
    - J.1 - RGB
    - J.2 - YUV
    - J.3 - Comparaison
- K - [YUV 444, 422, 421, 420...](K-444.md)
- Full range / Limited / TV / PC
- X - [Profondeur (bpc)](XX-bpc.md)
- X - [Courbes de transfert, espace linéaire et gamma](XX-transfert.md)
- Les LUTs
- Calibration des écrans et leurs espaces colorimétriques
- OCIO, ACES
- Color management : After Effects
- Color management : Krita
- Color management : Blender
- [Glossaire](ZZ-vocabulaire.md)

À l'origine de ce document, cette vidéo enregistrée en direct avec [Motion Café](https://www.motion-cafe.com/) et [Nicolas Dufresne](http://duduf.com) : 

![YOUTUBE](m-lrOc2Fmck)

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/21)

[^1]:
    Par souci de vulgarisation, nous nous permettrons certains raccourcis et approximations, le but étant la mise en application concrète et l'acquisition d'un savoir faire, et non pas l'étude scientifique du sujet.  
    Nous limiterons l'explication aussi aux éléments nécessaires à l'application concrète et la compréhension des paramètres ; nous éluderons les informations d'un intérêt purement historique, avec l'intention de garder ce guide clair et aussi concret que possible.  
    Nous invitons le lecteur à commencer par lire les articles [*Wikipedia*](https://fr.wikipedia.org/wiki/Couleur) pour approfondir le sujet et compléter les informations théoriques manquantes dans ce guide ; les ressources sur le sujet ne manquent pas.  
    Sur chaque page, nous ajoutons et complètons régulièrement les sources et références pour approfondir ce qui est expliqué.
