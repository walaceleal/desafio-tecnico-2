'use strict'

const Route = use('Route');

Route.resource('/tarefa', 'TarefaController').apiOnly();;