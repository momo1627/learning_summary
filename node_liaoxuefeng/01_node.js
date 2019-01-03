// 'use strict';
// function greet(name){
//     const s=`Hello,${name}!`;
//     console.log(s);
// }
// function bye(name){
//     const s=`Goodbye,${name}!`;
//     console.log(s);
// }
// module.exports = {greet,bye};
// var http = require('http');
// var server = http.createServer(
//     (request,response)=>{
//         console.log(request.method + ': ' + request.url);
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.end('<h1>Hello world!</h1>')
//     }
// )
// server.listen(8080);
// var url = require('url');
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
var path = require('path');
// var p = path.basename('http://user:pass@host.com:8080/path/to/file?query=string#hash');
// console.log(p)
var workDir = path.resolve('.');
var filePath = path.join(workDir,'server','index.html');
console.log(filePath)

// var fs = require('fs'),
//     url = require('url'),
//     path = require('path'),
//     http = require('http');
// var root = path.resolve(process.argv[2] || '.')
// console.log(`Static root dir: ${root}`);
// var server = http.createServer(
//     function(request,response){
//     var pathname = url.parse(request.url).pathname;
//     var filepath = path.join(root,pathname);
//     fs.stat(filepath,(err,stats)=>{
//         if(!err && stats.isFile){
//             console.log(`200 ${request.url}`);
//             request.writeHead(200);
//             fs.createReadStream(filepath).pipe(response)
//         } else {
//             console.log(`404 ${request.url}`);
//             response.writeHead(404);
//             response.end('404 not found')
//         }
//     })
// })
// server.listen(8080);
// console.log('yeah!')