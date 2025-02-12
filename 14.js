//IMC = peso / (altura x altura
//A classificação do IMC é: 
//Menor que 18,5: Magreza
//Entre 18,5 e 24,9: Normal
//Entre 25,0 e 29,9: Sobrepeso
//Entre 30,0 e 39,9: Obesidade
//Maior que 40,0: Obesidade Grave

//Usando funções, escreva um programa que solicita ao usuário sua altura e peso e calcula
//o IMC. Em seguida, exibe o resultado e uma mensagem indicando se a pessoa está abaixo
//do peso, no peso normal, com sobrepeso ou obesa

let peso=Number(prompt("Informe o seu peso"))
let altura=Number(prompt("Informe a sua altura"))
function CalculaIMC(){
    return peso/(altura*altura)

}
let resultado=CalculaIMC()

function ResultadoIMC(){
    if(resultado<=18.5){
        return(`O seu IMC é igual a: ${resultado.toFixed(2)}
Magreza`)
    }else if(resultado>18.5 && resultado<=24.9){
        return(`O seu IMC é igual a: ${resultado.toFixed(2)}
Normal`)
    }else if(resultado >=25.0 && resultado<=29.9){
        return(`O seu IMC é igual a: ${resultado.toFixed(2)}
Sobrepeso`)
    }else if(resultado >=30.0  && resultado<=39.9){
        return(`O seu IMC é igual a: ${resultado.toFixed(2)}
Obesidade`)
    }else if(resultado>=40.0){
        return(`O seu IMC é igual a: ${resultado.toFixed(2)}
Obesidade Grave`)
    }else{
        return('Ivalido')
    }
}
console.log(ResultadoIMC())