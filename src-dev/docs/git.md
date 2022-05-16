# Git

Git est un gestionnaire de versionning très utilisé en développement. L'usage au quotidien se fait simplement soit via la plateforme (github.com) soit via une application de bureau (Github Desktop).

Il peut parfois être utile ou nécessaire de l'utiliser en ligne de commande, voici les quelques commandes utiles.

## Pulling remote

```bash
git fetch
git pull
```

## Commit and push

```
git add . # adds all files
git commit
git push
```

## Deleting branches

On remote

```bash
git push -d origin branchName
```

Locally

```bash
git branch -d branchName
```

## Submodules

Add new submodule

```bash
git submodule add https://github.com/USER/PROJECT.git Folder
```

Init all submodules for the current repo

```bash
git submodule update --init --recursive
```

Update submodules

```bash
git submodule update
```

Pull all most recent versions of submodules

```bash
git submodule update --recursive --remote
```

Remove submodule

```bash
# Remove the submodule entry from .git/config
git config --remove-section submodule.path/to/submodule

# Remove the submodule directory from the superproject's .git/modules directory
rm -rf .git/modules/path/to/submodule

# Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule
git rm -f path/to/submodule
```

## Credentials

En utilisant ces commandes, git demande un login. Il y a trois méthodes pour enregistrer le login, triées ici de la plus sécurisée à la moins sécurisée.

### SSH Key

Create an ssh Github key. Go to github.com -> Settings -> SSH and GPG keys -> New SSH Key. Now save your private key to your computer.

Then, if the private key is saved as id_rsa in the *~/.ssh/ directory*, we add it for authentication as such:

`ssh-add -K ~/.ssh/id_rsa`

### Caching

We can use git-credential-store to cache our username and password for a time period. Simply enter the following in your CLI (terminal or command prompt):

`git config --global credential.helper cache`

You can also set the timeout period (in seconds) as such:

`git config --global credential.helper 'cache --timeout=3600'`


### Storing (less secure)

Git-credential-store may also be used, but saves passwords in plain text file on your disk as such:

`git config credential.helper store`
