//essa funcao precissa sempre retornar uma promisse o up cria o down destroi
exports.up = function(knex) {
    return knex.schema.createTable('connection',function(table){
      //atributos da tabela 
      table.increments('id').primary()
     //relaciona com a tabela usuarios  para saber quantas conexoes entre alunos e professores foram feitas e quando foram
      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')
    
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('connection')
  };
  