//const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewengine";
require("dotenv").config();

const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.send("I am Quan");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
