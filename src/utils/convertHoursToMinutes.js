function converteHorasParaMinutos(string){
   const array = string.split(':')
   const horas = array[0]
   const minutos = array[1]
   const tempoMinutos  = ((horas * 60)+parseInt(minutos))
 
    return tempoMinutos
}




 module.exports = converteHorasParaMinutos