var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<h1>This is my first response</h1>
    <h2>This is my second response</h2>
    <p>This is my third response</p>`);
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
