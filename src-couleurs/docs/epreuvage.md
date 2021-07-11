![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/07/11)

# II.D - Épreuvage (Soft-Proofing) et simulation

L'*épreuvage*, ou encore *simulation* ou *soft-proofing*, consisite à simuler les différentes conversions d'espaces colorimétriques pouvant intervenir sur l'image avant de parvenir à l'utilisateur final, afin de vérifier la conformité finale des couleurs sans avoir à exporter, imprimer, calculer le projet pour tester, mais en direct à l'écran.

En effet, si l'espace d'affichage de l'écran ne peut pas changer et doit être celui prévu par le fabricant (*sRGB* dans la majorité des cas), le projet livré ne sera pas nécessairement dans cet espace.

Prenons l'exemple d'un projet livré en vidéo HD standard qui sera finalement exportée dans l'espace *Rec. 709*, le travail sur l'image étant fait dans un espace *RGB linéaire*. Dans ce cas, au moment de travailler l'image, l'affichage se fait après une conversion depuis le *RGB Linéaire* (espace de travail) vers *sRGB* (espace de l'écran).

`Travail : RGB Linéaire → Écran : sRGB`

Il peut être utile dans ce cas d'introduire une conversion intermédiaire en *Rec. 709*, espace du fichier de sortie final, pour contrôler le résultat. Dans ce cas, une deuxième conversion intervient ensuite pour revenir à l'espace *sRGB* de l'écran Cette conversion aurait aussi lieu lors de la lecture du fichier exporté, de la même manière, et l'épreuvage permet ainsi de tester les couleurs en conditions réelles de visionnage.

`Travail : RGB Linéaire → Simulation de la sortie : Rec.709 → Écran : sRGB`

De la même manière, on peut utiliser cette technique pour prévisualiser et *simuler* les transformations que subiront les couleurs lors de changements bien plus radicaux d'espaces de couleurs, par exemple en vue de l'impression, et donc de passage vers un espace *soustractif* comme le *CMJN* ; dans ce cas, on a bien affaire à une simulation, l'espace de sortie ne pouvant pas être reproduit exactement par le *sRGB* de l'écran.

`Travail : RGB Linéaire → Simulation de la sortie : CMJN → Écran : sRGB`