//const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewengine";
require("dotenv").config();
import initWebRoute from "./route/web";

const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
