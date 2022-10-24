const exp = require("constants");
const express = require("express");

const app = express();

const carRouter = require("./routes/cars");
const admin = require("./routes/admin");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", carRouter);
app.use("/admin", admin.router);

app.listen(3000);
