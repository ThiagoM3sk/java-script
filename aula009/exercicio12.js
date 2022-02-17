var agora = new Date() //é sempre new Date() para pegar um dado, seja hora, minutos, segundos etc.
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite')
}