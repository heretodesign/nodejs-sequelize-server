const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cors = require('cors');
const path = require('path');

const app = express();

//handle bodyParser
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 5000;
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Connection
const db = require("./config/database");
//api routes
app.use("/api/posts", require("./routes/posts"));

db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("Error: " + err))


app.listen(PORT, console.log(`Server started on port ${PORT}`));
