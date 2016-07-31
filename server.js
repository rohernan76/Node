var http = require("http"); // "http" is our server
var fs = require("fs");

function handleRequest (req, res) {
	if (req.url === "/index.html") {
		fs.readFile("./index.html", function(err, data) {
			res.write(data);
			red.end();
		});
	} else {
	res.write(req.url);
	console.log(req.url);
	res.end();
	}
}

var server = http.createServer(handleRequest);

server.listen(8000, function () { // this anom function will run when the server has started up
	console.log("server started on port 8000");
});