const express = require("express")
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")
require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});