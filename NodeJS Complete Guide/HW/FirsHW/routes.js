const users = ["Omar", "Steven", "Oliver"];

const reqestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  let name = "";

  if (url === "/") {
    res.write("<html>");
    res.write("<h1>Ola</h1>");
    res.write("</html>");
    res.write(
      '<form action="create-user" method="POST"><input type="text" name="create-user"></form> '
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      name = parsedBody.split("=")[1];
      console.log(name);
      users.push(name);
    });
    res.writeHead(301, { Location: "http://localhost:3020/users" });

    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Users:</h1>");
    users.forEach((u) => {
      res.write(`<p>${u}</p>`);
    });

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = reqestHandler;
