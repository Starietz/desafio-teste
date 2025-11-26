let nome = "Emerson"
let quantidadeXp = 5005

 if(quantidadeXp < 1000){
    console.log("Você é Ferro")
 }else if (quantidadeXp >= 1001 && quantidadeXp <= 2000){
    console.log("Você é Bronze")
 }else if (quantidadeXp >= 2001 && quantidadeXp <= 5000 ){
    console.log("Você é Prata")
 }else if(quantidadeXp >= 5001 && quantidadeXp <= 7000){
    console.log("Você é Ouro")
 }else if(quantidadeXp >= 7001 && quantidadeXp <=8000){
    console.log("Você é Platina")
 }else if(quantidadeXp >= 8001 && quantidadeXp <= 9000){
    console.log("Você é Ascendente")
 }else if(quantidadeXp >= 9001 && quantidadeXp <= 10000){
    console.log("Você é Imortal")
 }else {
    console.log("Você é Radiante")
 }
 console.log("O herói de nome :" + nome + " está no nível de " + quantidadeXp)
