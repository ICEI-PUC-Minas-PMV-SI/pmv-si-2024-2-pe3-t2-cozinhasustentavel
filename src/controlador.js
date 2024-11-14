// array de itens auxiliar
let ingredientes = [
    "Casca de banana", "Sementes de abóbora", "Cascas de batata", "Folhas de beterraba", 
    "Folhas de cenoura", "Talos de brócolis", "Sementes de chia", "Alga marinha", 
    "Cogumelos comestíveis", "Bambu", "Sementes de girassol", "Feijão-mexicano", 
    "Farinha de grilo", "Tapioca", "Frutas maduras", "Coco", "Laranja", "Acelga", 
    "Couve-flor", "Cabelos de milho", "Alho-poró", "Sementes de linhaça", "Arroz integral", 
    "Ervilhas", "Amendoim", "Mandioca", "Cactos comestíveis", "Cabelos de trigo", 
    "Tomate", "Abobrinha", "Melado de cana", "Grão-de-bico", "Feijão preto", "Gergelim", 
    "Açúcar mascavo", "Pepino", "Nabo", "Maçã", "Cenoura", "Chá verde", "Sementes de melancia", 
    "Salgados de abóbora", "Sementes de pepino", "Quiabo", "Açaí", "Abacate", "Moringa", 
    "Leite de amêndoas", "Castanha de caju", "Cabelos de arroz", "Batata-doce", "Framboesa", 
    "Morango", "Kiwi", "Peixe sustentável", "Tomilho", "Manjericão", "Cebolinha", 
    "Salsinha", "Laranja", "Frutos do mar de cultivo sustentável", "Ervas aromáticas", 
    "Algas comestíveis", "Artemísia", "Curry", "Milho orgânico", "Cerveja artesanal", 
    "Pistache", "Nozes", "Almôndega vegetal", "Grãos fermentados", "Cerveja de maçã", 
    "Feijão branco", "Espinafre", "Salsão", "Rúcula", "Almeirão", "Batatinha inglesa", 
    "Couve", "Pimentão", "Salsichas vegetais", "Grãos de café", "Frutas desidratadas", 
    "Chia", "Cacau", "Alfarroba", "Acelga", "Cenouras baby", "Ervilhas congeladas", 
    "Alho", "Sementes de abóbora", "Feijão carioca", "Milho verde", "Lentilhas", "Goiaba", 
    "Tomate seco", "Acelga", "Manga", "Mamão", "Maracuja", "Pêssego", "Cabelos de lentilhas"
]

// exeplo para admin e usuario comum
// alterne entre "adm" e "usuario"
let usuario = "adm"

// Quando o document estiver totalmente carregado ele executara
$(document).ready(function () {
    if(usuario == "adm"){
        $('.onlyAdm').show()
    }else{
        $('.onlyAdm').hide()
    }
    // Quando o botão de menu (hamburger) for clicado
    $('#menu-toggle').click(function () {
        // Alterna a exibição da lista
        $('.container-menu').toggle();
    });
    
    $('#addIngrediente').click((e)=>{
        const btn = e.target
        let option = ""

        ingredientes.forEach((ingrediente)=>{
            option += `
            <option value="${ingrediente}">${ingrediente}</option>
            `
        })

        $(btn).parent().parent().next().find('.containerIngredientes').append(`
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

    $(document).on('click', '.deleteRow', (e)=>{
        const btn = e.target

        $(btn).parents('.row').first().remove()
    })

    // controlador do menu
    $('#seguindoMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').show()
        $('#seguidores').hide()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').hide()
        $('#solicitacoes').hide()
        $('#seguindoMenu').attr('style', 'text-decoration: underline;')
    })
    $('#seguidoresMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').show()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').hide()
        $('#solicitacoes').hide()
        $('#seguidoresMenu').attr('style', 'text-decoration: underline;')
    })
    $('#minhasReceitasMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').hide()
        $('#minhasReceitas').show()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').hide()
        $('#solicitacoes').hide()
        $('#minhasReceitasMenu').attr('style', 'text-decoration: underline;')
    })
    $('#categoriaReceitaMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').hide()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').show()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').hide()
        $('#solicitacoes').hide()
        $('#categoriaReceitaMenu').attr('style', 'text-decoration: underline;')
    })
    $('#categoriasIngredientesMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').hide()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').show()
        $('#ingredientes').hide()
        $('#solicitacoes').hide()
        $('#categoriasIngredientesMenu').attr('style', 'text-decoration: underline;')
    })
    $('#ingredientesMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').hide()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').show()
        $('#solicitacoes').hide()
        $('#ingredientesMenu').attr('style', 'text-decoration: underline;')
    })
    $('#solicitacoesMenu').click(()=>{
        $('.nav-link').removeAttr('style')
        $('#seguindo').hide()
        $('#seguidores').hide()
        $('#minhasReceitas').hide()
        $('#categoriaReceita').hide()
        $('#categoriasIngredientes').hide()
        $('#ingredientes').hide()
        $('#solicitacoes').show()
        $('#solicitacoesMenu').attr('style', 'text-decoration: underline;')
    })
    
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