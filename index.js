let nomeHeroi = "nairutus";
let quantidadeXp1 = 5500;
let quantidadeXp2 = 3000;


if(quantidadeXp1 + quantidadeXp2 < 1000 || quantidadeXp1 <=4999) {
    console.log("O heroi de nome " + nomeHeroi + " está no nivel de " + "Ferro")
} else if(quantidadeXp1 - quantidadeXp2 <= 5000) {
    console.log("O heroi de nome " + nomeHeroi + " está no nivel de " + "Prata")
} else {
    console.log("O heroi de nome " + nomeHeroi + " está no nivel de " + "Ouro")
}