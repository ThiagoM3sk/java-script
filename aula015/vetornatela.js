let num = [8, 5, 4, 6, 1, 2, 3]
num.push(7)
num.sort()

let pos = num.indexOf(6) /* --> procura no vetor o valor dentro do parentese, ao encontrar mostra em qual indice está,
se não encontrar, o resultado fica -1 */
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`esse valor fica na posição ${pos}`) 
}/*
for(let pos in num){ // para cada indice dentro de num
    console.log(`o valor de ${pos} fica na posição ${num[pos]}`)
}*/