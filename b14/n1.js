var http=require('http');

http.createServer(function(req,res){

	res.writeHead(200,{'Content-Type':'text/html'});

	res.write('Hello worlds!');

	//res.write(req.url);

	res.end(); //disconnection btw serber and client

}).listen(5000);