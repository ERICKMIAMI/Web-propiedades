const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

// Load routings


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// Router Basic

module.exports = app;