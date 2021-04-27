# I.N - OpenColorIO et ACES

[*OpenColorIO*](https://opencolorio.org/)[^1], souvent abrégé en *OCIO*, est une librairie pour les développeurs (et non pas pour les utilisateurs) libre et open source, facilitant la gestion des couleurs. Elle aspire à être utilisée par toutes les applications en production d'image numérique, facilitant ainsi la gestion des couleurs sur toute la chaîne de production : en devenant standard, elle permet de partager la configuration des couleurs tout au long de la chaîne de production et en avoir la maîtrise à toutes les étapes, de manière aussi simple que possible.

[TOC]

Les applications utilisant *OCIO* partagent donc toutes le même format de configuration de la gestion des couleurs, un fichier nommé `congig.ocio`.

On peut ainsi facilement partager la même gestion des couleurs à travers toute la chaîne de production, définissant les espaces de travail, les espaces des fichiers, ceux des sélecteurs de couleur, ceux de l'affichage, de la sortie finale... *Cf.* Chapitre *[II.A - Mise en Pratique](2A-pratique.md)*.

!!! note
    *OpenColorIO* apporte aussi le support d'un grand nombre de format de *LUTs[*](ZZ-vocabulaire.md)*, réglant le problème de compatibilité des *LUTs* avec les applications.

Plusieurs [configurations *OCIO* sont fournies](https://opencolorio.readthedocs.io/en/latest/quick_start/downloads.html) à titre d'exemple et pouvant déjà être utilisées en production telles quelles, notamment la configuration *ACES* (lire plus bas) ou celle de *Sony Pictures Imageworks* pour l'animation (*spi-anim*) et les effets spéciaux (*spi-vfx*).

## N.1 - Applications compatibles

Voici une liste alphabétique (non exhaustive) des principales applications utilisant *OpenColorIO*, établie début 2021[^2].

|Application|Usage|Notes|
|----|----|----|
|Adobe After Effects|Compositing|Support partiel [via un plugin](https://fnordware.blogspot.com/2012/05/opencolorio-for-after-effects.html).|
|Autodesk Arnold|Moteur de rendu||
|Blender, Cycles, Eevee|3D, Moteur de rendu, compositing||
|DuME|Encodeur|Support partiel via des LUTs|
|SideFX Houdini|3D||
|Krita|Dessin||
|The Foundry Mari|Textures||
|Autodesk Maya|3D||
|Mocha Pro|Tracking||
|Modo|3D||
|The Foundry Nuke|Compositing||
|Adobe Photoshop|Dessin|Support partiel via des profils ICC|
|Substance Designer|Textures||
|Unreal Engine|Moteur temps réel||
|V-Ray|Moteur de rendu|

!!! hint
    Toute application pouvant utiliser des *LUTs[*](ZZ-vocabulaire.md)* peut être intégrée à une chaîne de production utilisant *OCIO*, en exportant les *LUTs* nécessaire à la production depuis *OpenColorIO*, soit via l'outil en ligne de commande fourni, soit en utilisant l'encodeur de médias *[DuME](https://rainboxlab.org/tools/dume/)* qui peut créer ces *LUTs*.

## N.2 - ACES

*ACES* signifie *Academy Color Encoding System*, et a pour but d'être un standard d'échange et de gestion des couleurs pour l'imagerie numérique ; il vise à simplifier la gestion des couleurs et maintenir la plus grande fidélité dans toutes les chaines de production. Il est gratuit et open source, et utilise *OpenColorIO* dans son fonctionnement.

*ACES* consiste en fait en :

- 5 Espaces colorimétriques conçus pour différents usages pour la chaîne de production.
- Une configuration *OpenColorIO*, avec les *LUTs* nécessaires à son usage partout.
- Une série de recommandations sur le calcul et le stockage des couleurs.

Voir le chapitre *[I - Liste d'espaces colorimétriques](I-liste-espaces.md)* pour les détails techniques concernant les différents espaces colorimétriques de *ACES*.

Les principales recommandations sur le stockage sont :

- Utiliser le format de fichier *openEXR*.
- Enregistrer dans des espaces colorimétriques larges, englobant tous les autres. L'espace idéal englobant toutes les couleurs visibles étant *ACES2065-1*.

### N.2.a - Espaces colorimétriques ACES

Les différents espaces proposés par *ACES* correspondent à différents besoins et usages précis. Voici les plus importants.

#### N.2.a.a - ACES2065-1

L'espace *ACES2065-1* est l'espace au *gamut[\*](ZZ-vocabulaire.md)* le plus large, englobant l'intégralité des couleurs visibles, et sa courbe de transfert est linéaire.

Il est de fait le plus complet des espaces, son but étant de pouvoir stocker les couleurs sans perte, et compatible avec tous les espaces passés et futurs.

Comme tous les espaces linéaires, il nécessite une profondeur d'au minimum *16 bpc*, avec une préférence pour *32 bpc* compatible avec son but de représenter efficacement n'importe quelle couleur visible.

Il est en réalité peu utilisé, représentant *trop* de données, son intérêt étant surtout théorique.

#### N.2.a.b - ACEScg

L'espace *ACEScg* (pour *computer generated (images)*) est dérivé de *ACES2065-1*, mais utilise des *primaires[\*](ZZ-vocabulaire.md)* différentes, réduisant son *gamut[\*](ZZ-vocabulaire.md)*, qui reste cependant très large, tout en étant plus pratique que *ACES2065-1*.

C'est un espace linéaire, conçu et idéal pour les rendus 3D et le compositing. Avec son *gamut* très large, et la configuration *OCIO* associée permettant de générer efficacement des images dans des espaces standards plus réduits, il permet une synthèse des couleurs plus fidèles à la réalité et la vision humaine, notamment dans les hautes lumières.

*![Comparaison d'un rendu linéaire RGB et ACEScg](img/aces.svg)*  
*Comparaison entre un rendu utilisant les primaires RGB et ACEScg[^3]*

La recommandation *ACES* est d'utiliser cet espace dans la production d'animation et d'images de synthèse, autant comme espace de travail dans les applications, que dans le stockage dans le format de fichier *openEXR*. Ainsi, depuis le rendu et la génération des images jusque la livraison finale, aucune conversion de données n'est à faire (sauf pour l'affichage évidemment).

#### N.2.a.c - ACEScc

L'espace *ACEScc* (pour *color correction*) est semblable à *ACEScg* sauf que sa courbe de transfert n'est pas linéaire.

Cette courbe de transfert en fait un mauvais espace pour les rendus et la génération d'images, mais le rend beaucoup plus pratique pour la retouche des couleurs.

*![Comparaison sélecteur de couleur linéaire / sRGB](img/color-picker.svg)*

Il est donc recommandé pour le travail de correction colorimétrique et retouches sur des images filmées, ou en fin de production d'animation pour les retouches colorimétriques finales.

----
Sources et références

- [Site officiel de *OpenColorIO*](https://opencolorio.org/)

[^1]:
    Étant libre et open source, de nombreux studios contribuent au développement de *OpenColorIO*, géré par l'*ASWF, Academy Software Foundation* aux États-Unis.

[^2]:
    Une liste complète est disponible sur le site de *[OpenColorIO](https://opencolorio.org/)*.

[^3]:
    Cette comparaison est faite sous *Blender* ; *ACES* n'est pas inclus dans *Blender*, mais il est facile de l'utiliser grâce à *OpenColorIO*. Bien que *ACES* ne soit pas fourni de base avec *Blender*, les rendus *Blender* sont quand même bien meilleurs que sur cet exemple : *Blender* utilise une *LUT* nommée *Filmic* qui améliore grandement la conversion de l'espace *linéaire RGB* au *sRGB* de l'image finale (désactivée pour cet exemple), mais restant tout de même moins performant en couleurs que le résultat utilisant la configuration *ACES* de *OCIO*.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/04/03)