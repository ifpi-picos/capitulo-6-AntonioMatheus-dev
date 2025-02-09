
let nota1=Number(prompt('Digite a primeira nota: '))
const numero1=parseFloat( nota1)

let nota2=Number(prompt('Digite a segunda nota: '))
const numero2=parseFloat(nota2)

let nota3=Number(prompt('Digite a terceira nota: '))
const numero3=parseFloat(nota3)

function media(a,b,c){
    return (a+b+c)/3
}

const resultado=(media(nota1,nota2,nota3))
console.log(`A Média dos três numeros é igual a ${resultado}`)
