var a, b, c, delta, x1, x2;

// Equação de segundo grau: 
// ax² + bx + c = 0
a = parseFloat(prompt("Digite o coeficiente a: "));
b = parseFloat(prompt("Digite o coeficiente b: "));
c = parseFloat(prompt("Digite o coeficiente c: "));

// Pow = power = potência = b²
// Δ = b² - 4ac  
delta = Math.pow(b, 2) - 4 * a * c;

// x1 = - b + √Δ/2a
// x2 = - b - √Δ/2a
x1 = (- b + Math.sqrt(delta))/2 * a; 
x2 = (- b - Math.sqrt(delta))/2 * a; 

alert("As raízes são:\n\n\nx1 = " + x1 + "\nx2 = " + x2);

// 1: parênteses (a+b)^2
// 2: potência (^) e raíz (√)
// 3: * / 
// 4: + - 