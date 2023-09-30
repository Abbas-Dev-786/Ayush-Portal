const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRoute");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.enable("trust proxy");

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRouter);

app.all("*", (req, _, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
