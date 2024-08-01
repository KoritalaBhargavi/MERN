var express = require('express');
var app= express();

app.get('/home',function(req,res){
	res.send("welcome to home page designed by balaji");
});

app.get('/contact',function(req,res){
	res.send("you just called post method at '/contact'!\n");
});

app.get('/test',function(req,res){
	res.send("http method doesn't have any effect on this route!");
});

app.listen(3000);