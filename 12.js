console.log('bem vindo a minha Calculadora JS \n');

const PrimeiroNumero=Number(prompt('Digite o primeiro Número: '));
const SegundoNumero=Number(prompt('Digite o segundo Número: '));

let operação=parseFloat(prompt(`esclha a operação: 
    1-Soma 
    2-multiplicação
    3-Subtração
    4-divisão 
    : `));

    function soma(){
        return PrimeiroNumero+SegundoNumero
    }
    function multiplicacao(){
        return PrimeiroNumero*SegundoNumero
    }

    function Subtracao(){
        return PrimeiroNumero-SegundoNumero
    }
    function divisao(){
        return PrimeiroNumero/SegundoNumero

    }
    if(operação=='1'){
        console.log(`Resultado:${soma()}`)
    }else if(operação=='2'){
        console.log(`Resultado: ${multiplicacao()}`)
    }else if(operação=='3'){
     console.log(`Resultado: ${Subtracao()}`)
    }else if(operação=='4'){
       console.log(`resultado:${divisao()}`)
    }else{
         console.log('Operação iválida')}

   
