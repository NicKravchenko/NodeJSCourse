const express = require("express");

const carRouter = express.Router();

carRouter.get("/", (req, res, next) => {
  res.render("car", { 
    pageName: "Car List",
    route: "/" });
});

module.exports = carRouter;
