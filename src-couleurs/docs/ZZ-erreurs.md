# Erreurs et incompréhensions courantes, résolution des problèmes

[TOC]

## Erreurs courantes

### L'espace de travail doit être le même que le fichier à livrer.

C'est faux : lors du travail et du calcul des couleurs, il est nécessaire de travail dans un espace "plus grand" que la livraison ; en effet, la précision lors des calculs doit être supérieure à celle des données à obtenir. Pouvoir travailler dans un espace plus grand, aussi bien en *gamut[\*](ZZ-vocabulaire.md)* qu'en *profondeur[\*](ZZ-vocabulaire.md)* garantit un meilleur respect des couleurs lors de l'export.

Si l'espace de travail n'est pas plus grand que celui de sortie, des défauts risquent d'apparaitre, comme le "*banding*", l'apparition de bandes visibles dans les dégradés fins.

Si l'espace de travail est linéaire, sa profondeur doit aussi impérativement être supérieure à celle de l'espace de sortie, et c'est de toute façon recommandé même pour un espace de travail non-linéaire. Ainsi, pour une sortie *8 bpc* on préfère travailler au minimum en *16 bpc*, ou en *32 bpc* pour une sortie *8 bpc*.

### Il faut hoisir un espace d'affichage *Rec.709* parce que la sortie vidéo sera *Rec.709*.

L'espace colorimétrique d'affichage doit être celui de l'écran connecté (*sRGB* dans la majorité des cas en informatique).

Cet espace d'affichage sert à la conversion depuis l'espace de travail vers l'affichage de l'écran.

Lors de la sortie du fichier vidéo, une conversion sera faite depuis l'espace de travail vers l'espace de la vidéo, *Rec.709* dans cet exemple. Et c'est à la lecture de la vidéo qu'une nouvelle conversion a de nouveau lieu depuis le *Rec.709* vers le probable *sRGB* de l'écran.

## Résolution des problèmes

### Lors de la lecture d'une vidéo, les couleurs ne sont pas les mêmes que dans le logiciel qui a servi à la créer.

Voici les paramètres à vérifier :

1. Problème d'affichage dans le logiciel : l'espace colorimétrique d'affichage dans le logiciel doit correspondre à celui de l'écran (*sRGB* le plus souvent).
2. Problème de sortie : l'espace colorimétrique de sortie de la vidéo n'est pas standard ; vérifier l'espace utilisé en sortie de l'application.
3. Problème de lecture : la lecture vidéo est mal configurée sur la carte graphique (voir plus bas *Lorsqu'on lit une vidéo l'ordinateur (...) les couleurs paraissent "fades".*)

Si malgré tout une (très légère) variation persiste, elle peut être due à la conversion de *RGB* vers *YUV*, ou la compression du format vidéo notamment. Dans ce cas, il n'y a rien à faire...

### "Banding" : des "bandes" colorées apparaissent dans les dégradés fins

Le plus souvent, ce problème vient du fait que l'espace de travail de l'application est trop petit et que la *profondeur[\*](ZZ-vocabulaire.md)* est trop faible par rapport au format de sortie.

Voici ce qu'il faut contrôler et ce qui peut corriger le problème :

- La *profondeur* dans l'application doit être plus élevée que celle de la sortie (*16 bpc* minimum pour sortir en *8 bpc*, etc.), en particulier si l'espace de travail est linéaire.
- Si on ne peut pas augmenter la *profondeur* de travail, quand c'est possible un espace avec le même *gamma[\*](ZZ-vocabulaire.md)* que celui de sortie peut aider à réduire le problème.
- Choisir un espace de travail au *gamut[\*](ZZ-vocabulaire.md)* plus grand que celui de sortie.
- Si le dégradé fait partie d'un fichier importé, vérifier les points ci-dessus dans l'application qui a créé le fichier.
- Des problèmes de bandes peuvent apparaître en raison de la compression ; contrôler si ils sont toujours visibles dans des formats sans perte (*openEXR*, *PNG*, *Quicktime Animation*, etc.)
- Ajouter un très léger bruit ou grain, imperceptible, à l'image permet souvent "d'effacer" ce problème.

### Une frange, une ligne paraissant floue, apparait dans des zones colorées ou très contrastées, surtout sur des lignes verticales ou horizontales

Ce problème est généralement la conséquence du [sous-échantillonage de la chrominance](K-pix-format.md), lors du passage de *RGB* à *YUV*. Si possible, augmentez le sous-échantillonage (*4:4:4* ou *4:2:2* au lieu de *4:2:0* par exemple). Si ce n'est pas possible, et que l'image est fixe, il est parfois possible de déplacer l'image d'un pixel ou deux dans la vidéo pour corriger le problème.

### Lorsqu'on lit une vidéo l'ordinateur, dans la plupart des lecteurs et sur les vidéos des sites internet, les couleurs paraissent "fades". Les blancs sont gris clairs, les noirs sont gris foncés.

Il y a problabment une erreur de conversion de la gamme *[Full](K-pix-format.md)* vers *[Limited](K-pix-format.md)* ou inversement.

Dans les paramètres de la carte graphique, une option "video" permet souvent de changer ce paramètre ; il faut choisir *Full* si c'est un écran d'ordinateur qui est connecté, ou *Limited* si c'est une TV.

----
Sources et références

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/04/11)