let num = [8, 5, 7, 6, 4]
// num.push(9) --> adiciona mais um indice ao final com o valor dentro do parenteses
num.sort() // --> reorganiza os indices em ordem crescente
console.log(`o primeiro vetor é o  ${num[0]}`)
/*for(let pos = 0;pos<num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`) // NAO PODE ESQUECER O COLCHETE
}*/
for(let pos in num){
    console.log(`o vetor ${pos} tem o valor ${num[pos]}`)
} // essa sintaxe do for( in ) só funciona para arrays e objetos, que são basicamnete a mesma coisa