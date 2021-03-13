# C - Représentation objective des couleurs

Étant entendu que la perception des couleurs est éminemment subjective, tout travail en commun nécessite la mise en place d'un référenciel objectif partagé par tous (et donc une certaine standardisation des techniques, ce qui n'est pas toujours évident...).

Ce travail de rationnalisation n'est pas né avec l'image numérique ; depuis 1913 la [Commission Internationale de l'Éclairage](https://fr.wikipedia.org/wiki/Commission_internationale_de_l%27%C3%A9clairage) (*CIE*) travaille sur le problème.

Les espaces colorimétriques modernes[^1] qu'on utilise en traitement de l'image sont des propositions de solutions à cette rationnalisation, de standardisation de représentation des couleurs, et se basent sur le travail et les premières tentatives de la CIE.

Il est intéressant de savoir que la CIE a mené ses travaux de manière empirique, définissant un *observateur moyen* à partir de nombreuses expériences de comparaison de couleurs par des observateurs humains, afin de caractériser les couleurs et les lumières telles que les perçoit l'humain moyen.

C'est en 1931 que la CIE a proposé une première représentation et rationnalisation des couleurs : le diagramme *CIE-1931*, encore très utilisé aujourd'hui comme référentiel objectif, notamment pour comparer les différents espaces colorimétriques en usage.

## Décomposer les couleurs

On l'a sous-entendu jusqu'ici, une couleur telle qu'on la perçoit est physiquement définie par trois paramètres indépendants : son *intensité*, sa *longueur d'onde dominante* et sa *pureté d'excitation*.

- L'**intensité** est assez intuitive à comprendre, et liée à ce qu'on appelle aussi la *luminosité* ; c'est le nombre de photons reçus chaque seconde par les cellules de la rétine.
- La **longueur d'onde dominante** va donner influencer principalement la *teinte* de la couleur ; c'est la composante monochromatique la plus intense dans le mélange de toutes les longueurs d'ondes formant cette couleur particulière.
- La **pureté d'extraction** représente la proportion entre la longueur d'onde dominante et la quantité de *blanc* qu'il faut y ajouter pour obtenir la couleur en question. C'est proche de ce qu'on nomme la *saturation*.

Cette décomposition étant parfaitement objective (étant liée à la réalité physique de la lumière), elle est une bonne base pour fabriquer une représentation objective des couleurs ; c'est ce qu'à fait la CIE.

## Diagrammes de couleurs, CIE-1931

----
Sources et références

- [Couleur sur *Wikipedia*](https://fr.wikipedia.org/wiki/Couleur)

![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/13)

[^1]:
    Les espaces colorimétriques sont les manières standardisées d'enregistrer et de représenter les couleurs (analogiques aussi bien que numériques).
    Il y a *sRGB*, *BT.709*, *ACES*, *BT.2020*, *P3*, pour n'en citer que quelques uns parmi une très grande liste.