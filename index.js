require("newrelic");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const { HOST, PORT } = process.env;
// const compression = require("compression");
// app.use(compression());

//Static Directory
app.use(express.static("./uploads"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Global Route
const route = require("./routes/routes");
route(app, "/api/v1");

app.get("/", (req, res) => {
  res.status(200).send({
    page: "Home",
    message: "Hello World!",
  });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});
