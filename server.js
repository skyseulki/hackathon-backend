const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const cors = require("cors");
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
// const dbConnection = require("./server/db/models"); // loads our connection to the mongo database
// const passport = require("./server/passport");
const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;

// uire("dotenv").config();

// ===== Middleware ====
// app.use(morgan("dev"));
// app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// app.use(
//   session({
//     secret: process.env.APP_SECRET || "this is the default passphrase",
//     store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false,
//     saveUninitialized: false
//   })
// );

/* Express app ROUTING */
// app.use("/auth", require("./server/auth"));

// ====== Error handler ====
// app.use(function(err, req, res, next) {
//   console.log("====== ERROR =======");
//   console.error(err.stack);
//   res.status(500);
// });

// ==== Starting Server =====
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
