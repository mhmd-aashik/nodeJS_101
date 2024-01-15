const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
    return;
  } else {
    res.end(`<h1>OOPS SOMETHING WENT WRONG 🙁</h1> <br/>
      <a href="/">back Home</a>
    `);
    return;
  }
});

server.listen(5500);
