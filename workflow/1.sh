echo "a" >> package.json
git config --global user.email "62450690+curbo-bot@bot.noreply.github.com"
git config --global user.name "Curbo-bot"
rm -f workflows
git add .
git commit -m "Push from another Github repo - changes"
git push
