var fs = require('fs');
//readFile 异步读取文件
// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if (err){
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// })
// //writeFile 异步写入文件,如果文件不存在则覆盖文件内容
// fs.writeFile('output.txt','welcome to node js',function(err){
//     if (err){
//         console.log(err);
//     } else{
//         console.log('ok')
//     }
// })
// //stat 异步返回文件信息
// fs.stat('sample.txt', function (err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('isFile: ' + stat.isFile());
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             console.log('size: ' + stat.size);
//             console.log('birth time: ' + stat.birthtime);
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// });
// fs.open('sample.txt','r',(err,fd)=>{
//     if(err) throw err;
//     fs.fstat(fd,(err,stat)=>{
//         if(err) throw err;
//         console.log(stat.size)
//     })
//     fs.close(fd,(err)=>{
//         if(err) throw err;
//     })
// })
// var rs = fs.createReadStream('sample.txt','utf-8');
// rs.on('data',(chunk)=>{
//     console.log('DATA: ');
//     console.log(chunk);
// });
// rs.on('end',()=>{
//     console.log('END')
// });
// rs.on('error',(err)=>{
//     console.log('ERROR: '+ err)
// });
// var ws1 = fs.createWriteStream('output.txt','utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END. ');
// ws1.end();
// var ws2 = fs.createWriteStream('ouput.txt');
// ws2.write(new Buffer.from('使用stream写入二进制数据。。。\n','utf-8'));
// ws2.write(new Buffer.from('END.','utf-8'));
// ws2.end();
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('output.txt');
rs.pipe(ws);
