var numero = parseFloat(prompt("Digite o " + (i + 1) + "º número: "));
var max = numero;

for (var i = 1; i < 10; i++){
  numero = parseFloat(prompt("Digite o " + (i + 1) + "º número: "));
  if(numero > max)
    max = numero;
}

document.write("O maior número digitado foi: " + max);