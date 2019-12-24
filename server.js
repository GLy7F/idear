var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
// var port = process.env.PORT || 5000;
require("dotenv/config");

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`connect tho mongoDB`);
  }
);

const Users = require("./routes/Users");
app.use("/users", Users);
app.use("/allideas", require("./routes/idea"));

//must change your port to this for deployment else it wont work
const PORT = ( process.env.PORT || 5000 );

//serves all our static files from the build directory.
app.use(express.static(path.join(__dirname, "build")));

// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);



// app.listen(port, () => {
//   console.log(`running on ${port}`);
// });
