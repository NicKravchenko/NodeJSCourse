const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</head></title>");
    res.write("<body><h1>Klk mio, tu nombre?</h1>");
    res.write(
      '<form action ="message" method="POST"><input type="text" name = "message"></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<head><title>My First Page</head></title>");
  res.write("<body><h1>Klk mio</body>");
  res.write("</html>");
});

server.listen(3000);
