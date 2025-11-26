let nome = "Emerson"
let quantidadeXp = 5005

let nivel = ""

if (quantidadeXp < 1000) {
    nivel = "Ferro"
} else if (quantidadeXp <= 2000) {
    nivel = "Bronze"
} else if (quantidadeXp <= 5000) {
    nivel = "Prata"
} else if (quantidadeXp <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXp <= 8000) {
    nivel = "Platina"
} else if (quantidadeXp <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome:" + nome + " está no nível de: "+ quantidadeXp)
