const knex = require('../database/connection')

module.exports = {

    async createConnection(req,res){
        //id do professor que esta associado com aquela aula 
        const {user_id} = req.body
        await knex('connection').insert({
            user_id
        })
        res.status(201).send()
    },

    async showConnection(req,res){
        const totalConnectios = await knex('connection').count('* as total')
        const {total} = totalConnectios[0]
        
        return res.json({total}) 

    }
    

}