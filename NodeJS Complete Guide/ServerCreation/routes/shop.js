const express = require("express");
const path = require("path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.products;
  res.render("shop", {
    prods: product,
    pageTitle: "Shop",
    path: "/",
  });
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
