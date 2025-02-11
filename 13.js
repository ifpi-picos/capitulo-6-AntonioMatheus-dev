
console.log('Bem vindo ao conversor de moedas')

const opcoes=Number(prompt(`Digite 1 para: converter de dola para reais 
Digite 2 para: converter de reais para dola 
:`))
const moeda=Number(prompt('Digite o valor que deseja converter: '))
let cotacao=5.79


function DolarReal(){
    return moeda*cotacao
}
function RealDolar(){
    return moeda/cotacao


}
if(opcoes==1){
    console.log(`O resultado é igual a: ${DolarReal().toFixed(2)} R$`)
}else if (opcoes==2){
    console.log(`O resultado é igual a: ${RealDolar().toFixed(2)} US$`)
}else{
    console.log('opção iválida')
}