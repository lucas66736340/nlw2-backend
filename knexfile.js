// configuraçoes do banco de dados 

module.exports = {

    development: {
      client: 'mysql2',
      connection: {
        database:'proffy',
        user:'root',
        password:'creative@2020',
        port:3306,
        host:'localhost'
  
      },
      migrations:{
        directory:`${__dirname}/src/database/migrations`
      }
    },
  
  };
  