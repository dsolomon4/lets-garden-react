// require("dotenv").config();
const routes = require('./routes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./models');
// var session = require('express-session');
// var passport = require('passport');

// const passportSetup = require('./config/passport-setup');
// const cookieSession = require('cookie-session');

// const apiRoutes = require("./routes/api/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

let syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


app.use(routes);


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

