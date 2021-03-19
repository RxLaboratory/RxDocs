# Glossaire

Classement alphabétique.

- ***ACES*** : *Academy Color Encoding System* est un standard d'échange, de gestion des couleurs pour l'imagerie numérique. Il a pour but de simplifier la gestion des couleurs en maintenant la fidélité des couleurs tout au long de la chaîne de production. Le standard est gratuit et open source et de nombreuses entreprises contribuent à son développement. Il utilise notamment la librairie logicielle *OCIO*\*.

- ***CIE*** : *La Commission internationale de l'éclairage* est une organisation internationale dédiée à la lumière, l'éclairage, la couleur et les espaces de couleur. Elle a été fondée à Berlin en 1913 et est actuellement basée à Vienne en Autriche.  Note : l'acronyme français *CIE* est celui utilisé internationnalement bien qu'en anglais ce soit la *International Commission on Illumination*.

- ***Courbe de transfert***

- ***Fréquence*** : dans la représentation *ondulatoire* de la lumière (et de toutes la gamme d'ondes électromangétique), la fréquence, mesurée en *Hertz* (*Hz*) est le nombre d'ondulations par secondes ; elle est l'inverse de la longueur d'ondes\* (`F = 1 / λ` avec *F* pour la fréquence et *λ* pour la longueur d'onde) : quand la fréquence augmente, la longueur d'onde diminue. Dans la partie visible des ondes électromagnétiques (la lumière donc), vers *10<sup>15</sup>Hz* (*1000 TeraHertz*), chaque fréquence correspond à une couleur précise, une lumière *monochromatique*\*. 

- Gamma
- Gammut
- (Couleurs) Homochromes : cf. Métamère
- Illuminant
- Intensité
  
- ***Longueur d'onde*** : dans la représentation *ondulatoire* de la lumière (et de toutes la gamme d'ondes électromangétique), la longueur d'onde, mesurée en *nanomètres* (*nm*) est la "taille" des ondulations ; elle est l'inverse de la fréquence\* (`λ = 1 / F` avec *F* pour la fréquence et *λ* pour la longueur d'onde) : quand la fréquence augmente, la longueur d'onde diminue. Dans la partie visible des ondes électromagnétiques (la lumière donc), en *400nm* et *700nm* environ, chaque longueur d'onde correspond à une couleur précise, une lumière *monochromatique*\*.

- Luminance

- ***LUT*** : de l'anglais *Lookup Table*. Une *LUT* permet en informatique (surtout à ses premières heures) de remplacer des fonctions mathématiques complexes (et surtout prenant du temps à réaliser) par des tableaux de valeurs ; au lieu de *calculer* des correspondances et des conversions, on retrouve la valeur dans le tableau. On en utilise encore beaucoup en colorimétrie : elles permettent de convertir des couleurs entres différents espaces colorimétriques sans se soucier de la formule mathématique correspondante (et sont donc un moyen facile de faire une conversion entre des espaces dans un logiciel qui ne les gère pas nativement). Elles peuvent provoquer une (petite) perte d'information si elles ne sont pas assez précises (ne contiennent pas suffisamment de valeurs). Elles sont aussi utilisées comme *presets* d'étalonnage ou de colorimétrie et peuvent permettre de facilement répliquer un effet, même dans un logiciel qui ne le permettrait pas avec ses outils de couleurs natifs (pour peu qu'il puisse appliquer une *LUT* quand même). voir la section [XX-luts.md] pour plus de détails.
  
- (Couleurs) Métamères
- (Lumière) Monochromatique

- ***OCIO*** : *OpenColorIO* est une librarie logicielle (une "brique"/outil développeur utilisable dans d'autres logiciels/applications) dédiée à la gestion des couleurs. Elle est gratuite et open source, et devenue standard avec son inclusion et usage dans un grand nombre d'applications (en natif sur *Maya, Arnold, Krita, Blender, Nuke*... ; via des plugins et add-ons sur *After Effects*... ; via des LUTs\*/Profils colorimétriques sur *Photoshop* et d'autres). Cette inclusion dans différentes applications permet de partager une configuration unique de la gestion des couleurs sur toute la chaîne de production et assurer une reproduction identique des couleurs à toutes les étapes.

- ***OIIO*** : *OpenImageIO* définit principalement le standard du format de stockage de données images *openEXR*, et est une librairie logicielle gratuite et open source pour gérer ce format ouvert, choisi comme format par défaut par *ACES*\* ; il est inter-dépendant avec *OCIO*\*.

- ***Photon*** : bien que le mot date de 1926, c'est en 1905 que Albert Einstein a théorisé le *photon* comme le *quantum* de lumière : la plus petite quantité indivisible de lumière (de toutes les ondes électromagnétiques en réalité). Le *photon* peut être vu comme le pendant *particulaire* du *rayon* de lumière qui serait lui le pendant *ondulatoire*. Il est en réalité *à la fois* particule et onde. L'intensité de la lumière (et donc des couleurs comme on les perçoit) peut être exprimée en nombre de *photons* reçus par une surface donnée en un temps donné (donc par exemple en *photons* par centimètre carré par seconde `γ/cm²/s`). On mesure aussi le seuil de déclenchement (le palier inférieur) et de saturation (le palier supérieur) des capteurs photo-sensibles (comme les cellules rétininennes notamment) en *photons* par seconde.

- Point Blanc
- Primaires
- Pureté colorimétrique
- Pureté d'excitation
- Saturation
- Teinte

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/19)