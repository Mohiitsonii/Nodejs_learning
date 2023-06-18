const http = require("http");

const port = process.env.PORT || 3000;

console.log(port);

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/html");
console.log(req.url)
    if ((req.url == "/")) {
        res.statusCode = 200;
      res.end("<h1>This is Mohit soni Webiste Home page </h1>");
    } else if ((req.url == "/about")) {
        res.statusCode = 200;
      
        res.end("<h1>Hety this page was not found on the server </h1>");
    } else {
      res.statusCode = 404;
      res.end("<h1>Hety this page was not found on the server </h1>");
    }
});

server.listen(port, () => {
  console.log(`server is listing on port ${port}`);
});
