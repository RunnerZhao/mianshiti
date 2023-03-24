![](.git_images/db4e6b82.png)
git clone	拷贝一份远程仓库，也就是下载一个项目。
git init - 初始化仓库。
git add . - 添加文件到暂存区。
git commit - 将暂存区内容添加到仓库中。
git pull	下载远程代码并合并
git push	上传远程代码并合并




git branch 列出分支基本命令：
git branch testing  创建新分支 testing
git checkout testing 切换分支
git merge testing   在main分支下合并testing分支到main分支
git branch -d testing 删除分支

git log - 查看历史提交记录。 退出log： q

git tag -a v1.0    "创建一个带注解的标签"


- 1.git rebase。

>git rebase：用来优化合并提交记录。

- 2.怎么解决代码冲突。

>可以用过git status查看做了哪些修改，然后手动解决冲突，再进行提交。
> 
