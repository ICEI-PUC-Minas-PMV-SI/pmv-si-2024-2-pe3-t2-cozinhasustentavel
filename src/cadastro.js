const currentUrl = window.location.href;
const slashWherePathBegins = currentUrl.lastIndexOf("/");
const baseUrl = currentUrl.slice(0, slashWherePathBegins);

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

  fetch("http://localhost:3003/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(() => (window.location.href = `${baseUrl}/index.html`))
    .then(() => localStorage.setItem("user", JSON.stringify(user)))
    .catch((error) => console.error("Erro ao cadastrar usuário:", error));
});
