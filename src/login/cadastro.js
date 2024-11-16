const currentUrl = window.location.href;
let arrayUrl = currentUrl.split(/(?<=\/)/)
arrayUrl = arrayUrl.slice(0, arrayUrl.length - 2)
const baseUrl = arrayUrl.join().replaceAll(',', '')

const inputs = document.getElementsByTagName("input");

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  const user = {
    id: `id-${Math.random()}`,
    nome: inputs[0].value,
    email: inputs[1].value,
    telefone: inputs[2].value,
    senha: inputs[3].value,
    papel: "normal",
    receitasFavoritas: [],
  };

  // o fetch() é utilizado para fazer uma requisição ao 'servidor' para incluir ou editar dados
  fetch("http://localhost:3003/usuarios", {
    // colocar "http://localhost:3003" + /usuarios, /receitas, /categorias ou /ingredientes dependendo da entidade a ser gerenciada
    // se você for editar, deletar ou buscar os dados de uma entidade adicionar /idDaEntidade, por exemplo: "http://localhost:3003/usuarios/123" acessa o usuário com id = "123"
    method: "POST", // colocar o método POST pra criar uma entidade nova, GET pra pegar os dados, PUT pra editar uma entidade e DELETE pra remover uma entidade
    headers: {
      "Content-Type": "application/json", // essa parte permanece a mesma
    },
    body: JSON.stringify(user), // aqui é onde o objeto da entidade a ser adicionada é passada ou o objeto dos dados alterados de uma entidade que vai ser editada
  })
    .then(() => localStorage.setItem("user", JSON.stringify(user))) // o .then() é utilizado pra lógica que vem depois que a requisição acaba e quando não há erros
    .then(() => (window.location.href = `${baseUrl}index.html`)) // no meu caso utilizei o primeiro .then pra armazenar os dados do usuário no localStorage e depois mudar de página
    .catch((error) => console.error("Erro ao cadastrar usuário:", error)); // o .catch() é onde fica o tratamento de erros, se algum erro acontecer durante a requisição, a lógica
  // para tratar o erro fica dentro dele.
});
