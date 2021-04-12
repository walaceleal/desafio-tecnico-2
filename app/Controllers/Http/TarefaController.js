'use strict'

const Tarefa = use('App/Models/Tarefa.js');

class TarefaController {
  /**
   * Show a list of all tarefas.
   * GET tarefas
   */
  async index ({ request, response, view }) {
    return await Tarefa.all();
  }

  /**
   * Create/save a new tarefa.
   * POST tarefas
   */
  async store ({ request, response }) {
    const dados = request.only(["titulo", "descricao", "status"]);
    await Tarefa.create(dados);
  }

  /**
   * Display a single tarefa.
   * GET tarefas/:id
   */
  async show ({ params, request, response, view }) {
    return await Tarefa.findOrFail(params.id);
  }

  /**
   * Update tarefa details.
   * PUT or PATCH tarefas/:id
   */
  async update ({ params, request, response }) {
    const tarefa = await Tarefa.findOrFail(params.id);
    const dados = request.only(["descricao", "titulo", "status"]);
    
    tarefa.fill({
      id : tarefa.id,
      ...dados
    });
    
    await tarefa.save();
  }

  /**
   * Delete a tarefa with id.
   * DELETE tarefas/:id
   */
  async destroy ({ params, request, response }) {
    const tarefa = await Tarefa.findOrFail(params.id);
    await tarefa.delete();
  }
}

module.exports = TarefaController
