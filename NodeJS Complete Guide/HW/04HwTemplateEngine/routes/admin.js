const express = require("express");

const adminRouter = express.Router();
const data = [];

adminRouter.get("/", (req, res, next) => {
  res.render("car-add", { 
    pageName: "Add car",
    route: "/admin" });
});

exports.router = adminRouter;
exports.data = data;
