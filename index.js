const Express = require("express");
const path = require("path");

const app = Express();
const PORT = process.env.PORT | 8080;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(Express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.info(`Server live at http://localhost:${PORT}/`);
});
