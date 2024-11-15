const currentUrl = window.location.href;
let arrayUrl = currentUrl.split(/(?<=\/)/)
arrayUrl = arrayUrl.slice(0, arrayUrl.length - 2)
const baseUrl = arrayUrl.join().replaceAll(',', '')

const inputs = document.getElementsByTagName("input");

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  const login = {
    userEmailOrName: inputs[0].value,
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
    .then((data) => localStorage.setItem("user", JSON.stringify(data.usuario)))
    .then(() => (window.location.href = `${baseUrl}/index.html`))
    .catch((error) => console.error("Erro ao logar:", error));
});
