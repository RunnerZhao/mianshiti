
${Nginx}/sbin/nginx -c /home/xx/nginx.conf
-c </path/to/config> 为 Nginx 指定一个配置文件，来代替缺省的。
例如：nginx -t -c /usr/local/nginx/conf/nginx.conf 判断配置文件是否正确

${Nginx}/sbin/nginx -t
-t 不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。

${Nginx}/sbin/nginx -v
-v 显示 nginx 的版本。

${Nginx}/sbin/nginx -V
-V 显示 nginx 的版本，编译器版本和配置参数。

${Nginx}/sbin/nginx
启动命令,启动nginx

${Nginx}/sbin/nginx -s stop/quit
stop 会立即停止服务，这种方法比较强硬，无论进程是否在工作，都直接停止进程。
quit 较stop相比就比较温和一些了，需要进程完成当前工作后再停止。


${Nginx}/sbin/nginx -s reload
reload 会重新加载配置文件，Nginx服务不会中断。而且reload时会测试conf语法等，
如果出错会rollback用上一次正确配置文件保持正常运行。


ps -ef | grep nginx
查看进程命令

平滑重启：kill -HUP [Nginx主进程号(即ps命令查到的PID)]
nginx.pid在/usr/local/nginx/logs/nginx.pid (我这里的是nginx version: nginx/1.20.2版本)
也可直接查找
在当前目录下find ./ -name nginx.pid

说明：
reload 只是重新加载配置文件，不会清理nginx 的一些缓存，在有些需要清理缓存的场景需要restart ，
例如upstream 后端配置的集群服务地址是域名而不是ip，当后端IP 变了，
就需要清除该域名的解析缓存，此时需要重启而不是reload。