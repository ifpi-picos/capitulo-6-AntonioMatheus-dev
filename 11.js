function gerarnumero(){
    return Math.floor(Math.random()*100)+1
    
}
 function jogar(){
    const numero=(gerarnumero())
    let tentaivas=10

    console.log(`Bem-vindo a jogo de adivinhação !!`)
    console.log(`Você tem ${tentaivas} tentativas para adivinhar um número de 1 a 100\n`)

    while (tentaivas>0){
let palpite=parseInt(prompt(`Digite o seu palpite: `))
if(palpite<1|| palpite>100){
    console.log('Por favor, digite um número de 1 a 100')
    continue;
}
tentaivas--
if(palpite===numero){
    console.log(`Parabéns! voçê acertou em ${10-tentaivas} tentativas!`)
    return;
}else if(palpite<numero){
    console.log('Um pouco mais alto')
}else{
    console.log('Um pouco mais baixo')
}
    }

    console.log(`Você perdeu :( \nAs tentativas acabaram`)
    console.log(`O número secreto era ${numero}`)
 }

 jogar();