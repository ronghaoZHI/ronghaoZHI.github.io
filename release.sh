# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 发布到自定义域名
# echo 'www.zhironghao.com' > CNAME

git init
git add -A
git commit -m 'build release'

# 发布到 https://<USERNAME>.github.io
git push -f git@github.com:ronghaoZHI/ronghaoZHI.github.io.git release

cd -