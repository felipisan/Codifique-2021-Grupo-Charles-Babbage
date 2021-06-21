var num = 0, media = 0, soma = 0, contador = 0;

while(num != -1){
  num = parseFloat(prompt("Digite o " + (contador + 1) + "º número: "));
  if (num != -1){
    ++contador;
    soma += num; 
    document.write("A " + contador + "ª nota é: " + num + "<br>");
  }
}

media = soma/contador;
document.write("A média calculada foi: <br>" + media);
