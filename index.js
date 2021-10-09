const { render } = require("ejs");
const express = require("express");
const app = express();
var port = process.env.PORT || 8080;
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [];
let message = "";


app.get("/", function (req, res) {

  setTimeout(() => {
    message = "";
  }, 1000);


  res.render("index",{
  message,
  pokedex
  });

});
    
 


app.get("/cadastro", (req, res) => {
  res.render("cadastro")
  
});


app.get("/detalhes/:indice",(req,res) =>{
  const indice = parseInt(req.params.indice);
  const pokemon = pokedex[indice];
  res.render("detalhes",{ pokemon })

});



app.get("/detalhes", (req, res) => {
  res.render("detalhes",
  pokedex)
 

});

app.post("/cadastro",(req, res) =>{
  const {numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;

  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade

  })
  message = 'Seu pokémon foi realizado com sucesso'
  res.redirect("/");
});


  


  






app.listen(8080);