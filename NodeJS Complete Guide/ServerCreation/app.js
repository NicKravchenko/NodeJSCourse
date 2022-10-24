// const http = require("http");
// const { parse } = require("path/posix");
// const routes = require("./routes");
const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.engine("handlebars", expressHbs);
app.set("view engine", "pug");
// app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
// const server = http.createServer(routes);
// const server = http.createServer(app);

app.listen(3000);
