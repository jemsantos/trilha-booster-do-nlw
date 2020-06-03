import express from 'express'

const app = express();

/* para criar uma REST */
app.use(express.json());

/*
  Rota: endereço completo da requisição
  Recurso: qual entidade do sistema estamos acessando

  GET: buscar uma ou mais informações do back-end
  POST: criar uma nova informação no back-end
  PUT: atualizar uma informação existente no back-end
  DELETE: remover uma informação do back-end

  POST /users   => criar um usuário
  GET  /users   => listar usuários
  GET  /users/5 => buscar os dados do usuário de ID 5

  Request Param: Parametros que vem na propria rota que identificam um recurso
  Query Param: Parametros que vem na propria rota, geralmente opcionais, para filtros ou paginação
  Request Body: Parametros para criação/atualização de informações
*/

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    /* console.log('Listagem de usuários');
    response.send('Hello World'); */

    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);
