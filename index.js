import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set ('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/ap", (req, res) => {
    res.render("ap.ejs");
  });

app.get("/contato", (req, res) => {
    res.render("contato");
  });

app.get("/hab", (req, res) => {
    res.render("hab");
  });

app.get("/ppr", (req, res) => {
    res.render("ppr.ejs");
  });

app.get("/Saude", (req, res) => {
    res.render("Saude.ejs");
  });

app.get("/Seguros", (req, res) => {
    res.render("Seguros.ejs");
  });

app.get("/Total", (req, res) => {
  res.render("Total.ejs");
});

app.get("/Vida", (req, res) => {
  res.render("Vida.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
