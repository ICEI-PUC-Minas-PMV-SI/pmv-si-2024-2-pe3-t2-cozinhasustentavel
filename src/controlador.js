let ingredientes;

fetch("http://localhost:3003/ingredientes", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
}
)
  .then((response) => response.json())
  .then((data) => ingredientes = data);

let ingredientCategories;
let recipeCategories;

fetch("http://localhost:3003/categorias", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
}
)
  .then((response) => response.json())
  .then((data) => {
    ingredientCategories = data.length > 0 && data.filter(categoria => {
      return categoria.tipo === "ingrediente"
    });

    recipeCategories = data.length > 0 && data.filter(categoria => {
      return categoria.tipo === "Receita"
    });

    console.log("ingr", ingredientCategories)
    console.log("recipe", recipeCategories)

    const recipeCategoriesDiv = document.getElementById("categoriaReceita")
    const noItemsDiv = recipeCategoriesDiv.getElementsByClassName("text-center");
    noItemsDiv[0].style.display = "none";

    const recipeCategoriesContent = recipeCategoriesDiv.getElementsByClassName("conteudo-categoriaReceita");
    recipeCategoriesContent[0].style.display = "block";

    recipeCategoriesContent[0].innerHTML = mapListData(recipeCategories, "editarCategoriaReceita", "deletarCategoriaReceita");
  });

const currentUrl = window.location.href;
const slashWherePathBegins = currentUrl.indexOf("/");
const baseUrl = currentUrl.slice(0, slashWherePathBegins);

// estrutura do jQuery:
// $('seletor do elemnto').funçãoParaExecutar('parametro quando necessario')
// ex.:
// $('#idDeUmBotao').click((event)=>{
//     conteudo a ser executado
// })

// seletores:
/*
. class
# id
'input' elemento
*/

// condições para seleção
// $('input[type="number"]'): pega todos os inputs que tenham o type number
// estrutura: $('elemento[atribulto="valor"]')
// $('input:not(input[type="number"])'): pega todos os inputs que não tenham o type number
// estrutura: $('elemento:função(elemento[atribulto="valor"])')

// exeplo para admin e usuario comum
// alterne entre "admin" e "normal"
let usuario = JSON.parse(localStorage.getItem("user"));

// Quando o document estiver totalmente carregado ele executara
$(document).ready(function () {
  if (usuario.papel == "admin") {
    $(".onlyAdmin").show();
  } else {
    $(".onlyAdmin").hide();
  }
  // Quando o botão de menu (hamburger) for clicado
  $("#menu-toggle").click(function () {
    // Alterna a exibição da lista
    $(".container-menu").toggle();
  });

  // Logout:
  $("#menu").click(() => {
    localStorage.removeItem("user");
    window.location.href = `${baseUrl}/login/login.html`;
  })

  $("#addIngrediente").click((e) => {
    // pega o "e" do parametro passado no arrow function e localiza qualbotão foi clicado
    const btn = e.target;
    let option = "";

    // laço de repetição que navega para cada um dos itens da lista e adiciona na opção
    ingredientes.forEach((ingrediente) => {
      option += `
            <option value="${ingrediente.id}">${ingrediente.nome}</option>
            `;
    });

    // navega ate a div que recebera os ingredientes e adiciona os inputs necessarios para preenchimento
    // $(btn): localiza quem recebeu o clik para rodar a função
    // .parent(): pega o pai do elemento selecionado
    // .next(): pega o proximo irmão do elemento selecionado
    // .find(PARAMETRO): procura dentro do elemento selecionado todos os filhos que correspondem ao parametro (filho, neto, bisneto...)
    // .append(HTML): insere no final do elemento selecionado o html que for passado como paramentro (não sobrescreve o conteudo ja contido no elemnto)
    $(btn).parent().parent().next().find(".containerIngredientes").append(`
            <div class="row">
                <div class="col-md-7">
                    <label for="ingrediente">Ingrediente:</label>
                    <select name="ingrediente" class="form-control ingrediente">
                        <option value=""></option>
                        ${option}
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="quantidade">Quantidade:</label>
                    <input type="number" name="quantidade"
                        class="form-control quantidade">
                </div>
                <div class="col-md-2">
                    <label for="medidas">Medidas:</label>
                    <select name="medidas" class="form-control medidas">
                        <option value=""></option>
                        <option value="Litro">Litro</option>
                        <option value="Mililitro">Mililitro</option>
                        <option value="Xícara">Xícara</option>
                        <option value="Meia xícara">Meia xícara</option>
                        <option value="1/3 de xícara">1/3 de xícara</option>
                        <option value="1/4 de xícara">1/4 de xícara</option>
                        <option value="Medidas de Colheres">Medidas de Colheres</option>
                        <option value="Colher de sopa">Colher de sopa</option>
                        <option value="Colher de sobremesa">Colher de sobremesa</option>
                        <option value="Colher de chá">Colher de chá</option>
                        <option value="Colher de café">Colher de café</option>
                        <option value="Pitada">Pitada</option>
                        <option value="Punhado">Punhado</option>
                        <option value="Barrica">Barrica</option>
                        <option value="Mililitro">Mililitro</option>
                        <option value="Centilitro">Centilitro</option>
                        <option value="Decilitro">Decilitro</option>
                        <option value="Gramas">Gramas</option>
                        <option value="Quilograma">Quilograma</option>
                    </select>
                </div>
                <div class="col-md-1">
                    <label for="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <button class="btn btn-danger deleteRow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </button>
                </div>
            </div>
        `)
  })

  $('#addCategoria').click((e) => {
    // pega o "e" do parametro passado no arrow function e localiza qualbotão foi clicado
    const btn = e.target
    let option = ""

    // laço de repetição que navega para cada um dos itens da lista e adiciona na opção
    ingredientes.forEach((ingrediente) => {
      option += `
            <option value="${ingrediente}">${ingrediente}</option>
            `
    })

    // navega ate a div que recebera os ingredientes e adiciona os inputs necessarios para preenchimento
    // $(btn): localiza quem recebeu o clik para rodar a função
    // .parent(): pega o pai do elemento selecionado
    // .next(): pega o proximo irmão do elemento selecionado
    // .find(PARAMETRO): procura dentro do elemento selecionado todos os filhos que correspondem ao parametro (filho, neto, bisneto...)
    // .append(HTML): insere no final do elemento selecionado o html que for passado como paramentro (não sobrescreve o conteudo ja contido no elemnto)
    $(btn).parent().parent().next().find('.containerCategoria').append(`
            <div class="row">
                <div class="col-md-11">
                    <label for="categoria">Categoria:</label>
                    <select name="categoria" class="form-control categoria">
                        <option value=""></option>
                        ${option}
                    </select>
                </div>
                <div class="col-md-1">
                    <label for="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <button class="btn btn-danger deleteRow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </button>
                </div>
            </div>
        `)
  })

  // maneira correta de manipular o click do botão quando sabemos que ele não existira quando o navegador carregar a pag
  $(document).on('click', '.deleteRow', (e) => { // serve tanto para ingrediente quanto para categoria, pois tem a mesma estrutura
    const btn = e.target

    $(btn).parents(".row").first().remove();
  });

  // controlador do menu
  $("#seguindoMenu").click(() => {
    $(".nav-link").removeAttr("style"); // remove o atribulto passado como parametro
    $("#seguindo").show(); // mostra o elemento removendo o "display: none" no style
    $("#seguidores").hide(); // esconde o elemento inserindo o "display: none" no style
    $("#minhasReceitas").hide();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    // adiciona uma linha abaixo do escrito do elemnto
    $("#seguindoMenu").attr("style", "text-decoration: underline;"); // adiciona no atribulto passado como primeiro parametro o conteudo passado no segundo parametro
  });
  $("#seguidoresMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").show();
    $("#minhasReceitas").hide();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#seguidoresMenu").attr("style", "text-decoration: underline;");
  });
  $("#minhasReceitasMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").show();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#minhasReceitasMenu").attr("style", "text-decoration: underline;");
  });
  $("#categoriaReceitaMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#categoriaReceita").show();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#categoriaReceitaMenu").attr("style", "text-decoration: underline;");
  });
  $("#categoriasIngredientesMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").show();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#categoriasIngredientesMenu").attr(
      "style",
      "text-decoration: underline;"
    );
  });
  $("#ingredientesMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").show();
    $("#solicitacoes").hide();
    $("#ingredientesMenu").attr("style", "text-decoration: underline;");
  });
  $("#solicitacoesMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#categoriaReceita").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").show();
    $("#solicitacoesMenu").attr("style", "text-decoration: underline;");
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Quando o botão de menu (hamburger) for clicado
//     const menuToggle = document.getElementById('menu-toggle');
//     const menu = document.getElementById('menu');

//     menuToggle.addEventListener('click', function () {
//         // Alterna a exibição da lista
//         if (menu.style.display === 'none' || menu.style.display === '') {
//             menu.style.display = 'block';
//         } else {
//             menu.style.display = 'none';
//         }
//     });
// });

// ala

function mapListData(array, editButtonId, deleteButtonId) {

  const list = array.map((item) => {
    return `<li>
        <p>${item.nome}</p>
        <div>
          <button id="${editButtonId}" class="btn btn-verde btn-modal" data-bs-toggle="modal"
            data-bs-target="#${editButtonId}">
            Editar
          </button>
          <button id="${deleteButtonId}" class="btn btn-laranja btn-modal" data-bs-toggle="modal"
            data-bs-target="#${deleteButtonId}">
            Deletar
          </button>
        </div>
      </li> `
  });

  // transformar array em string e remover a virgula entre os <li>
  const strigifiedList = list.join().replaceAll(",", "")

  return ` <ul class="lista-conteudo-sem-imagem">${strigifiedList}</ul>`;
}
