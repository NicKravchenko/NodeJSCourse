const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  let message = "tt";

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
      message = parsedBody.split("=")[1];
      console.log(parsedBody);

      fs.writeFileSync("name.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</head></title>");
  res.write(`<body><h1>Klk ${message}</body>`);
  res.write("</html>");
  console.log("Now name was readen");
};
//   console.log(req.url, req.method, req.headers);
//   process.exit();

module.exports = requestHandler;
// module.exports = {
//   request: requestHandler,
//   someText: "Blah blah",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Blah";
