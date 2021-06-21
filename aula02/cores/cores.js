var cor1, cor2;

cor1 = prompt("Digite a sua primeira cor: ");
cor1 = cor1.toLowerCase();
cor2 = prompt("Digite a sua segunda cor: ");
cor2 = cor2.toLowerCase();

if((cor1 == "amarelo" && cor2 == "azul") || (cor1 == "azul" && cor2 == "amarelo")){
  alert("Cor resultante: Verde");
}
else if((cor1 == "azul" && cor2 == "vermelho") || (cor1 == "vermelho" && cor2 == "azul")) {
  alert("Cor resultante: Roxo");
}
else if((cor1 == "amarelo" && cor2 == "vermelho") || (cor1 == "vermelho" && cor2 == "amarelo")){
  alert("Cor resultante: Laranja");
}
