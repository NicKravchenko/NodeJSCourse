const http = require("http");
const fs = require("fs");
const { parse } = require("path/posix");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
  const method = req.method;

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

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFileSync("name.txt", message);
      console.log(parsedBody);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<head><title>My First Page</head></title>");
  //   res.write("<body><h1>Klk mio</body>");
  //   res.write("</html>");
});

server.listen(3000);
