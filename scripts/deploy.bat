@echo off
pnpm run build&&cd ..&&cd dist&&git init&&git add --all&&git commit -m 'deploy'&&git push -f https://github.com/hoXyy/hoxyy.github.io.git master:gh-pages&&cd ..