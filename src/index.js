const indexCurrentUrl = window.location.href;
let indexArrayUrl = indexCurrentUrl.split(/(?<=\/)/);

if (indexArrayUrl[indexArrayUrl.length - 1] === "index.html") {
  indexArrayUrl = indexArrayUrl.slice(0, indexArrayUrl.length - 1);

} else {
  indexArrayUrl = indexArrayUrl.slice(0, indexArrayUrl.length - 2);
}
const indexBaseUrl = indexArrayUrl.join().replaceAll(',', '');

$(document).ready(async function () {
  const receitas = await getRecipes();
  const usuarios = await getUsuarios();
  const receitasComNomeDoAutor = receitas.map((receita) => {
    return {
      ...receita,
      nomeDoAutor: usuarios.filter(u => u.id === receita.idDoAutor)[0].nome
    }
  })

  $("#receitas-container").append(mapReceitas(receitasComNomeDoAutor));

  $(".visualizar").on("click", function () {
    const id = $(this).data("id");
    localStorage.setItem("receitaSelecionada", id);
  })
});

const getRecipes = async () => {
  const response = await fetch("http://localhost:3003/receitas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return await response.json();
}

const getUsuarios = async () => {
  const response = await fetch("http://localhost:3003/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return await response.json();
}

const mapReceitas = (receitas) => {
  const receitasList = receitas.map((receita) => {
    return `<div class="col-md-4">
        <div class="card" style="width: 20rem; margin: 20px 0; border: none;">
          <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <div class="card-nomedata">
              <h6 class="card-title2">${receita.nomeDoAutor}</h6>
              <h6 class="card-title3">${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/2024</h6>
            </div>
            <img src="./imgs/${receita.imagem}" class="card-img-top" alt="Imagem receita" style="width: 280px; height: 180px">
            <br>
            <p class="card-text">${receita.descricao}</p>
            <div class="row">
              <div class="col-md-6">
                <div class="rating">
                  <span class="star full"></span>
                  <span class="star full"></span>
                  <span class="star full"></span>
                  <span class="star full"></span>
                  <span class="star half"></span>
                </div>
              </div>
              <div class="col-md-6">
                <a href="${indexBaseUrl}detalhes/detalhes.html">
                    <button data-id="${receita.id}" class="btn btn-verde visualizar">Visualizar</button>
                </a>
              </div>
            </div>
          </div>
        </div>        
      </div>`
  })

  return receitasList.join().replaceAll(",", "");
}