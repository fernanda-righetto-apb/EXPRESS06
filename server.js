const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const mysql_config = require('./mysql_config.js');

const functions = require('./functions.js');

app.listen(3000, () => {
    console.log('Servidor em execução!')
})

app.use(cors())

const connection = mysql.createConnection(mysql_config);

app.get('/', (req,res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if(err){
            res.json(functions.response('casa caiu', 'Erro:'+err.message));
        } else{
            res.json(functions.response('tudo certo', 'Tasks listadas com sucesso', results));
        }
    })
})


//THUNDER CLIENT - extenção do visual studio com o objetivo de testar os endpoints (pontos de chegada, ou seja, onde o site vai chegar)