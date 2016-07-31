
// What is Node?

var fs = require("fs");

var useStdin = function () {
	var input = process.stdin.read();
	console.log("You typed: " + input);
};

process.stdin.on('readable', useStdin);