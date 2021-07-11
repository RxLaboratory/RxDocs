![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/07/11)

# Préparer la gestion des couleurs d'une chaîne de fabrication

Maintenant que l'on connait les différents types d'espaces colorimétriques et à quels moments de la fabrication ils entrent en jeu, voyons comment préparer une chaîne de fabrication complète permettant de gérer efficacement les couleurs de la conception à la livraison.

La première étape est de lister tous les formats utilisés en entrée de la chaîne (vidéos ou images fournies et importées, images fabriquées) ainsi que tous les formats à livrer en fin de fabrication (vidéos et images finales).  
Suivant ces formats, et donc les espaces colorimétriques associés, nous pourrons choisir les différents espaces à utiliser pendant la fabrication, en gardant en tête que *qui peut le plus peut le moins* : le plus simple est de mettre en place une chaîne performante qui permette de livrer dans tous les formats.

Il faudra aussi bien prendre garde à ce que toutes les étapes qui modifient l'image utilisent un espace colorimétrique *plus grand* que celui de livraison : aussi bien avec un *gamut[\*](ZZ-vocabulaire.md)* plus large qu'une profondeur plus grande.

Nous chercherons aussi à limiter le nombre d'espaces utilisés (et ainsi limiter les erreurs possibles et les décalages dus aux conversions). La préparation de la chaîne consiste donc le plus souvent à choisir l'espace de travail le plus adéquat en fonction des formats d'entrée et surtout de sortie, et supporté par les différentes applications.

Voici quelques exemples de choix possibles, compatibles avec une qualité cinéma (et donc tous types de production).

## Animation 3D avec Blender, Filmic

Blender fournit un espace de travail efficace par défaut pour les rendus 3D : *Filmic*. Cet espace étant configuré en utilisant *OCIO*, il est assez facile de créer une chaîne de fabrication autour de cet espace.

Par simplicité, les textures pourront elles être fabriquées dans un espace *RGB Linéaire* standard.

Comme dans la plupart des chaînes, nous pouvons utiliser ***openEXR*** comme format d'image intermédiaire, aussi bien pour les textures que pour les rendus intermédaires ou le *master* final.

*![Schema Pipe Blender](img/blender-workflow.svg)*

| Étape | Type | Espace colorimétrique / Format | Notes |
| --- | --- | --- | --- |
| Toutes | Sélecteurs de couleurs | *sRGB* (celui de l'écran) | Il est toujours plus pratique, et plus sûr, de choisir ses couleurs dans l'espace de l'écran non linéaire. |
| Toutes | Affichage | Espace de l'écran (*sRGB*) | On affiche toujours les couleurs dans l'espace de l'écran. |
| Textures | Espace de travail | *RGB Linéaire* / *16 bpc* | Si l'application ne gère pas *OCIO[\*](ZZ-vocabulaire.md)* |
| Textures | Espace de travail | *Filmic* / *16 bpc* | |
| Textures |Sortie | Espace de travail / *openEXR 16 bpc* | |
| 3D | Espace de travail | *Filmic* | |
| 3D | Sortie | *Filmic* / *openEXR 16 bpc* | |
| Compositing | Espace de travail | *Filmic* / *32 bpc* | En cas de problème de performances et si il n'y a pas d'étape de correction colorimétrique qui suit le compositing, on pourra éventuellement travailler avec *16 bpc*. |
| Compositing | Espace de travail | *RGB Linéaire* / *32 bpc* | Si l'application ne gère pas *OCIO*.<br />Il faudra alors appliquer une *LUT[\*](ZZ-vocabulaire.md) Filmic* aux métrages importés. |
| Compositing | Épreuvage écran | Espace de la sortie finale (*Rec.709* par exemple) | En cas de doute, il vaut mieux ne pas configurer d'épreuvage et bien rester sur l'espace de l'écran pour l'affichage. |
| Compositing | Sortie finale | Standard en fonction du format : *Rec.709*, *Rec.2020*... | |
| Compositing | Master / Archivage | *RGB Linéaire* / *openEXR 16 bpc* | Il est probablement plus sûr d'archiver les images dans un espace le plus standard possible, mais sans perdre de qualité. |
| Compositing | Sortie pour correction colorimétrique | *RGB Linéaire* / *openEXR 32bpc* | Les *32 bpc* sont nécessaires pour éviter de perdre en qualité lors de la conversion vers un espace probablement non-linéaire pour la correction colorimétrique. |

### Textures et autres images 2D

Quel que soit l'application (*Substance Painter*, *Substance Designer*, *Krita*, *Adobe Photoshop*, *The Foundry Mari*...), les textures couleurs pourront être créées en ***RGB Linéaire*** ; on fera simplement bien attention à avoir au minimum *16 bpc*.

Lors de l'import dans *Blender*, les images seront interprétées en *RGB Linéaire*, les textures de données (*normal maps*, *metalness*, etc) en *Raw*, sans conversion.

Il est aussi possible de travailler directement les textures dans l'espace *Filmic* si l'application prend en charge *OCIO[\*](ZZ-vocabulaire.md)* en chargeant simplement la configuration *OCIO* de *Blender*, ou en utilisant un profil *ICC* correspondant au *Filmic*, tels que ceux que nous proposons [en téléchargement ici](media/filmic-luts.zip).

### Rendu 3D

Le rendu 3D dans Blender sera donc fait avec le ***Filmic*** par défaut. On peut choisir différent niveaux de contrastes ; c'est un choix artistique à faire au moment de travailler la lumière et le rendu, il faudra simplement bien ré-appliquer le même au compositing.

### Compositing

Si le compositing est fait dans *Blender*, il utilise automatiquement le même espace de travail, donc ***Filmic*** (avec le choix de contraste), et il n'y a rien à configurer.

En cas de compositing dans une application tierce, le plus simple est d'utiliser *OCIO* et de charger la configuration *OCIO* de *Blender* pour pouvoir appliquer à nouveau l'espace *Filmic* (et le choix de contraste) sur les fichiers *openEXR* rendus par *Blender* et importés dans l'application de compositing.

!!! warning
    Lors du rendu *openEXR*, les images sont linéaires et ne comportent pas d'information d'espace colorimétrique : il faudra ré-appliquer l'espace *Filmic* dans le logiciel de compositing. Lors du rendu dans tout autre format, *Blender* effectue une conversion vers l'espace par défaut du format (*sRGB* en *PNG* par exemple).

#### Filmic et After Effects

Pour le cas particulier d'*After Effects*, où la mise en place d'*OCIO* est laborieuse, il peut être plus simple d'utiliser une *LUT[\*](ZZ-vocabulaire.md)* de conversion *Filmic*... Nous fournissons [une déclinaison de cette *LUT* ici](ZZ-download.md) (pour chaque variation de contraste de *Filmic* disponible). Il faudra alors choisir un autre espace de travail dans le projet *After Effects*, et utiliser un effet de conversion d'espace depuis *RGB Linéaire* vers l'espace du projet après l'application de la *LUT*.

*![Capture After Effects effets Filmic]()*  
*Exemple d'effets à utiliser sur un fichier* openEXR Filmic *dans* After Effects *avec un espace de travail* ACEScg.

### Exports

Depuis le logiciel de compositing, on pourra alors simplement exporter des fichiers *openEXR* ***RGB Linéaire*** comme *master* ou *backup*, et directement des fichiers vidéo dans l'espace colorimétrique standard qui leur correspond pour les exports finaux.

## Animation 3D avec *ACES*

La plupart des logiciels 3D utilsant *OCIO[\*](ZZ-vocabulaire.md)*, tous pourront utiliser ***ACEScg***[\*](ZZ-vocabulaire.md) comme espace pour le rendu.

Comme dans la plupart des chaînes, nous pouvons utiliser ***openEXR*** comme format d'image intermédiaire, aussi bien pour les textures que pour les rendus intermédaires ou le *master* final.

Il est à noter que la configuration *ACES[\*](ZZ-vocabulaire.md)* habituellement utilisée, fournie par *OCIO*, comprend une très longue liste d'espaces colorimétriques, notamment ceux de divers fabricants de caméras. Si on n'a pas besoin de tous ces formats, sur une production d'animation n'incluant pas de prise de vues, on peut assez facilement retirer tous ces espaces de la configuration. [Nous fournissons ici](ZZ-download.md) une telle version adaptée de *ACES*, plus pratique dans les production d'animation.

*![Schema Pipe ACES](img/aces-workflow.svg)*

| Étape | Type | Espace colorimétrique / Format | Notes |
| --- | --- | --- | --- |
| Toutes | Sélecteurs de couleurs | *sRGB* (celui de l'écran) | Il est toujours plus pratique, et plus sûr, de choisir ses couleurs dans l'espace de l'écran non linéaire. |
| Toutes | Affichage | Espace de l'écran (*sRGB*) | On affiche toujours les couleurs dans l'espace de l'écran. |
| Textures | Espace de travail | *RGB Linéaire* / *16 bpc* | Si l'application ne gère pas *OCIO[\*](ZZ-vocabulaire.md)* |
| Textures | Espace de travail | *ACEScg* / *16 bpc* | |
| Textures | Sortie | Espace de travail / *openEXR 16 bpc* | |
| 3D | Espace de travail | *ACEScg* | |
| 3D | Sortie | *ACEScg* / *openEXR 16 bpc* | |
| Compositing | Espace de travail | *ACEScg* / *32 bpc* | En cas de problème de performances et si il n'y a pas d'étape de correction colorimétrique qui suit le compositing, on pourra éventuellement travailler avec *16 bpc*. |
| Compositing | Épreuvage écran | Espace de la sortie finale (*Rec.709* par exemple) | En cas de doute, il vaut mieux ne pas configurer d'épreuvage et bien rester sur l'espace de l'écran pour l'affichage. |
| Compositing | Sortie finale | Standard en fonction du format : *Rec.709*, *Rec.2020*... | |
| Compositing | Master / Archivage | *RGB Linéaire* / *openEXR 16 bpc* | Il est probablement plus sûr d'archiver les images dans un espace le plus standard possible, mais sans perdre de qualité. |
| Compositing | Sortie pour correction colorimétrique | *ACEScg* / *openEXR 32bpc* | Les *32 bpc* sont nécessaires pour éviter de perdre en qualité lors de la conversion vers un espace probablement non-linéaire pour la correction colorimétrique (qui serait faite avec *ACEScc* dans le cas d'une chaîne utilisant *ACES* tout du long). |

### Textures et autres images 2D

Quel que soit l'application (*Substance Painter*, *Substance Designer*, *Krita*, *Adobe Photoshop*, *The Foundry Mari*...), les textures couleurs pourront être créées en ***RGB Linéaire*** ; on fera simplement bien attention à avoir au minimum *16 bpc*.

Il est aussi possible, mais pas pour toutes les applications, de travailler directement dans *ACEScg* ; il faudra dans ce cas être vigilant lors de l'import dans le logiciel 3D de bien spécifier le bon espace, *RGB linéaire* ou *ACEScg* (ou encore *raw/data* pour les maps de données telles que les *normal maps*, *speculaires*, etc.)

L'intérêt de travailler directement les textures en *ACEScg* est de limiter les conversions et éviter les risques de décalage des couleurs qui en découlent.

### Rendu 3D

Le rendu 3D se fait dans ***ACEScg***

### Compositing

Pour le compositing, le plus simple est d'utiliser *OCIO* et de charger la configuration *ACES* pour pouvoir appliquer à nouveau l'espace ***ACEScg*** sur les fichiers *openEXR* rendus et comme espace de travail.

Pour le cas particulier d'*Adobe After Effects*, il n'y a pas besoin d'utiliser *OCIO*, *ACEScg* est fourni nativement.

### Exports

Depuis le logiciel de compositing, on pourra alors simplement exporter des fichiers *openEXR* ***RGB Linéaire*** comme *master* ou *backup*, et directement des fichiers vidéo dans l'espace colorimétrique standard qui leur correspond.

## Animation 2D

En animation 2D, il est moins primordial d'utiliser un espace de travail au *gamut[\*](ZZ-vocabulaire.md)* large. Bien qu'il soit recommandé de suivre les mêmes méthodes qu'en 3D, certains logiciels d'animation ne le permettront pas et on pourra donc se rabattre sur une chaîne *RGB Linéaire* par exemple.

Il faudra simplement bien utiliser le plus possible des fichiers *openEXR* tout le long de la chaîne pour être sûr de garder une qualité suffisante. Là encore, si pour des décors détaillés il est important de rester sur ce format et un espace linéaire à au moins *16 bpc*, dans le cas de l'animation si elle est moins détaillée ou utilise de simples aplats de couleurs, on pourra se rabattre sur des espaces plus courants *sRGB* et des formats *PNG* (avec *16 bpc* si possible) ou vectoriels.

| Étape | Type | Espace colorimétrique / Format | Notes |
| --- | --- | --- | --- |
| Toutes | Sélecteurs de couleurs | *sRGB* (celui de l'écran) | Il est toujours plus pratique, et plus sûr, de choisir ses couleurs dans l'espace de l'écran non linéaire. |
| Toutes | Affichage | Espace de l'écran (*sRGB*) | On affiche toujours les couleurs dans l'espace de l'écran. |
| Décors | Espace de travail | *RGB Linéaire* / *16 bpc* | |
| Décors | Sortie | *RGB Linéaire* / *openEXR 16 bpc* | |
| Animation | Espace de travail | *RGB Linéaire* / *16 bpc* | |
| Animation | Espace de travail | *sRGB* / *16 bpc* | Si l'application ne permet pas de travailler en linéaire. |
| Animation | Espace de travail | *sRGB* / *8 bpc* | En cas de sortie vectorielle. |
| Animation | Sortie | *RGB Linéaire* / *openEXR 16 bpc* | |
| Animation | Sortie | *sRGB* / *PNG 16 bpc* | Si l'application ne permet pas d'exporter en *EXR*. |
| Animation | Sortie | *sRGB* / *8 bpc* | En cas de sortie vectorielle. |
| Compositing | Espace de travail | *ACEScg* / *32 bpc* | Ou tout autre espace au *gamut[\*](ZZ-vocabulaire.md)* large afin de pouvoir exporter dans tous types de formats, y compris cinéma. |
| Compositing | Épreuvage écran | Espace de la sortie finale (*Rec.709* par exemple) | En cas de doute, il vaut mieux ne pas configurer d'épreuvage et bien rester sur l'espace de l'écran pour l'affichage. |
| Compositing | Sortie finale | Standard en fonction du format : *Rec.709*, *Rec.2020*... | |
| Compositing | Master / Archivage | *RGB Linéaire* / *openEXR 16 bpc* | Il est probablement plus sûr d'archiver les images dans un espace le plus standard possible, mais sans perdre de qualité. |
| Compositing | Sortie pour correction colorimétrique | *RGB Linéaire* / *openEXR 32bpc* | Les *32 bpc* sont nécessaires pour éviter de perdre en qualité lors de la conversion vers un espace probablement non-linéaire pour la correction colorimétrique. |

## Vidéos, prise de vues réelles et VFX

Une chaîne incluant de la vidéo pourra être très semblable à une chaîne de fabrication 3D, à plus forte raison si elle implique des rendus 3D.

Simplement, il faudra être vigilant et importer les photos et vidéos en spécifiant le bon espace colorimétrique, celui de la caméra qui a capturé les images, dès leur importation dans le logiciel qui les utilise.

*OCIO* et *ACES* contiennent une grande sélection d'espaces colorimétriques de divers modèles de caméra, et le plus simple est souvent donc d'utiliser une chaîne avec *ACES* pour la production, comme décrite plus haut.
