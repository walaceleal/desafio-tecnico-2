'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefaSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo')
      table.integer('status')
      table.string('descricao')
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefaSchema
