//essa funcao precissa sempre retornar uma promisse o up cria o down destroi
exports.up = function(knex) {
    return knex.schema.createTable('horario_aula',function(table){
      //atributos da tabela 
      table.increments('id').primary()
      table.integer('week_day').notNullable() //dia da semana 
      table.integer('from').notNullable() // das 
      table.integer('to').notNullable() // ate

      //horarios estão relacionados com as aulas  
      table.integer('class_id').unsigned().references('classes.id').notNullable().onDelete('CASCADE')
    
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('horario_aula')
  };
  