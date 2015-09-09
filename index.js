#!/usr/bin/env node
 
//这里调用os模块获取系统信息
 var osInfo = require("./osInfo");

var child_process = require('child_process');
var sys = require('sys')

var exec = child_process.exec;
console.log('This platform is ' + process.platform);
if (process.platform === 'linux') {   //linux
	exec("uname -v", function (error, stdout, stderr) {

		if (stdout.indexOf("Ubuntu") > -1) {
			execZeromq("sudo apt-get install libzmq-dev");
		}else if(stdout.indexOf("Centos") > -1){
			execZeromq("sudo yum install zeromq");
		}
		
		if (error !== null) {

			console.log('exec error: ' + error);

		}

	});
}else  if (process.platform === 'darwin') {  //mac
	execZeromq("sudo brew install zeromq");
}else  if (process.platform === 'freebsd') {

}else  if (process.platform === 'sunos') {

}else  if (process.platform === 'win32') {  //win

}else{
	console.log('sorry i cant get the os system');
}


/*function execZeromq(comand){
	exec(comand, function (error, stdout, stderr)  {

		//sys.print(stdout);
		process.stdout.write(stdout);
		if (error !== null) {

		console.log('exec error: ' + stderr);

		}
	});
}
*/

function execZeromq(comand) {
	var child = child_process.spawn(comand);
	//打印子进程的输出数据
	child.stdout.on('data', function (data) {
	  console.log('stdout: ' + data);
	});

	//监听子进程的错误流数据
	child.stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	//监听子进程的退出事件
	child.on('close', function (code) {
	  console.log('子进程退出，code：' + code);
	});
}


//console.log(osInfo);
//console.log('izmq');

