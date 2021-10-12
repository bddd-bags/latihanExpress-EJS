const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const newsletters = require("./newsletters.json");

// inisialisasi EJS
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", { layout: "layouts/main" });
});

app.get("/newsletters", (req, res) => {
  res.render("newsletters", { newsletters, layout: "layouts/main" });
});

app.get("/newsletters/:id", (req, res) => {
  const getId = req.params.id;

  const newsLetter = newsletters.find((e) => {
    return e.id == getId;
  });

  res.status(200).render("letter", { newsLetter, layout: "layouts/main" });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
