var os = require("os");

var osInfo = {};
osInfo.tmpdir = os.tmpdir();   //获取系统的临时目录 经测试windows下该函数名字为tmpDir

osInfo.endianness = os.endianness();  //获取cpu的字节序，返回的值可能是"BE"或者"LE"。windows下无此方法

osInfo.hostname = os.hostname();  //获取主机名
 
osInfo.type = os.type()  ;  //获取操作系统类型，如Windows_NT。

osInfo.platform = os.platform()  ;  //获取当前的操作系统平台，如win32。

osInfo.arch = os.arch()  ; //获取cpu架构，如Intel的32位cpu返回ia32

osInfo.release = os.release()  ;  //获取操作系统的release版本号，如win7可能是6.1.7601

osInfo.uptime = os.uptime()  ;  //系统从启动到方法执行共经历多长时间，单位秒

osInfo.loadavg = os.loadavg()  ;  //返回一个数据，数据元素依次为1分钟5分钟和15分钟的平均负载

osInfo.totalmem = os.totalmem()  ;  //内存总数，单位字节

osInfo.freemem = os.freemem()  ;   //空闲内存数，单位字节


osInfo.cpus = os.cpus()  ;   //返回一个数组，数组每个元素为一个cpu核心的信息。

osInfo.networkInterfaces = os.networkInterfaces()  ;  //返回一个二维数组，每一个内层数组代表一个网络接口（物理网卡或者虚拟网卡）



module.exports = osInfo;
