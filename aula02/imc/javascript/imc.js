var massa = parseFloat(prompt("Digite sua massa: "));
var altura = parseFloat(prompt("Digite sua altura: "));

imc = massa/(altura * altura);

if (imc < 18.5)
  alert("Abaixo do peso. ");

else if (imc < 24.9)
  alert("Peso normal. ");

else 
  alert("Acima do peso. ");



