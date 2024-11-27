async function editarUsuario(user) {
  await fetch(`http://localhost:3003/usuarios/${user.id}`, {
    method: "PUT", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })

}

async function getIngredientes() {
  let response = await fetch("http://localhost:3003/ingredientes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  return await response.json();
}

async function getUsuarioById(id) {
  console.log(id)
  let response = await fetch(`http://localhost:3003/usuarios/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  return await response.json();

}

async function getReceitas() {
  let response = await fetch("http://localhost:3003/receitas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  return await response.json();
}

async function getReceitaById(id) {
  let response = await fetch(`http://localhost:3003/receitas/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  return await response.json();
}

async function getCategorias() {

  let response = await fetch("http://localhost:3003/categorias", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }
  )
  let data = await response.json()

  return {
    ingredientCategories: data.length > 0 && data.filter(categoria => {
      return categoria.tipo === "ingrediente"
    }),

    recipeCategories: data.length > 0 && data.filter(categoria => {
      return categoria.tipo === "Receita"
    })
  }
}

async function addReceita(nome, modoPreparo, nomeImg, categorias, ingredientes, idUsuario) {
  let response = await fetch("http://localhost:3003/receitas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "id": `id-${Math.random()}`,
      "titulo": nome,
      "descricao": modoPreparo,
      "imagem": nomeImg,
      "avaliacao": [],
      "categorias": categorias,
      "ingredientes": ingredientes,
      "idDoAutor": idUsuario
    })
  });


  return await response.json();
}

async function editReceita(id, nome, modoPreparo, nomeImg, categorias, ingredientes, idUsuario) {
  let response = await fetch(`http://localhost:3003/receitas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "id": `id-${Math.random()}`,
      "titulo": nome,
      "descricao": modoPreparo,
      "imagem": nomeImg,
      "avaliacao": [],
      "categorias": categorias,
      "ingredientes": ingredientes,
      "idDoAutor": idUsuario
    })
  });


  return await response.json();
}

async function delReceita(id) {
  let response = await fetch(`http://localhost:3003/receitas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });


  return await response.json();
}


let nomeImagem
async function uploadImagem() {
  const formData = new FormData(); // Cria um objeto FormData para enviar a imagem

  // Usando jQuery para pegar o input de arquivo
  const fileInput = $('#fileInput')[0]; // Pega o input de arquivo usando jQuery e acessa o DOM real [0]

  // Verifica se o usuário selecionou um arquivo
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0]; // Pega o primeiro arquivo selecionado
    formData.append('imagem', file); // Adiciona o arquivo ao FormData

    try {
      const response = await fetch(`http://localhost:3003/upload/upload`, {
        method: 'POST',
        body: formData, // Envia o FormData com a imagem
      });

      const result = await response.json();
      if (response.ok) {
        nomeImagem = result.filename
        console.log('Imagem carregada com sucesso', result);
        alert('Imagem carregada com sucesso!');


        return true
      } else {
        console.error('Erro ao carregar a imagem', result);
        alert('Erro ao carregar a imagem!');
        return false
      }
    } catch (error) {
      console.error('Erro na requisição de upload', error);
      alert('Erro ao fazer upload da imagem');
      return false
    }
  } else {
    alert('Por favor, selecione uma imagem');
    return false
  }
}
async function deleteEntity(id, entitiesArray) {
  try {
    await fetch(`http://localhost:3003/${entitiesArray}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
  } catch (error) {
    console.error(error);
    showErrorMessage("Falha ao deletar")
  }
};

function showErrorMessage(message) {
  const popUp = document.getElementById("mensagem-requisicao");
  popUp.style.display = "flex";
  popUp.className = "erro";
  popUp.innerHTML = `<p>${message}</p>
    <img src="../imgs/erro.svg" alt="icone de erro">`;
  setTimeout(() => {
    popUp.style.display = "none";
  }, 5000);
}

const currentUrl = window.location.href;
let arrayUrl = currentUrl.split(/(?<=\/)/)
console.log(arrayUrl)
if (arrayUrl[arrayUrl.length - 1] === "index.html") {
  arrayUrl = arrayUrl.slice(0, arrayUrl.length - 1)

} else {
  arrayUrl = arrayUrl.slice(0, arrayUrl.length - 2)
}
const baseUrl = arrayUrl.join().replaceAll(',', '')
console.log(baseUrl)

// limpa campos receita 
function limpaReceita() {
  $("#nomeReceita").val("")
  $("#modoPreparo").val("")
  $("#fileInput").val("")
  $(".containerIngredientes").empty()
  $(".containerCategoria").empty()
}

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
console.log(usuario)

// gambiarra para decidir se edita ou cria uma receita
let statusReceita = ""
let idReceitaEdit = ""
let caminhoImagem = ""

// Quando o document estiver totalmente carregado ele executara
$(document).ready(async function () {

  if (!usuario) {
    window.location.href = `${baseUrl}login/login.html`
  }

  if (usuario.papel == "admin") {
    $(".onlyAdmin").show();
  } else {
    $(".onlyAdmin").hide();
  }

  // Adiciona informações do usuário nos inputs
  $("#nomeUsuario").val(usuario.nome);
  $("#emailUsuario").val(usuario.email);
  $("#telefoneUsuario").val(usuario.telefone);

  // Editar dados do usuário ao clicar botão
  $("#editar-dados-usuario").on("click", async function () {

    const nome = $("#nomeUsuario").val();
    const email = $("#emailUsuario").val();
    const telefone = $("#telefoneUsuario").val();

    if (!nome || !email || !telefone) {
      showErrorMessage("Campos devem ser preenchidos")
    } else {
      const novoUsuario = {
        ...usuario,
        nome,
        email,
        telefone,
      }

      localStorage.setItem("user", JSON.stringify(novoUsuario));
      await editarUsuario(novoUsuario);
    }
  });

  // Quando o botão de menu (hamburger) for clicado
  $("#menu-toggle").click(function () {
    // Alterna a exibição da lista
    $(".container-menu").toggle();
  });

  $("#btn-filtrar").click(function () {
    // Alterna a exibição da lista
    console.log("teste")
    $(".container-filtro").toggle();
  });

  $("#minhasReceitasMenu").click(async () => {

    $("#conteudoReceita").empty()

    let receitas = await getReceitas()
    receitas = receitas.filter((receita) => {
      return receita.idDoAutor === usuario.id
    })

    if (receitas.length > 0) {
      $("#receitaVazio").hide()
      $("#receitaCheio").show()

      receitas.forEach(async (receita) => {

        // media da receita para avaliação
        let avaliacao = receita.avaliacao.reduce((acc, val) => acc + val, 0) / receita.avaliacao.length

        // busca o usuario pelo id
        let usuarioSelecinado = await getUsuarioById(receita.idDoAutor)

        // console.log(receita.idDoAutor)
        console.log(usuarioSelecinado)
        // console.log(receita)
        $("#conteudoReceita").append(
          `
            <div class="col-md-4 d-flex justify-content-center">
              <div class="card" style="width: 20rem; margin: 20px 0; border: none;">
                <div class="card-body">
                  <h5 class="card-title">${receita.titulo}</h5>
                  <div class="card-nomedata">
                    <h6 class="card-title2">${usuarioSelecinado.nome}</h6>
                    <h6 class="card-title3">15/10/2024</h6>
                  </div>
                  <img src="../imgs/${receita.imagem}" class="card-img-top" alt="Imagem receita" style="width: 100%;">
                  <br>
                  <p class="card-text">${receita.descricao}</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="rating">
                        <span class="star ${avaliacao >= 1 ? "full" : avaliacao >= 0.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 2 ? "full" : avaliacao >= 1.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 3 ? "full" : avaliacao >= 2.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 4 ? "full" : avaliacao >= 3.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 5 ? "full" : avaliacao >= 4.5 ? "half" : ""}"></span>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-md-6">
                      <button data-id="${receita.id}" class="btn btn-verde editReceita btn-modal" data-bs-toggle="modal"
                        data-bs-target="#modalAddReceita">Editar</button>
                    </div>
                    <div class="col-md-6">
                      <button data-id="${receita.id}" class="btn btn-laranja delReceita">Excluir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        )
      })
    } else {
      $("#receitaVazio").show()
      $("#receitaCheio").hide()
    }
  })

  $("#receitasFavoritasMenu").click(async () => {

    $("#conteudoReceitasFavoritas").empty()

    let receitas = await getReceitas()
    receitas = receitas.filter((receita) => {
      return usuario.receitasFavoritas.includes(receita.id);
    })
    console.log(receitas)

    if (receitas.length > 0) {
      $("#receitasFavoritasVazio").hide()
      $("#receitasFavoritasCheio").show()

      receitas.forEach(async (receita) => {

        // media da receita para avaliação
        let avaliacao = receita.avaliacao.reduce((acc, val) => acc + val, 0) / receita.avaliacao.length

        // busca o usuario pelo id
        let usuarioSelecinado = await getUsuarioById(receita.idDoAutor)

        // console.log(receita.idDoAutor)
        console.log(usuarioSelecinado)
        // console.log(receita)
        $("#conteudoReceitasFavoritas").append(
          `
            <div class="col-md-4 d-flex justify-content-center">
              <div class="card" style="width: 20rem; margin: 20px 0; border: none;">
                <div class="card-body">
                  <h5 class="card-title">${receita.titulo}</h5>
                  <div class="card-nomedata">
                    <h6 class="card-title2">${usuarioSelecinado.nome}</h6>
                    <h6 class="card-title3">15/10/2024</h6>
                  </div>
                  <img src="../imgs/${receita.imagem}" class="card-img-top" alt="Imagem receita" style="width: 100%;">
                  <br>
                  <p class="card-text">${receita.descricao}</p>
                    <div style="display: flex; align-items: center; justify-content: space-around; width: 100%">
                      <div class="rating">
                        <span class="star ${avaliacao >= 1 ? "full" : avaliacao >= 0.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 2 ? "full" : avaliacao >= 1.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 3 ? "full" : avaliacao >= 2.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 4 ? "full" : avaliacao >= 3.5 ? "half" : ""}"></span>
                        <span class="star ${avaliacao >= 5 ? "full" : avaliacao >= 4.5 ? "half" : ""}"></span>
                      </div>
                      <a href="${baseUrl}detalhes/detalhes.html">
                        <button data-id="${receita.id}" class="btn btn-verde visualizar">Visualizar</button>
                      </a>
                    </div>
                  <br>
                </div>
              </div>
            </div>
          `
        )
      })
    } else {
      $("#receitasFavoritasVazio").show()
      $("#receitasFavoritasCheio").hide()
    }
  })

  // editar receita 
  $(document).on("click", ".delReceita", async (e) => {
    const btn = e.target

    let id = $(btn).attr("data-id")

    delReceita(id)

    $("#minhasReceitasMenu").trigger("click")
  })
  // editar receita 
  $(document).on("click", ".editReceita", async (e) => {

    statusReceita = "edit"
    limpaReceita()

    const btn = e.target

    let id = $(btn).attr("data-id")

    idReceitaEdit = id

    const receita = await getReceitaById(id)

    $("#nomeReceita").val(receita.titulo)
    $("#modoPreparo").val(receita.descricao)
    caminhoImagem = receita.imagem

    receita.ingredientes.forEach(async (ingrediente) => {

      let option = "";

      let ingredientes = await getIngredientes()

      // laço de repetição que navega para cada um dos itens da lista e adiciona na opção
      ingredientes.forEach((ingrediente) => {
        option += `
            <option value="${ingrediente.id}">${ingrediente.nome}</option>
            `;
      });

      $(".containerIngredientes").append(`
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
                      <option value="Unidade">Unidade</option>
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
      $(".ingrediente").last().val(ingrediente.ingrediente.id)
      $(".quantidade").last().val(ingrediente.quantidade)
      $(".medidas").last().val(ingrediente.medida)
    })

    receita.categorias.forEach(async (categoria) => {

      let option = ""

      let categorias = (await getCategorias()).recipeCategories
      // laço de repetição que navega para cada um dos itens da lista e adiciona na opção
      categorias.forEach((categoria) => {
        option += `
              <option value="${categoria.id}">${categoria.nome}</option>
              `
      })

      // navega ate a div que recebera os categorias e adiciona os inputs necessarios para preenchimento
      // $(btn): localiza quem recebeu o clik para rodar a função
      // .parent(): pega o pai do elemento selecionado
      // .next(): pega o proximo irmão do elemento selecionado
      // .find(PARAMETRO): procura dentro do elemento selecionado todos os filhos que correspondem ao parametro (filho, neto, bisneto...)
      // .append(HTML): insere no final do elemento selecionado o html que for passado como paramentro (não sobrescreve o conteudo ja contido no elemnto)
      $('.containerCategoria').append(`
              <div class="row">
                  <div class="col-md-11">
                      <label for="categoria">Categoria:</label>
                      <select name="categorias" class="form-control categorias">
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

      $(".categorias").last().val(categoria)

    })


  })

  $(document).on("click", "#adicionarReceita", () => {
    statusReceita = "add"
    limpaReceita()
  })

  // aqui
  $("#criarReceita").click(async () => {

    let buscaIngredientes = await getIngredientes()


    let ingredientes = []
    $(".ingrediente").each((index, ingred) => {
      let idIngrediente = $(ingred).val()
      let ingredienteSelecionado = buscaIngredientes.find(ingrediente => ingrediente.id == idIngrediente)



      ingredientes.push({
        "ingrediente": ingredienteSelecionado,
        "medida": $(ingred).parent().parent().find(".medidas").val(),
        "quantidade": $(ingred).parent().parent().find(".quantidade").val()
      })
    })

    let categorias = []

    $(".categorias").each((index, categoria) => {
      categorias.push($(categoria).val())
    })

    let nome = $("#nomeReceita").val()
    let modoPreparo = $("#modoPreparo").val()

    if (statusReceita == "add") {

      if (await uploadImagem()) {
        await addReceita(nome, modoPreparo, nomeImagem, categorias, ingredientes, usuario.id)
        $("#modalAddReceita").modal('hide')
        return true
      }

      alert("Receita não criada")
    } else {
      await editReceita(idReceitaEdit, nome, modoPreparo, caminhoImagem, categorias, ingredientes, usuario.id)
      $("#modalAddReceita").modal('hide')
    }
  })

  // Logout:
  $("#logout").click(async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    await editarUsuario(user)
    localStorage.removeItem("user");
    window.location.href = `${baseUrl}login/login.html`;
  })

  $("#addIngrediente").click(async (e) => {
    // pega o "e" do parametro passado no arrow function e localiza qualbotão foi clicado
    const btn = e.target;
    let option = "";

    let ingredientes = await getIngredientes()

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

  $('#addCategoria').click(async (e) => {
    // pega o "e" do parametro passado no arrow function e localiza qualbotão foi clicado
    const btn = e.target
    let option = ""

    let categorias = (await getCategorias()).recipeCategories
    // laço de repetição que navega para cada um dos itens da lista e adiciona na opção
    categorias.forEach((categoria) => {
      option += `
            <option value="${categoria.id}">${categoria.nome}</option>
            `
    })

    // navega ate a div que recebera os categorias e adiciona os inputs necessarios para preenchimento
    // $(btn): localiza quem recebeu o clik para rodar a função
    // .parent(): pega o pai do elemento selecionado
    // .next(): pega o proximo irmão do elemento selecionado
    // .find(PARAMETRO): procura dentro do elemento selecionado todos os filhos que correspondem ao parametro (filho, neto, bisneto...)
    // .append(HTML): insere no final do elemento selecionado o html que for passado como paramentro (não sobrescreve o conteudo ja contido no elemnto)
    $(btn).parent().parent().next().find('.containerCategoria').append(`
            <div class="row">
                <div class="col-md-11">
                    <label for="categoria">Categoria:</label>
                    <select name="categorias" class="form-control categorias">
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

  // mostrar listagem de categorias de receitas
  let categoriasReceita = (await getCategorias()).recipeCategories;
  if (categoriasReceita.length > 0) {
    $("#categoriaReceitaVazio").hide();
    const categoriaReceitasConteudo = $(".conteudo-categoriaReceita").show();
    categoriaReceitasConteudo.append(mapListData(
      categoriasReceita,
      "editarCategoriaReceita",
      "deletarCategoriaReceita",
      "modalEditarCategoriaReceita"
    ))
  }

  // mostrar listagem de categorias de ingredientes
  let categoriasIngrediente = (await getCategorias()).ingredientCategories;
  if (categoriasIngrediente.length > 0) {
    $("#categoriaIngredienteVazio").hide();
    const categoriaIngredientesConteudo = $(".conteudo-categoriasIngredientes").show();
    categoriaIngredientesConteudo.append(mapListData(
      categoriasIngrediente,
      "editarCategoriaIngrediente",
      "deletarCategoriaIngrediente",
      "modalEditarCategoriaIngrediente"
    ))

    $(".select-categorias-ingredientes").append(mapIngredientsSelect(categoriasIngrediente));
  }

  // mostrar listagem de categorias de ingredientes
  let ingredientes = (await getIngredientes());
  if (ingredientes.length > 0) {
    $("#ingredienteVazio").hide();
    const ingredientesConteudo = $(".conteudo-ingredientes").show();
    ingredientesConteudo.append(mapListData(
      ingredientes,
      "editarIngrediente",
      "deletarIngrediente",
      "modalEditarIngrediente"
    ))
  }

  // Limpar inputs dos modais quando eles são fechados
  $(".cancelar").on("click", function () {
    $(this).parent().prev().find("input").val('');
  })

  // Adicionar categorias e ingredientes
  $(".salvar-adicionar").on('click', async function () {
    const inputValue = $(this).parent().prev().find("input").val();
    const selectValue = $(this).parent().prev().find("select").val();
    const header = $(this).parent().prev().prev().text().trim();

    let body = {
      id: `id-${Math.random()}`,
      nome: inputValue
    }
    let entitiesArray = "categorias";
    if (header.indexOf("Categoria de Receita") >= 0) {
      body.tipo = "Receita";
    } else if (header.indexOf("Categoria de Ingrediente") >= 0) {
      body.tipo = "ingrediente";
    } else {
      body.categorias = [selectValue];
      entitiesArray = "ingredientes";
    }

    if (!inputValue) showErrorMessage("Campo 'nome' precisa ser preenchido");
    else {
      try {
        await fetch(`http://localhost:3003/${entitiesArray}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
      } catch (error) {
        console.error(error);
        showErrorMessage("Falha ao adicionar");
      }
    }
  });

  // Passa o id do elemento ao abrir o modal
  $('#modalEditarCategoriaReceita').on('shown.bs.modal', function (e) {
    const button = $(e.relatedTarget);
    const itemId = button.data('id');
    const itemName = button.data('nome');
    $(".salvar-editar").data("item-id", itemId);
    $(this).find("input").val(itemName);
  });

  $('#modalEditarCategoriaIngrediente').on('shown.bs.modal', function (e) {
    const button = $(e.relatedTarget);
    const itemId = button.data('id');
    const itemName = button.data('nome');
    $(".salvar-editar").data("item-id", itemId);
    $(this).find("input").val(itemName);
  });

  $('#modalEditarIngrediente').on('shown.bs.modal', function (e) {
    const button = $(e.relatedTarget);
    const itemId = button.data('id');
    const itemName = button.data('nome');
    $(".salvar-editar").data("item-id", itemId);
    $(this).find("input").val(itemName);
  });

  // Editar categorias e ingredientes
  $(".salvar-editar").on('click', async function () {
    const inputValue = $(this).parent().prev().find("input").val();
    const id = $(this).data("item-id");
    const selectValue = $(this).parent().prev().find("select").val();
    const header = $(this).parent().prev().prev().text().trim();

    let body = {
      nome: inputValue
    }
    let entitiesArray;
    if (header.indexOf("Categoria de Receita") >= 0 || header.indexOf("Categoria de Ingrediente") >= 0) {
      entitiesArray = "categorias";
    } else {
      body.categorias = [selectValue];
      entitiesArray = "ingredientes";
    }

    if (!inputValue) showErrorMessage("Campo 'nome' precisa ser preenchido")
    else {
      try {
        await fetch(`http://localhost:3003/${entitiesArray}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
      } catch (error) {
        console.error(error);
        showErrorMessage("Falha ao editar");
      }
    }
  });

  // deletar categoria de receita
  $(".deletarCategoriaReceita").on('click', async function () {
    let id = $(this).closest('li').attr('id');
    console.log(id);
    await deleteEntity(id, "categorias");
  });

  // deletar categoria de receita
  $(".deletarCategoriaIngrediente").on('click', async function () {
    let id = $(this).closest('li').attr('id');
    console.log(id);
    await deleteEntity(id, "categorias");
  });

  // deletar categoria de receita
  $(".deletarIngrediente").on('click', async function () {
    let id = $(this).closest('li').attr('id');
    console.log(id);
    await deleteEntity(id, "ingredientes");
  });

  // controlador do menu
  $("#seguindoMenu").click(() => {
    $(".nav-link").removeAttr("style"); // remove o atribulto passado como parametro
    $("#seguindo").show(); // mostra o elemento removendo o "display: none" no style
    $("#seguidores").hide(); // esconde o elemento inserindo o "display: none" no style
    $("#minhasReceitas").hide();
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
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
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
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
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#minhasReceitasMenu").attr("style", "text-decoration: underline;");
  });
  $("#receitasFavoritasMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#receitasFavoritas").show();
    $("#categoriaReceitas").hide();
    $("#categoriasIngredientes").hide();
    $("#ingredientes").hide();
    $("#solicitacoes").hide();
    $("#receitasFavoritasMenu").attr("style", "text-decoration: underline;");
  });
  $("#categoriaReceitaMenu").click(() => {
    $(".nav-link").removeAttr("style");
    $("#seguindo").hide();
    $("#seguidores").hide();
    $("#minhasReceitas").hide();
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").show();
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
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
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
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
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
    $("#receitasFavoritas").hide();
    $("#categoriaReceitas").hide();
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

function mapListData(array, editButtonId, deleteButtonId, modalName) {

  const list = array.map((item) => {
    return `<li id="${item.id}">
        <p>${item.nome}</p>
        <form>
          <button class="btn btn-verde btn-modal ${editButtonId}" data-bs-toggle="modal"
            data-bs-target="#${modalName}" data-id="${item.id}" data-nome="${item.nome}">
            Editar
          </button>
          <button type="submit" class="btn btn-laranja ${deleteButtonId}">
            Deletar
          </button>
        </form>
      </li> `
  });

  // transformar array em string e remover a virgula entre os <li>
  const strigifiedList = list.join().replaceAll(",", "")

  return `<ul class="lista-conteudo-sem-imagem">${strigifiedList}</ul>`;
}

function mapIngredientsSelect(ingredients) {
  const list = ingredients.map((ingredient) => {
    return `<option value="${ingredient.id}">${ingredient.nome}</option>`
  })

  return list.join().replaceAll(",", "");
}
