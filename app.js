var time = 2;
console.log('node');
setTimeout(function(){
  console.log('3 seconds have passed');
},3000);
timer = setInterval(function(){
  time+=2;
  console.log('2 seconds have passed');
  if(time>10)
  {
    clearInterval(timer);
  }
},2000);

console.log(__dirname);
console.log(__filename);
