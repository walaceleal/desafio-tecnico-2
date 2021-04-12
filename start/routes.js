'use strict'

const Route = use('Route');

Route.resource('/api/tarefa', 'TarefaController').apiOnly();
Route.on('/').render('tarefas');