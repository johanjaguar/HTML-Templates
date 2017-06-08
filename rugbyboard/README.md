# Rugbyboard Web & Mobile App
------------

### Info ###
* Primera versión con tableto para la táctica fija
* v0.1

### Estructura ###

css/            Estilos
backend/
core/                 Core del aplicativo, se manejan todas las clases Base, modelos, controladores, vistas y ext
rentingcarz/          Sitio web rentingcarz.com
costamar/             SubSitio agencia costamar
costamarB2B/          SubSitio agencia costamar para B2B
subsitio/             SubSitio web destinojet.com

### Procedimiento Feature ###

git pull origin develop
git checkout -b feature_x develop
git status
git add  (archivos que muestre el status)
git commit -a -m "Comentario feature"
git checkout develop
git merge --no-ff feature_x
git branch -d feature_notes
git push origin develop

### Procedimiento Hotfix ###

git pull origin master
git checkout -b hotfix-2.7.x master
git commit -a -m "Correccion Bug"
git checkout master
git merge --no-ff hotfix-2.7.x
git tag -a v2.7.x
git push origin master
git checkout develop
git merge --no-ff hotfix-2.7.x
git branch -d hotfix-2.7.x
git push origin develop

### Procedimiento Realese ###

git checkout develop
git checkout -b release-2.7.x develop
git commit -a -m "Comentario Realese"
git checkout master
git merge --no-ff release-2.7.x
git tag -a v2.7.x
git checkout develop
git merge --no-ff release-2.7.x
git branch -d release-2.7
git push origin develop
git checkout master
git push origin master
