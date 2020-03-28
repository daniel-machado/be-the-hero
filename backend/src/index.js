const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
    * Métodos HTTP:
    *
    * GET: Buscar uma informação de Backend
    * POST: Criar uma informação no backend
    * PUT: Alterar uma informação no Backend
    * DELETE: deletar um informação no backEnd
    * 
*/

/*
    * Tipos de parâmetros
    *
    * Query: Parametros nomeados e enviados na rota após "?" (Filtros, paginação)
    * Route params: parametros utilizados para identificar recursos
    * Request Body: 
    * 
*/

/*
    * SQL: MySql, SqLite, PostgreSql, oracle
    * NOSQL: MongoDB, CouchDB, etc
    * 

*/




app.listen(3333);