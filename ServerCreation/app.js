// const http = require("http");
// const { parse } = require("path/posix");
// const routes = require("./routes");
const path = require("path");
const express = require("express");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404");
});
// const server = http.createServer(routes);
// const server = http.createServer(app);

app.listen(3000);
