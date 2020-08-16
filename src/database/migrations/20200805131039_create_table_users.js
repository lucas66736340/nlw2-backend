//essa funcao precissa sempre retornar uma promisse o up cria o down destroi
exports.up = function(knex) {
    return knex.schema.createTable('users',function(table){
      //atributos da tabela 
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('avatar').notNullable()
      table.string('whatsapp').notNullable()
      table.string('bio').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  
    })
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('users')
  };
  