# En bref : le résumé pour ne pas se tromper

Voici les indications à suivre pour une parfaite gestion des couleurs sans erreur !

## Formats de fichiers

### Exports intermédiaires, rendus, master et backup

Utiliser ***openEXR*** pour tout export non final !

- C'est un format sans perte
- Il peut stocker les informations de n'importe quelle couleur de n'importe quel espace colorimétrique
- Il propose des formats de compressions très efficaces (y compris quelques uns avec perte pour réduire encore la taille)

Profondeur de couleurs en *EXR* :

- Choisir ***16 bpc (float)*** si les étapes suivantes de fabrication utilisent le même *gamma[\*](ZZ-vocabulaire.md)* (linéaire ou non linéaire).
- Choisir *32 bpc* dans les autres cas.

Les autres options de profondeur ne sont utiles qu'en cas de problèmes de manque de ressources...

Compression de l'*EXR* :

[Lire notre document sur les compressions *EXR* ici !](http://docs.rainboxlab.org/)

### Export final et livraison

Se référer aux [espaces standards](standards.md) en fonction du format livré (si le client ne spécifie pas d'espace colorimétrique).

## Importation dans les applications

Il faut toujours bien savoir dans quel espace a été fabriqué/exporté le fichier importé. Si vous suivez ces recommandations, le fichier est toujours un fichier *openEXR*, et le plus souvent interprété par les applications comme *RGB Linéaire* par défaut.

Il peut être utile de noter l'espace colorimétrique utilisé directement dans le nom du fichier.

Se référerer aux [espaces standards](standards.md) pour les autres formats si vous ne connaissez pas leurs espaces colorimétriques.

## Affichage

Dans la grande majorité des cas, on affiche en ***sRGB*** sans autre simulation ni conversion. Seulement dans le cas où un écran utilise un autre espace d'affichage on pourra choisir un autre paramètre.

## Espaces de travail

Les espaces fournis par *ACES* sont extrêmement pratiques, et faciles à mettre en place en utilisant *OCIO*. Si *OCIO* n'est pas disponible sur l'application, les espaces *ACES* sont peut être quand même disponibles nativement ; en dernier recours on choisira un autre espace large propre à l'application.

### Dessin, textures, ...

- Soit l'espace du rendu 3D ou du logiciel de compositing et animation si possible.
- Sinon, *RGB Linéaire* ou un autre espace au *gamut[\*](ZZ-vocabulaire.md)* très large et linéaire.

Exports en ***openEXR*** ***16 bpc***. Lors de l'import dans d'autres applications, prendre bien soin de spécifier l'espace utilisé lors de la fabrication de l'image.

### Rendu 3D

- Sur *Blender* : ***Filmic*** ou bien ***ACEScg*** via une configuration *OCIO*
- En général : ***ACEScg***

Ou tout autre espace au *gamut[\*](ZZ-vocabulaire.md)* très large et linéaire.

Exports en ***openEXR*** ***16 bpc*** si le compositing est fait dans un espace linéaire.

### Compositing

En 3D, on essaie dans la mesure du possible d'utiliser l'espace colorimétrique du rendu 3D.

En 2D, on préfère un espace au *gamut[\*](ZZ-vocabulaire.md)* large et linéaire, ***ACEScg*** fait très bien l'affaire. En cas d'impossibilité, on pourra rester en *RGB Linéaire*.

Exports en ***openEXR*** ***16 bpc*** si le compositing n'est pas suivi d'une étape de correction colorimétrique dans un espace non linéaire, ***32 bpc*** dans les autres cas.

### Correction colorimétrique

On peut suivre le même raisonnement que pour le compositing, bien qu'il peut être plus pratique de travailler dans un esapce non linéaire. Dans ce cas ***ACEScc*** fait parfaitement l'affaire.

Exports en ***openEXR*** ***16 bpc*** pour l'archivage, et dans [l'espace standard](standards.md) du fichier pour la livraison.

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/05/23)