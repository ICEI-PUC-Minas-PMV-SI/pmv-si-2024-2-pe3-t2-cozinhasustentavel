const heartIcon = document.getElementById('heart-icon');

heartIcon.addEventListener('click', async () => {
  heartIcon.classList.toggle('clicked');
  const user = JSON.parse(localStorage.getItem("user"))
  const heartClass = heartIcon.className
  const estaClicado = heartClass.indexOf("clicked")>= 0
  const receitaSelecionada = await buscarDadosDaReceita()
  if (!estaClicado) {
    user.receitasFavoritas = user.receitasFavoritas.filter((receitaID)=>{
      return receitaID != receitaSelecionada.id
    })
  }
  else {
    user.receitasFavoritas = [...user.receitasFavoritas,receitaSelecionada.id]
  }
  localStorage.setItem("user",JSON.stringify(user))
});

console.log(heartIcon)

$(document).ready(async function(){
    const receita = await buscarDadosDaReceita()
    console.log(receita)
    $(".nomeDaReceita").append(receita.titulo)
    const ingredientesLista = mapearIngredientes(receita.ingredientes)
    $(".ingredientesLista").append(ingredientesLista)
    const modoDePreparoLista =mapearModoDePreparo(receita.modoDePreparo)
    $(".modoDePreparoLista").append(modoDePreparoLista)
    const categorias = (await getCategorias()).recipeCategories
    const categoriasFiltradas = categorias.filter((categoria)=>{
        return receita.categorias.includes(categoria.id)
    })
    const categoriasNomes = categoriasFiltradas.map((categoria)=>{
        return categoria.nome
    })
    $(".categorias-container").append(mapearCategoria(categoriasNomes))
    const user = JSON.parse(localStorage.getItem("user"))
    const coracaoIcone = $("#heart-icon")
    const receitaFavoritada = user.receitasFavoritas.includes(receita.id)
    if (receitaFavoritada) {
      coracaoIcone.addClass("clicked")
    }
})

async function buscarDadosDaReceita() {
    const dados = await fetch("http://localhost:3003/receitas/id-0.643634745856",{
        method : "GET" , headers: {
            "Content-Type": "application/json",
          }
    })
    return await dados.json()
}

function mapearIngredientes(ingredientes) {
    const ingredientesLista = ingredientes.map((ingrediente)=>{
        return`<li>${ingrediente.ingrediente.nome} ${ingrediente.quantidade} ${ingrediente.medida}</li>`
    })
    return ingredientesLista.join().replaceAll(",", "")
}

function mapearModoDePreparo(modoDePreparo) {
    const modoDePreparoLista = modoDePreparo.map((elemento)=>{
        return`<li>${elemento}</li>`
    })
    return modoDePreparoLista.join().replaceAll(",", "")
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

  function mapearCategoria(categorias) {
    const categoriasLista = categorias.map((categoria)=>{
        return`<button class="categorias-item">${categoria}</button>`
    })
    return categoriasLista.join().replaceAll(",", "")
  }

  