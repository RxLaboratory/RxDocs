# Glossaire

!!! tip
    La plupart des applications et des ressources disponibles étant plutôt en anglais, nous proposons dans les pages qui suivent un petit dictionnaire français-anglais contenant ce vocabulaire.

Classement alphabétique.

- ***ACES*** : *Academy Color Encoding System* est un standard d'échange, de gestion des couleurs pour l'imagerie numérique. Il a pour but de simplifier la gestion des couleurs en maintenant la fidélité des couleurs tout au long de la chaîne de production. Le standard est gratuit et open source et de nombreuses entreprises contribuent à son développement. Il utilise notamment la librairie logicielle *OCIO*\*.

- ***Alpha*** : quatrième *canal\** parfois ajouté aux pixels d'une vidéo pour stocker l'information de transparence en plus de la couleur. On note en général dans ce cas les canaux *RGBA* et *YUVA*, et dans le cas du *YUVA* une quatrième valeur est parfois ajoutée au sigle du *[sous-échantillonage de la chromiance](K-pix-format.md)* : *4:4:4:4*, *4:2:2:4*, etc.

- ***Bit*** : unité de base à la fois du calcul informatique binaire et de stockage. Un *bit* est soit 0 soit 1. 8 bits forment un *octet*, une suite de huit 0 ou 1. À ne pas confondre avec le *Byte*. Noté `b` (alors que *Byte* est noté `B` et octet est noté `o`).

- ***Byte*** : plus petite unité de mémoire utilisable sur un système donné (prononcé /baɪt/) ; généralement formé de 8 *bits* et (uniquement dans ce cas mais pas nécessairement) équivalent à un *octet*. En anglais, on utilise le mot *Byte* pour tous les systèmes où le *Byte* représente effectivement un *octet* alors qu'en français on préfère le mot *octet*. Noté `B` (à ne pas confondre avec le `b` de *bit*).

- ***Canal*** (de couleur): voir *couche* (de couleur).

- ***CIE*** : *La Commission internationale de l'éclairage* est une organisation internationale dédiée à la lumière, l'éclairage, la couleur et les espaces de couleur. Elle a été fondée à Berlin en 1913 et est actuellement basée à Vienne en Autriche.  Note : l'acronyme français *CIE* est celui utilisé internationnalement bien qu'en anglais ce soit la *International Commission on Illumination*.

- ***Codec*** : abréviation de codeur-décodeur. *Logiciel* utilisé pour l'encodage et le décodage d'une vidéo ou d'un flux audio dans une certaine *norme\**. D'ailleurs, le codec est souvent confondu avec la *norme* ou le *format\**, mais il est bien un *logiciel* et pas un *format*. Par exemple, *x264* ou *nvenc* sont des codecs permettant d'encoder une vidéo dans la *norme* *h.264* (au *format* *mp4* par exemple).

- (Couleurs) complémentaires

- ***Conteneur*** : synonyme de *type de fichier*. Définit comment des flux multimédia (audio, video, sous-titres, méta-données...) doivent être enregistrés ensemble dans un fichier précis. Par exemple : *Quicktime* (*\*.mov*), *MP4* (*\*.mp4*), *Matroska* (*\*.mkv*) sont des conteneurs (mais *h.264* est une *norme\**, et *x264* un *codec\**). Certains conteneurs sont spécialisés et imposent une certaine *norme* (par exemple, un *MP4* devrait toujours utiliser la *norme* *h.264* ou *h.265*), tandis que d'autres permettent un grand nombre de normes différentes (par exemple *Quicktime* permet la norme *PNG*, *Prores*, *RLE/Animation*, *MJPEG*, etc.).

- ***Couche*** (de couleur) : aussi appelé *canal* (de "*channel*" en anglais). Au sein d'un pixel, la couleur est décrite par plusieurs valeurs ; chaque valeur est une *couche* du pixel (ou de l'image). En *RGB* les trois couches sont rouge, verte, et bleue, en *YUV*, la *luminance* et deux couches de *chrominance*.

- ***Courbe de transfert***

- ***Format*** : synonyme de *type de fichier*. Voir *conteneur*. À ne pas confondre avec *norme* et *codec*.

- ***Fréquence*** : dans la représentation *ondulatoire* de la lumière (et de toutes la gamme d'ondes électromangétique), la fréquence, mesurée en *Hertz* (*Hz*) est le nombre d'ondulations par secondes ; elle est l'inverse de la longueur d'ondes\* (`F = 1 / λ` avec *F* pour la fréquence et *λ* pour la longueur d'onde) : quand la fréquence augmente, la longueur d'onde diminue. Dans la partie visible des ondes électromagnétiques (la lumière donc), vers *10<sup>15</sup>Hz* (*1000 TeraHertz*), chaque fréquence correspond à une couleur précise, une lumière *monochromatique*\*. 

- Gamma
- Gamut
- (Couleurs) Homochromes : cf. Métamère
- Illuminant

- ***Intensité*** : quantité de lumière reçue par une surface (réfléchissante ou un capteur) ou émise par une source de lumière, mesurée en nombre de photons reçus par une surface donnée en un temps donné (par exemple en photons par seconde par centimètre carré). Dans le cas d'un émetteur de lumière (bougie, lampe, écran), on parle en fonction d'un cône (un angle solide) d'émission et non pas d'une surface de réception et l'unité est le *candela* noté `cd`[^1].

- ***Linéaire*** : représentation graphique d'une fonction *proportionnelle*, une fonction mathématique dite *affine*, représentée par une ligne droite. On utilise le terme *linéaire* pour parler des espaces colorimétriques dont les correspondances de valeurs avec l'intensité physique sont proportionnelles et donc représentées par une ligne droite sur un graphique.
  
- ***Longueur d'onde*** : dans la représentation *ondulatoire* de la lumière (et de toutes la gamme d'ondes électromangétique), la longueur d'onde, mesurée en *nanomètres* (*nm*) est la "taille" des ondulations ; elle est l'inverse de la fréquence\* (`λ = 1 / F` avec *F* pour la fréquence et *λ* pour la longueur d'onde) : quand la fréquence augmente, la longueur d'onde diminue. Dans la partie visible des ondes électromagnétiques (la lumière donc), en *400nm* et *700nm* environ, chaque longueur d'onde correspond à une couleur précise, une lumière *monochromatique*\*.

- ***Luminance*** : représentation de l'intensité physique de la lumière (ou de la couleur) corresponsant à une couleur sur une échelle linéaire. Différent de *luminosité* ou *luma*.

- ***Luminosité*** ou ***Luma*** : représentation de l'intensité de la lumière (ou de la couleur), mais sur une échelle adaptée à la perception humaine, utilisant un *gamma*, contrairement à la *luminance*.

- ***LUT*** : de l'anglais *Lookup Table*. Une *LUT* permet en informatique (surtout à ses premières heures) de remplacer des fonctions mathématiques complexes (et surtout prenant du temps à réaliser) par des tableaux de valeurs ; au lieu de *calculer* des correspondances et des conversions, on retrouve la valeur dans le tableau. On en utilise encore beaucoup en colorimétrie : elles permettent de convertir des couleurs entres différents espaces colorimétriques sans se soucier de la formule mathématique correspondante (et sont donc un moyen facile de faire une conversion entre des espaces dans un logiciel qui ne les gère pas nativement). Elles peuvent provoquer une (petite) perte d'information si elles ne sont pas assez précises (ne contiennent pas suffisamment de valeurs). Elles sont aussi utilisées comme *presets* d'étalonnage ou de colorimétrie et peuvent permettre de facilement répliquer un effet, même dans un logiciel qui ne le permettrait pas avec ses outils de couleurs natifs (pour peu qu'il puisse appliquer une *LUT* quand même). voir la section [XX-luts.md] pour plus de détails.
  
- (Couleurs) **_Métamères_** : deux (ou plus) couleurs sont dites *métamères* quand elles sont d'apparence identique (l'œil et le cerveau ne font pas la différence) bien qu'elles soient composées en réalité d'un mélange différent de rayons *monochromatiques\**.

- (Lumière) Monochromatique

- ***Noir*** : Le *noir* est la couleur résultant de l'absence de lumière. Il est donc la couleur de plus faible luminosité (nulle) et sa *saturation\** ne peut pas être définie.

- ***Norme*** (vidéo et audio) : définit la *manière* dont les données audio et vidéo sont encodées, le standard utilisé, et donc avec quel *codec* ces données pourront être décodées.

- ***OCIO*** : *OpenColorIO* est une librarie logicielle (une "brique"/outil développeur utilisable dans d'autres logiciels/applications) dédiée à la gestion des couleurs. Elle est gratuite et open source, et devenue standard avec son inclusion et usage dans un grand nombre d'applications (en natif sur *Maya, Arnold, Krita, Blender, Nuke*... ; via des plugins et add-ons sur *After Effects*... ; via des LUTs\*/Profils colorimétriques sur *Photoshop* et d'autres). Cette inclusion dans différentes applications permet de partager une configuration unique de la gestion des couleurs sur toute la chaîne de production et assurer une reproduction identique des couleurs à toutes les étapes.

- ***Octet*** : 8 *bits*. Noté `o`.

- ***OIIO*** : *OpenImageIO* définit principalement le standard du format de stockage de données images *openEXR*, et est une librairie logicielle gratuite et open source pour gérer ce format ouvert, choisi comme format par défaut par *ACES*\* ; il est inter-dépendant avec *OCIO*\*.

- ***Photon*** : bien que le mot date de 1926, c'est en 1905 que Albert Einstein a théorisé le *photon* comme le *quantum* de lumière : la plus petite quantité indivisible de lumière (de toutes les ondes électromagnétiques en réalité). Le *photon* peut être vu comme le pendant *particulaire* du *rayon* de lumière qui serait lui le pendant *ondulatoire*. Il est en réalité *à la fois* particule et onde. L'intensité de la lumière (et donc des couleurs comme on les perçoit) peut être exprimée en nombre de *photons* reçus par une surface donnée en un temps donné (donc par exemple en *photons* par centimètre carré par seconde `γ/cm²/s`). On mesure aussi le seuil de déclenchement (le palier inférieur) et de saturation (le palier supérieur) des capteurs photo-sensibles (comme les cellules rétininennes notamment) en *photons* par seconde.

- Point Blanc

- ***Pourpre*** : Les *pourpres* sont les couleurs résultant du mélange (uniquement) des deux extrèmes du spectre des lumières *monochromatiques*\* visibles : rouge et bleu, en des proportions pouvant varier. Elles sont considérées comme des couleurs *saturées*\*.

- (Couleurs) Primaires
- Pureté colorimétrique
- Pureté d'excitation

- ***Saturation*** : Les couleurs les plus *saturées* possible sont les couleurs *monochromatiques*\* auxquelles on ajoute les pourpres (les mélanges de rouge et bleu). Dès lors que les couleurs sont un mélange de plusieurs lumières *monochromatiques*\* (hors mélange des extrèmes bleu et rouge), la saturation baisse jusqu'à ce que la couleur devienne grise ou blanche. Les couleurs saturées vont donc du *noir* aux couleurs de l'arc en ciel.

- Teinte

- ***Violet*** : voir *Pourpre*.

- ***YCbCr*** ou ***YCC*** : déclinaison numérique du *YUV*.

- ***YPbPr*** : autre nom du *YUV*.

- ***YUV*** : Système de codage des couleurs en trois couches : une de *luminance* ou *luminosité* et deux de *chrominance*. Plusieurs notations apportent des détails sur le système, bien qu'on utilise très majoritairement le terme *YUV* :
    - Lorsqu'on ajoute un prime au Y, on précise que c'est une *luminosité* (avec un gamma) et pas une *luminance* (linéaire).
    - Les termes corrects en analogique sont : *YUV* ou *YPbPr* avec la *luminance* et *Y'UV* ou *Y'PbPr* avec la *luminosité*.
    - Les termes corrects en numérique sont : *YCbCr* ou *YCC* avec la *luminance* et *Y'CbCr* ou *Y'CC* avec la *luminosité*.

[^1]:
    Le *lumen* quant à lui mesure l'intensité générale (donc dans toutes les directions) contrairement au candela, mais n'est pas utilisé en informatique.

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/25)