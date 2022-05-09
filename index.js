//importa o express
const express = require('express'); 

//chama a função express
const server = express(); 

// CRIANDO A ROTA TESTE 
server.get('/teste', (req, res) => {
    console.log('dentro da rota');
    return res.json({ message: 'Hello world' });
})
//porta que o servidor vai ouvir
server.listen(3000); 
