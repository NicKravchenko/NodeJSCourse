const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = express.Router();
const data = [];

adminRouter.use(bodyParser.urlencoded());

adminRouter.get("/", (req, res, next) => {
  res.render("car-add", { 
    pageName: "Add car",
    route: "/admin" });
});

adminRouter.post('/addCar', (req, res, next) => {
  let carName = req.body.carName
  console.log(carName);
  data.push(carName);
  res.redirect('/');
})

exports.router = adminRouter;
exports.data = data;
