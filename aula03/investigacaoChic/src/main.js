var indexExec = 1;

var nome, conheciaVitima, arredores, temAlibi, jaBrigou, cometeuCrimes;

var pessoa = {
  nome: document.title,
  conheciaVitima,
  arredores,
  temAlibi,
  jaBrigou,
  cometeuCrimes,
  julgamento
}
console.log("NOME: " + pessoa.nome);

function julgamento(){
  if(pessoa.conheciaVitima && pessoa.arredores && !(pessoa.temAlibi) && pessoa.jaBrigou){
    pessoa.julgamento = "culpada";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é CULPADO.";
    document.body.style.backgroundImage = "url(./src/olhinhos.gif)";
  }

  else if((!(pessoa.temAlibi)) && pessoa.arredores && pessoa.cometeuCrimes){
    pessoa.julgamento = "culpada";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é CULPADO.";
    document.body.style.backgroundImage = "url(./src/olhinhos.gif)";
  }

  else if (pessoa.conheciaVitima && !(pessoa.temAlibi) && !(pessoa.jaBrigou) && !(pessoa.cometeuCrimes)){
    pessoa.julgamento = "muito suspeito";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é MUITO SUSPEITO.";
    document.body.style.backgroundImage = "url(./src/sus.jpeg)";
  }
  
  else if(!(pessoa.conheciaVitima) && !(pessoa.arredores) && !(pessoa.temAlibi) && pessoa.cometeuCrimes){
    pessoa.julgamento = "muito suspeito";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é MUITO SUSPEITO.";
    document.body.style.backgroundImage = "url(./src/sus.jpeg)";
  }

  else if(pessoa.conheciaVitima && (pessoa.arredores || pessoa.jaBrigou)){
    pessoa.julgamento = "pouco suspeito";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é MUITO SUSPEITO.";
    document.body.style.backgroundImage = "url(./src/sus.jpeg)";
  }

  else {
    pessoa.julgamento = "inocente";
    console.log(pessoa.julgamento);
    document.getElementById("pergunta").innerHTML = pessoa.nome + ", você é POUCO SUSPEITO :3 OwO";
    document.getElementById("pergunta").style.color = "#000";
    document.body.style.backgroundImage = "url(./src/ino.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat ="no repeat";
    
  }
}

function reloadKeyframe(){
  document.getElementById("pergunta").classList.add("ativaKeyframe");
}

function alterarTexto() {
  switch (indexExec) {
    case 2:
      document.getElementById("pergunta").innerHTML = "Você estava nos arredores do local do crime?";
      break;
    case 3:
      document.getElementById("pergunta").innerHTML = "Você tem algum álibi?";
      break;
    case 4:
      document.getElementById("pergunta").innerHTML = "Você já brigou por qualquer motivo com a vítima?";
      break;
    case 5:
      document.getElementById("pergunta").innerHTML = "Você já havia cometido algum crime semelhante antes?";
      break;   
    default:
      julgamento();
      break;
  }
}




function execSim() {
  if (indexExec == 1)
    pessoa.conheciaVitima = true;
  else if (indexExec == 2)
    pessoa.arredores = true;
  else if (indexExec == 3)
    pessoa.temAlibi = true;
  else if (indexExec == 4)
    pessoa.jaBrigou = true;
  else
    pessoa.cometeuCrimes = true;

  ++indexExec;
  alterarTexto();
}

function execNao() {
  if (indexExec == 1)
    pessoa.conheciaVitima = false;
  else if (indexExec == 2)
    pessoa.arredores = false;
  else if (indexExec == 3)
    pessoa.temAlibi = false;
  else if (indexExec == 4)
    pessoa.jaBrigou = false;
  else
    pessoa.cometeuCrimes = false;

  ++indexExec;
  alterarTexto();
}

document.getElementById("btnYes").addEventListener("click", execSim);
document.getElementById("btnYes").addEventListener("click", reloadKeyframe);
document.getElementById("btnNo").addEventListener("click", execNao);







