# Guide technique à la gestion des couleurs dans la production audiovisuelle

## À propos

Ce guide fait partie d'une collection de documents gérés par [*RxLaboratory*](http://rainboxlab.org): [***RxDocs***](http://docs.rainboxlab.org).  

*RxLaboratory* est une organisation ayant pour mission de développer, distribuer, promouvoir les logiciels libres et l'innovation dans la production audiovisuelle, ainsi que de faciliter l'entraide, le partage et la coopération entre tous les acteurs de ce domaine.

*RxDocs* est un travail collaboratif de vulgarisation scientifique, technique et artistique dans le domaine de la production audiovisuelle au sens large : image, vidéo, animation, son... Ces documents s'adressent à toute personne travaillant dans le domaine (phographe, vidéaste, motion designer, réalisateur, animateur, illustrateur, chef opérateur, monteur...)

## Introduction

Les méthodes et outils de gestion des couleurs dans le traitement de l'image (numérique) paraissent souvent compliqués et sont parfois mal compris des personnes travaillant dans la production audiovisuelle.

Les logiciels foisonnent de paramètres différents, et qui semblent varier beaucoup de l'un à l'autre.

Il en résulte que le traitement des couleurs n'est pas toujours maîtrisé ; on perd le contrôle sur les couleurs et on n'arrive plus à obtenir celles que l'on cherche dans le résultat final.

Ce domaine, certes très technique, n'est pourtant pas aussi compliqué qu'il n'y parait, et ce document a pour vocation d'expliquer et vulgariser les problématique liées à la gestion des couleurs dans le traitement d'image, et s'adresse à toute personne amenée à devoir s'en soucier dans la production d'images numériques[^1]. Le but n'est pas de faire de la théorie mais bien arriver rapidement à l'application concrète des explications, et nous limiterons les explications historiques et théoriques à leur strict nécessaire dans cette intention.

!!! note
    Concrètement, les espaces colorimétriques sont intrinsèquement liés aux formats d'encodage des données, et nous parlerons aussi en partie de ces différents formats.

- A - [Qu'est ce que la couleur ?](01-definition.md)
    - A.1 - La couleur physique : la lumière visible
- B - [Perception de la lumière et des couleurs par l'être humain](02-perception.md)
    - B.1 - L'œil
    - B.2 - Le système nerveux
    - B.3 - Conséquences
        - B.3.a - Sur la luminosité et le contraste
        - B.3.b - Sur les teintes
- C - [Représentation objective des couleurs](03-representation.md)
    - C.1 - Décomposer les couleurs
    - C.2 - Diagrammes de couleurs, *CIE XYZ* de 1931 et *CIE xyZ*
    - C.3 - Autres espaces de la *CIE*
- D - [Du réel au numérique](04-numerisation.md)
    - D.1 - Numérisation et stockage : passer en binaire
    - D.2 - Les Espaces colorimétriques
- E - [Qu’est ce qu’un espace colorimétrique ?](05-espace-colo.md)
    - E.1 - Ce qui définit un espace colorimétrique
        - E.1.a - Les primaires
        - E.1.b - Le point blanc
        - E.1.c - La courbe de transfert
    - E.2 - Pourquoi différents espaces colorimétriques ?
- F - [Liste d'espaces colorimétriques](06-liste-espaces.md)
- Pourquoi utiliser différents espaces colorimétriques ?
- Le blanc
- Le gamma
- Calibration des écrans et leurs espaces colorimétriques
- X - [Profondeur (bpc)](XX-bpc.md)
- X - [Courbes de transfert, espace linéaire et gamma](XX-transfert.md)
- RGB vs YUV, 444, 422, 420, c’est quoi ça ?
- Full range / Limited / TV / PC
- Color management : After Effects
- Color management : Krita
- Color management : Blender
- OCIO, ACES

À l'origine de ce document, cette vidéo enregistrée en direct avec [Motion Café](https://www.motion-cafe.com/) et [Nicolas Dufresne](http://duduf.com) : 

![YOUTUBE](m-lrOc2Fmck)

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/14)

[^1]:
    Par souci de vulgarisation, nous nous permettrons certains raccourcis et approximations, le but étant la mise en application concrète et l'acquisition d'un savoir faire, et non pas l'étude scientifique du sujet.  
    Nous limiterons l'explication aussi aux éléments nécessaires à l'application concrète et la compréhension des paramètres ; nous éluderons les informations d'un intérêt purement historique, avec l'intention de garder ce guide clair et aussi concret que possible.  
    Nous invitons le lecteur à commencer par lire les articles [*Wikipedia*](https://fr.wikipedia.org/wiki/Couleur) pour approfondir le sujet et compléter les informations théoriques manquantes dans ce guide ; les ressources sur le sujet ne manquent pas.  
    Sur chaque page, nous ajoutons et complètons régulièrement les sources et références pour approfondir ce qui est expliqué.
