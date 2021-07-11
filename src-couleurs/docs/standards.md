# II.B - Quelques standards pour les fichiers

Voici une liste de quelques standards associés à des fichiers courants.

Toutes les possibilités techniques pour chaque type de fichiers ne sont pas listées ici, seules les plus courantes (et les plus standards) sont indiquées.

Si ces listes ne sont pas nécessairement des standards officiels, ces correspondances sont standardisées de fait par l'usage.

[TOC]

## Formats d'image (Jpeg, PNG, TGA, TIFF...)

- Espace : ***sRGB***
- Format de pixels : ***RGB***, ***Full Range***
- Profondeur :
    - *Jpeg* : ***8 bpc***
    - *PNG* : ***8 bpc***, ***16 bpc***
    - *TGA* : ***8 bpc***
    - *TIFF* : ***8 bpc***, ***16 bpc***[^1]

!!! hint
    On rencontre parfois des *PNG HDR* qui utilisent l'espace colorimétrique *Rec.2020*.

## OpenEXR

- Espace : ***RGB linéaire***, mais c'est aussi le format officiel pour ***ACES***, ou ***Filmic*** de *Blender*. C'est le seul format qui permet en réalité de stocker n'importe quelle couleur existante indépendamment de l'espace colorimétrique utilisé pour la représenter, et donc le format de prédilection pour travailler.
- Format de pixels :
    - ***RGB***, ***Full Range***
    - ***YUV 4:4:4*** ou équivalent à ***YUV 4:2:0*** avec l'option *Luma/Chroma*, ***Full Range***
- Profondeur :
    - ***8 bpc***
    - ***16 bpc*** (entier ou flottant)
    - ***32 bpc*** (entier ou flottant)

!!! hint
    Tout l'intérêt de l'*EXR* réside dans le fait qu'il peut stocker les couleurs dans un format *flottant* au lieu des *entiers* habituels ; il est donc inutile d'utiliser les versions *entier* de la profondeur. C'est grâce à ce format flottant que l'*EXR* peut stocker n'importe quelle donnée de couleur sans perte : il enregistre aussi les couleurs *en dehors* de l'espace de travail (dont les valeurs sont supérieures à `1`).

!!! note
    Il faut en réalité bien comprendre que l'espace colorimétrique dans un fichier *EXR* importe peu : le fichier stocke des données brutes, qui *ne sont pas* "clampées" (les valeurs supérieures à `1`, maximum théorique d'un espace colorimétrique, sont possibles) ; un fichier *EXR* peut donc stocker des couleurs *en dehors* du *gamut[\*](ZZ-vocabulaire.md)* et de la *luminosité[\*](ZZ-vocabulaire.md)* de son espace colorimétrique.

## MP4 h.264 / h.265 / AVCHD / HEVC et autres vidéos HD (2K) ou UHD (4K)

- Espace : ***Rec.709***, ***Rec.2020*** possible en *UHD* et plus (*4K*).
- Format de pixels : ***YUV 4:2:0*** ; bien que *4:2:2* et *4:4:4*, voire *RGB*, soient possibles, ils ne sont pas très standards et de nombreux lecteurs ne pourront pas les lire. ***Limited Range***
- Profondeur :
    - ***8 bits*** en *Rec.709*
    - ***10 bits*** en *Rec.2020* *UHD/4K*
    - ***12 bits*** en *Rec.2020* *4K HDR*

## SWF (et autres formats Web)

- Espace : ***sRGB***
- Format de pixels : ***RGB***, ***Full Range***
- Profondeur : ***8 bpc***

Attention, *Adobe After Effects* (certaines versions au moins), l'importe en *Rec.709* au lieu de *sRGB*. Il faut alors changer l'interprétation manuellement.

## QuickTime Animation / RLE

- Espace : ***Rec.709***
- Format de pixels : ***YUV 4:4:4***, ***Full Range***
- Profondeur : ***8 bpc***

----
Sources et références

[^1]:
    Le *TIFF* permet beaucoup d'espaces colorimétriques différents, notamment aussi le *CMYK* et *CIE Lab* par exemple, et aussi le format *YUV* de manière moins standard.

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/04/11)