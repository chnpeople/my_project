合并分支到master

```js
1)
git checkout master //切换到主分支

2)
git merge realease1.0.1 //合并开发分支到主分支

3)
git push origin master  //推送
```





新建分支：

```js
1)
git checkout master  //切换到主分支

2)
git checkout -b realease1.0.2  //创建新的分支

3)
git push --set-upstream origin realease1.0.2 //提交新的分支
```


pm2部署：

```js
1)
pm2 deploy production setup  //首次设置，记得清空服务器上的文件

2)
pm2 deploy production update  //更新操作

3)
chattr -i /www/wwwroot/www.tim007.com/source/dist/.user.ini   //删除user.ini
