var fs = require('fs');

fs.readFile('readme.txt','utf8',function(err,data){
  fs.writeFile('writeMe1.txt',data);
});
console.log('asynchronous');
fs.unlink('writeMe.txt');
fs.writeFileSync('writeMe.txt',readMe);
