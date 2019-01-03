var {greet,bye} = require('./01_node')
global.process.on('exit',
    ()=>{
     bye('daniel')
    }
);
greet('daniel');
var fs = require('fs');
var rs = fs.createReadStream('sample.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA:');
    console.log(chunk)
})
rs.on('end',function(){
    console.log('END');
})
rs.on('error',(error)=>{
    console.log(`ERROR: ${error}`)
})

var ws = fs.createWriteStream('ouput.txt','utf-8');

rs.pipe(ws);
