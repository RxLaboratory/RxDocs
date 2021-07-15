# Software versionning

On utilise le Semantic Versionning, qui est très bien décrit [ici](https://semver.org/).

Exemple : `16.2.15` ou `1.2.0-Beta`.

Cette regular expression permet de récupérer les infos d'une version bien écrite et de faire des fonctions de comparaison avec :

`^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$`
