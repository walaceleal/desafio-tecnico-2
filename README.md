# Desafio Técnico
Este é o resultado do desafio proposto. Devido a limitações de tempo:
- Desenvolvi um  Layout extremamente básico
- Não escrevi os testes, validações ou feedbacks que deveriam ser implementados

### Tecnologias
* [AdonisJs]
* [NodeJs]

### URL de Teste
* [walaceleal.com.br]

### Instalação
Preencha os dados do .env
```js
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```
Instale as dependências, execute as migrações e inicie o servidor.
```sh
$ npm install
$ adonis migration:run
$ adonis serve --dev
```

### Rotas
Todas as rotas do backend são prefixadas de `/api`
- listar : `GET /tarefa`
- criar : `POST /tarefa`
- atualizar : `PUT /tarefa/:id`
- detalhar : `GET /tarefa/:id`
- deletar : `DELETE /tarefa/:id`

[AdonisJs]: <http://adonisjs.com/>
[NodeJs]: <https://nodejs.org/>
[Walace Leal]: <https://www.99freelas.com.br/user/walaceleal>
[walaceleal.com.br]: <http://walaceleal.com.br:3334/>