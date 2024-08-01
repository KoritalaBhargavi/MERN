var fs= require('fs');

fs.open('mongo4.txt','w',function(err,file){
	if(err) throw err;
	console.log('saved');
});