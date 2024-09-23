//index.js
const express = require('express');
const app = express();
const port = 300;

//Dados temporários armazenados em arrays
let dadosSaneamento = [
  {id:1,tipo:'água',descrição:'Fornecimento de água potável'},
  {id:2, tipo:'esgoto',descrição:'tratamento de esgoto'} 
];

//Mediddle para permitir o uso de jso]
app.use(express.json())

//rota para obeter todos os dados
app.get('/dados', (req,res)=>{
  arguments.json(dadosSaneamento);
});

//Rotas para obter um dado especifico por id
app.get('/dados',(req,res)=>{
  const id = parselnt(req.params.id,10);
  const dado = dadosSaneamento.find(d=>d.id===id);
if(dado){
  res,express.json(dado);
}else{
  res.status(404).send('Dado não encontrado');
}
});

// Rota para adicionar um novo dado
app.post('/dados', (req, res) => {
  const novoDado = req.body;
  dadosSaneamento.push(novoDado);
  res.status(201).json(novoDado);
});

// Rota para atualizar um dado existente
app.put('/dados/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = dadosSaneamento.findIndex(d => d.id === id);
  if (index !== -1) {
    dadosSaneamento[index] = req.body;
    res.json(dadosSaneamento[index]);
  } else {
    res.status(404).send('Dado não encontrado');
  }
});

// Rota para excluir um dado
app.delete('/dados/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  dadosSaneamento = dadosSaneamento.filter(d => d.id !== id);
  res.status(204).send();
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


// const mensagemRoutes = require('./mensagemRoutes');

app.use(express.json()); // Para interpretar JSON no corpo das requisições
// app.use('/api', mensagemRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});