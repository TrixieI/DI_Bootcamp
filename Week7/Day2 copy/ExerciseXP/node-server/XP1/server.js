// Exercise 2

const user = {
  firstname: "John",
  lastname: "Doe",
};

const http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    let parsedUser = JSON.stringify(user);

    response.end(parsedUser);
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
