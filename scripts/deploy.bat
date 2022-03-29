@echo off
npm run build&&cd dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/hoXyy/hoxyy.github.io.git main:gh-pages&&cd ..