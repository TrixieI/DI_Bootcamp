// Part 1

const grab = require("./main");

const b = 5;

const result = grab + b; // gives us 361 integer
console.log(result);

// part 2

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`my module:

  ${result}

  Hi there at the frontend`);
};

const server = http.createServer(requestListener);
server.listen(3000);

// part 3

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`The date and time currently: ${grab}`);
};

const server = http.createServer(requestListener);
server.listen(8080);
