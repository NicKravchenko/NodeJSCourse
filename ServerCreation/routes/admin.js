const express = require("express");
const path = require("path");
const router = express.Router();

const bodyParser = require("body-parser");

const rootDir = require("../util/path.js");

const products = [];

router.use(bodyParser.urlencoded());

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pafeTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
