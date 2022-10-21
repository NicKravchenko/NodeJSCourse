const http = require("http");
const { parse } = require("path/posix");
const routes = require("./routes");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>Klk Main pagee</h1>");

  console.log("Always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In other middleware");
  res.send("<h1>Klk prodicts</h1>");
});

// const server = http.createServer(routes);
// const server = http.createServer(app);

app.listen(3000);
