const Express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = Express();
const PORT = process.env.PORT || 8080;

app.set("views", "./views");
app.set("view engine", "pug");

// mongoose.connect(
//   "mongodb+srv://Param:param123@cluster0.ddgjg7x.mongodb.net/?retryWrites=true&w=majority"
// );

app.use(Express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/contactus", (req, res) => {
  res.render("contactus");
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

app.get("/form/trucking", (req, res) => {
  res.render("trucking");
});

app.get("/form/corporate", (req, res) => {
  res.render("corporate");
});

app.get("/form/general", (req, res) => {
  res.render("general");
});

app.listen(PORT, () => {
  console.info(`Server live at http://localhost:${PORT}/`);
});
