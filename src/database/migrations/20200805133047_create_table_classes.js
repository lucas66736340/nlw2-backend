//essa funcao precissa sempre retornar uma promisse o up cria o down destroi
exports.up = function(knex) {
    return knex.schema.createTable('classes',function(table){
      //atributos da tabela 
      table.increments('id').primary()
      table.string('subject').notNullable()
      table.decimal('cost').notNullable()
      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('classes')
  };
  