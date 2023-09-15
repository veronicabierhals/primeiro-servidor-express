const express = require("express");

const app = express();

//criação de uma rota
app.get("/home", (requisicao, resposta) => {
    resposta.send("Olá... esse é o meu primeiro servidor com o express");
});
//acessar pelo navegador
//http://localhost:3000/home

app.get("/", (requisicao, resposta) => {
    resposta.send("Essa é a minha rota principal");
});
//acessar pelo navegador
//http://localhost:3000/

app.get("/array", (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5]
    resposta.send(array);
});

//ouve a porta nº da porta
app.listen();

//acessar pelo navegador
//http://localhost:3000/home