var express = require("express");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const helmet = require("helmet");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const port = process.env.PORT || 4000;
const { initSession } = require("./sessions");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

app.use(logger("dev"));
app.use(express.json());
app.use(limiter);
app.use(initSession);
app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/static", express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
