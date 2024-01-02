import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  app.get("/", homeController.getHomepage);

  app.get("/about", (req, res) => {
    res.send("I am Quan");
  });
  return app.use("/", router);
};

export default initWebRoute;
