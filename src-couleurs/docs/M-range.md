# M - Full range / Limited / TV / PC ?

Lors de l'encodage vidéo (et de son décodage), un paramètre important concerne le *color range*. Ce paramètre a son origine historique au moment du passage de la TV analogique aux écrans RGB numériques. Il donne une gamme de niveaux possible sur chacune des *couches[\*](ZZ-vocabulaire.md)* de couleur (rouge, vert, bleu).

[TOC]

## M.1 - Full range / PC

Les écrans numériques des ordinateurs utilisent la gamme *complète* des niveaux de rouge, vert et bleu pour la reproduction des couleurs. Avec les 8 bits par *couche* (*cf.* chapitre *[N - Profondeur (bpc)](N-bpc.md)*) les plus répandus, cela signifie que chaque couche stocke les valeurs entre 0 et 255.

0 représente donc le noir, et 255 le blanc.

## M.2 - Limited range / TV

Les télévisions sont elles prévues pour utiliser la gamme dite *limitée* des niveaux ; cette gamme est à l'origine adaptée spécifiquement pour représenter plus correctement les contrastes des films et correspond avec 8 bits par *couche* à des valeurs entre 16 et 235.

Cela signifie que en télévision, la valeur 16 représente le noir, et la valeur 235 le blanc. Toutes les valeurs inférieures à 16 sont ignorées (plus noires que noir) ainsi que toutes les valeurs supérieures à 235 (plus blanches que blanche)[^1].

## M.3 - Conséquence pratique

Il faut donc bien connaître à la fois son matériel au moment de la reproduction d'une vidéo, et bien savoir quoi faire au moment de son encodage.

### M.3.a - Encodage

Dans l'immense majorité des cas, les standards vidéos préconisent un encodate en *limited range / TV* : les vidéos sont prévus pour être vues dans les conditions de la télévision (y compris sur internet). C'est le cas par exemple du *mp4* en *h.264* ou *h.265*, du *mkv*, et de tous les formats de *diffusion*.

En revanche, les formats d'image (*PNG*, *Jpeg*, *openEXR*, etc.), ainsi que les formats video *intermédiaires* (ceux utilisés lors de la production et non pas de la diffusion, comme le Prores), étant prévus pour un environnement informatique, utilisent plutôt le *full range / PC*.

Il est important de respecter ces standards pour être sûr que les fichiers soient correctement interprétés par le matériel des spectateurs, et toujours se renseigner sur les formats préconisés par les diffuseurs.

### M.3.b - Lecture et affichage

Lors de la lecture des vidéos, il faut aussi que tout le système soit correctement configuré ; un problème courant (pour ne pas dire récurent) sur les ordinateurs est justement que les vidéos sont laissées en *limited range* alors que l'écran est *full range*.

Lors de la lecture, la source vidéo doit être convertie pour correspondre à l'écran ou au projecteur. Sans conversion, une vidéo *limited range* sur un écran *full range* sera "terne" : il n'y aura ni noir ni blanc, la gamme de l'image allant seulement du gris clair au gris foncé. À l'inverse, une vidéo *full range* sur une TV *limited range* aura une perte d'information aussi bien dans les lumières que les ombres, avec de grandes parties complètement noires ou blanches (l'image sera trop contrastée).

*![Exemple de mauvais affichage]()*

Il faut donc que le matériel soit correctement configuré. Sur un lecteur de disques ou une console, il doit y avoir un réglage pour spécifier si l'écran branché est *full* ou *limited range* (en règle générale, un écran informatique ou un vidéo-projecteur est *full range*, une TV *limited range*).

Sur un ordinateur, les choses peuvent être un peu plus complexes : il faut commencer par vérifier les paramètres du pilote de la carte graphique, en général dans une section nommée "vidéo", et bien spécifier *full range / PC* (sauf si c'est une TV qui est branchée à l'ordinateur)[^2]. Si après avoir bien réglé ce paramètre des variations sont toujours visibles, il faut vérifier que le logiciel utilisé pour lire la vidéo ne fait pas une mauvaise conversion (par exemple *Quicktime* sur *Windows* était connu pour ça[^3]) ; la plupart de ces logiciels devraient cependant laisser faire cette conversion par la carte graphique et ne pas poser de problème (c'est le cas de *VLC*, du lecteur vidéo de *Windows*, de *Totem* sous *Linux*...).

*![Exemple du réglage sur les pilotes nvidia]()*

!!! warning
    Sur certains matériels, une option "Auto" est disponible en plus de *full / limited range*. Dans ce cas le matériel *essaye* de détecter le type d'écran branché. Dans la mesure où c'est un paramètre qui ne doit changer que quand on change d'écran, il est fortement recommandé de le mettre à la main.

----
Sources et références

- [RGB Full vs Limited sur *Reference Home Theater* (en anglais)](https://referencehometheater.com/2014/commentary/rgb-full-vs-limited/)

[^1]:
    Certains blu-rays et consoles de jeux tirent parti de cette limite pour ajouter des spéculaires (brillances) au delà du blanc et les rendre plus lumineux. Si la TV est compatible, elle affichera des "super blancs", sinon elle ignorera simplement cette information, sans que l'image n'en soit affectée.
[^2]:
    Pendant longtemps, les pilotes des cartes graphiques NVidia sous *Windows* étaient configurées pour afficher les vidéos en *limited range* par défaut...
[^3]:
    Bien qu'aimé des animateurs pour sa capacité à facilement lire les vidéos image par image, *Quicktime* sous *Windows* est à proscrire pour sa mauvaise gestion des couleurs ; son développement a de toute façon été abandonné par *Apple*.  
    *[DJV](https://darbyjohnston.github.io/DJV/)*, disponible aussi bien sous *Windows*, *Mac OS*, *Linux*, que *BSD*, le remplace efficacement et intègre une gestion des couleurs professionnelle.
    
![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/28)