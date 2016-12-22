var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('this is th homepage');
});
app.get('/contact',function(req,res){
  res.send('this is the contact page');
});
app.listen(3000);
