let nome = document.getElementById('nome').value;

document.getElementById('nomeInput').innerHTML = nome;
//função para quando escrever um nome e apertar o botão,trocara o nome
function pegaNome(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
}
/*
// evento onkeyup no JS

var inputNome = document.getElementById('nome');
inputNome.onkeyup = function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
};
*/

//crindo evento "botao" no JS
var btnTeste1 = document.getElementById('btnTeste1');
/*
evento onclick

btnTeste1.onclick = function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
};
*/

/*
para dispara o evento "onclick"
nesse metodo tirar o on da frente do evento
*/
btnTeste1.addEventListener('click',function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
});

document.getElementById('nome').addEventListener('keyup',function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
});
