const { render } = require("ejs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

let pokedex = [];
let message = "";


app.get("/", function (req, res) {

  res.render("index",
  message,
  

)});
    
 


app.get("/cadastro", (req, res) => {
  res.render("cadastro")
  
});
app.post("/cadastro", (req, res) =>{
  const { numero, nome, tipo, altura, peso, categoria, habilidade } = req.body;
  let obj1 = { numero: numero, nome: nome, tipo: tipo, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade };
  pokedex.push(obj1);
  res.redirect("/")
});




app.get("/detalhes", (req, res) => {
  res.render
  let pokedetalhe = pokedex.find(x => x.numero == detalhe)
  

});
  


  






app.listen(3000);