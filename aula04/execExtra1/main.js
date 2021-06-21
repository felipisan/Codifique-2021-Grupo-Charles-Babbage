var nome = prompt("Digite o nome do aluno: ");
document.write("Nome do aluno: " + nome + "<br>");

var nota = new Array();
for (var i = 0; i < 3; i++){
    nota[i] = parseFloat(prompt("Digite a " + (i + 1) + "ª nota do(a) : " + nome));
    document.write("Nota " + (i + 1) + " do aluno: " + nota[i] + "<br>");
}
var mediaExecs = parseFloat(prompt("Digite a média de exercícios do(a) : " + nome));
document.write("Média dos exercícios do aluno: " + mediaExecs + "<br>");

var ma = ((nota[0] + (nota[1] * 2) + nota[2] * 3) + mediaExecs)/7;
document.write("O aluno obteve: " + ma + " de média de aproveitamento" + "<br>");

var msg;
if (ma >= 9)
    msg = "Aprovado com categoria A";
else if(ma >= 7.5 && ma < 9)
    msg = "Aprovado com categoria B";
else if(ma >= 6 && ma < 7.5)
    msg = "Aprovado com categoria C";
else if(ma >= 4 && ma < 6)
    msg = "Reprovado com categoria D";
else
    msg = "Reprovado com categoria E";

document.write(msg);

