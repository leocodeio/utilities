git inint
git status
git add .
git commit -m "initial commit"
git branch -M 'main
git remote add origin "url"
git push -u origin 'main'

npm install gh-pages --save-dev
"homepage" : "url"
"predeploy":"npm run build"
"deploy":"gh-pages -d build"

npm run deploy