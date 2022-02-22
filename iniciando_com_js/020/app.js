
class Util{
  static lista(lista){
    let html = '<ul>';
      for (let item of lista) {
        html += `
        <li>${item}</li>
        `;
      }

      html += '</ul>';
      return html;
    }
}

let lista = ["Murilo","Camila","Djavan"];
document.getElementById('listausuarios').innerHTML = Util.lista(lista);


/* let Nome = "<h3>Djavan</h3>";
//metodo para colocar o nome "Djavan" dentro da div ID
//get chama os elementos pra chamar o nome na div
document.getElementById('nomeUsuario').innerHTML = Nome; //metodo para chamar um ID

//metodo para alterar todos os elemetos com uma class

let elementos = document.getElementsByClassName('nome-usuario');
console.log(elementos); // visualizar lista de elementos no console da pagina
//colocar nome para dentro dos elementos
//pode ser feito co o for of
for(let item of elementos){
 item.innerHTML += "<h3>Maria</h3>";

 metodo usado para camar os nomes nas páginas
}  */
