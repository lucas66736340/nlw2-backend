const knex = require('../database/connection')
const converteHorasMinutos = require('../utils/convertHoursToMinutes')
const { json } = require('express')
const { select } = require('../database/connection')

module.exports = {

    async createClasses(req,res){
        try {
            const {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                horario_aula
        
            } = req.body
            
            const trx = await knex.transaction()
          // cadastrando um professor 
          const idsUsuariosInseridos =  await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            })
        
            const user_id = idsUsuariosInseridos[0]
        
            //cadastrando uma aula de um professor
          const idsClassesInseridas = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
        
         // cadastrando os horarios dessa aula
         const class_id = idsClassesInseridas[0]
        
         //retorna um array de obejetos horario de aula
         const horarioDaAula = horario_aula.map((item)=>{
             return {
                class_id, 
                week_day:item.week_day,
                 from:converteHorasMinutos(item.from),
                 to:converteHorasMinutos(item.to)
             } 
         })
        
            await trx('horario_aula').insert(horarioDaAula)
            await  trx.commit()
            return res.json({message:'cadastrado com sucesso'})
        } catch (error) {
            //desfaz todas as trasacoes 
           
             return res.json({error:'Ou um erro agora nao sei quanl foi man'})
        }
    },

    async showClasses(req,res){
        //filtros da requisicao
        const filters = req.query
        if(!filters.week_day || !filters.subject || !filters.time){
            const classes = await knex.select('*').from('classes')
            .join('users','classes.user_id','=','users.id')
          
          
            return res.json(classes)
        }else{
            const timeInMinutes = converteHorasMinutos(filters.time)
        
            const classes = await knex('classes')
            .where('classes.subject','=',filters.subject).
            join('users','classes.user_id','=','users.id')
            .join('horario_aula','horario_aula.class_id','=','classes.id')
            .where('horario_aula.week_day','=',filters.week_day)
            .where('horario_aula.from','<=',timeInMinutes)
            .where('horario_aula.to','>',timeInMinutes)
            .select('*')
    
            
            return res.json(classes)

        }

       
    }

}