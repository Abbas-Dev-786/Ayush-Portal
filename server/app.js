const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

const BASE_URL = "/api/v1";

app.all("*", (req, _, next) => {
  next();
});

// app.use(globalErrorHandler)

module.exports = app;
