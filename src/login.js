const currentUrl = window.location.href;
const slashWherePathBegins = currentUrl.lastIndexOf("/");
const baseUrl = currentUrl.slice(0, slashWherePathBegins);

const inputs = document.getElementsByTagName("input");

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  const login = {
    email: inputs[0].value,
    senha: inputs[1].value,
  };

  fetch("http://localhost:3003/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  })
    .then((response) => response.json())
    .then((data) => localStorage.setItem("user", JSON.stringify(data)))
    .then(() => (window.location.href = `${baseUrl}/index.html`))
    .catch((error) => console.error("Erro ao logar:", error));
});
