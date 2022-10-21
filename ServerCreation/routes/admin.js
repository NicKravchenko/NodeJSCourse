const express = require("express");
const path = require("path");
const router = express.Router();

const bodyParser = require("body-parser");

const rootDir = require("../util/path.js");

router.use(bodyParser.urlencoded());

router.get("/add-product", (req, res, next) => {
  console.log("In other middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
