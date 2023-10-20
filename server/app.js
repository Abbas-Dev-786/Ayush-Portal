const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const messageRouter = require("./routes/messageRoute");
const meetingRouter = require("./routes/meetingRoute");
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
app.use(`${BASE_URL}/users`, userRouter);
app.use(`${BASE_URL}/messages`, messageRouter);
app.use(`${BASE_URL}/meetings`, meetingRouter);

app.all("*", (req, _, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
