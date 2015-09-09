#!/usr/bin/env node
 
var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var pre = '';

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-s'  || _argv == '--sudo'){
    pre = 'sudo ';
  }
}

//这里调用os模块获取系统信息
var osInfo = require("./osInfo");
var child_process = require('child_process');
var sys = require('sys');
var exec = child_process.exec;

console.log('This platform is ' + process.platform);

if (process.platform === 'linux') {   //linux
	exec("uname -v", function (error, stdout, stderr) {
		if (stdout.indexOf("Ubuntu") > -1) {
			_exec("apt-get install libzmq-dev", pre);
		}else if(stdout.indexOf("Centos") > -1){
			_exec("yum install zeromq", pre);
		}
		
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
}else  if (process.platform === 'darwin') {  //mac
	_exec("brew install zeromq", pre);
}else  if (process.platform === 'freebsd') {
  console.log('sorry i cant get the freebsd system');
}else  if (process.platform === 'sunos') {
  console.log('sorry i cant get the sunos system');
}else  if (process.platform === 'win32') {  //win
  console.log('sorry i cant get the win32 system');
}else{
	console.log('sorry i cant get the os system');
}

/**
 * 执行脚本，如果有pre，即可是sudo
 */ 
function _exec(script, pre) {
  if (arguments.length == 1) {
    pre = "";
  }
  
  var child_process = require('child_process');
  
  var _script = pre + " " + script;
  console.log(_script);
  
  // execFile: executes a file with the specified arguments
  child_process.exec(_script,
    function (error, stdout, stderr) {
      if (error !== null) {
        console.log('izmq exec error: ' + error);
      }else{
        console.log("izmq exeute sucess!")
      }
  });
}
