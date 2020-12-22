require("dotenv").config();
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);

var options = {
  host: process.env.ENDPOINT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const sessionStore = new MySQLStore(options);

const initSession = session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  cookie: { maxAge: 8 * 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: true,
});

function isLoggedIn(req, res, next) {
  if (req.session.user !== undefined) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = { sessionStore, isLoggedIn, initSession };
