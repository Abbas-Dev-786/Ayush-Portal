const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.enable("trust proxy");

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));

app.use(express.json());

const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRouter);

app.use(`${BASE_URL}/user`,userRouter)

app.all("*", (req, _, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
