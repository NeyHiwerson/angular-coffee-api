//Importa as dependências que acabamos de instalar

//importar o express
const express = require("express");
//iniciar o express
const app = express();
//nome da pasta no distque sera feito o biuld
const appName = 'angular-coffee-api';
//local onde biuld ira gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;
//Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(outputPath));
//Redirecionar qualquer requisição para o index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${outputPath}/index.html`));
});

// Inicia a aplicação pela porta configurada e
//ouvir a porta que o Heroku disponibilizar
app.listen(process.env.PORT || 8080);

//const path = require("path");
