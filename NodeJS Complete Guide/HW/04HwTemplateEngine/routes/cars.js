const express = require("express");

const adminRouter = require('./admin')

const carRouter = express.Router();
const cars = adminRouter.data;

carRouter.get("/", (req, res, next) => {
  res.render("car", { 
    pageName: "Car List",
    route: "/",
    cars: cars});
});

module.exports = carRouter;
