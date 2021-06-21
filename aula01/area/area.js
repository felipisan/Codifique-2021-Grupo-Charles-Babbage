var A, B, area, perimetro;

A = parseFloat(prompt("Digite o valor do lado A: "));
B = parseFloat(prompt("Digite o valor do lado B: "));

area = A * B; 
perimetro = 2 * (A + B);

console.log("A área é: " + area);
console.log("A perímetro é: " + perimetro);

alert("A área é: " + area);
alert("O perímetro é: " + perimetro);
