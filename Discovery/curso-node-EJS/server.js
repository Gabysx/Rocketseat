const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
  const items = [
    {
      title: "D",
      message: "esenvolver é top"
    }, 
    {
      title: "E",
      message: "JS usa JS para renderizar Htlm "
    }, 
    {
      title: "M",
      message: "ais fácil"
    }, 
    {
      title: "A",
      message: "morzinho"
    },
    {
      title: "I",
      message: "nstalar EJS"
    },
    {
      title: "S",
      message: "intaxe fácil "
    }
  ];
  const subtitle = "Uma linguagem de modelagem para criação de páginas WEBs!! Nice ✌ "
  res.render("pages/index", {
    qualitys: items, 
    subtitle: subtitle,
  });
});
app.get("/sobre", function (req, res){
  res.render("pages/about");
});

app.listen(8080);
