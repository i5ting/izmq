# izmq

install zeromq for linux &amp;&amp; mac


## 各平台安装方法

如果在ubuntu下

    sudo apt-get install libzmq-dev

如果是centos下

    sudo yum install zeromq
    
如果是mac下

    sudo brew install zeromq

## 实现思路

- 获取当前操作系统是ubuntu还是centos还是mac(node里有os对象)
- 执行上面平台对应的安装脚本

## Install 

    [sudo] npm install -g izmq


## Usages

    izmq