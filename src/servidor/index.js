import http from "http";
import express from "express";
import cors from "cors";

import { userRouter } from "./rotas/rotasDeUsuario.js";
import { recipeRouter } from "./rotas/rotasDeReceita.js";
import { ingredientsRouter } from "./rotas/rotasDeIngredientes.js";
import { categoriesRouter } from "./rotas/rotasDeCategorias.js";
import { uploadRouter } from './rotas/rotasUpload.cjs';
import { performLogin } from "./utilities.js";


const app = express();
const server = http.createServer(app);
const port = 3003;
app.use(express.json());
app.use(cors());

server.listen(port, async () => {
  if (server) {
    const address = server.address();
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error("Falha ao iniciar servidor");
  }
});

app.use("/upload", uploadRouter);
app.use("/usuarios", userRouter);
app.use("/receitas", recipeRouter);
app.use("/categorias", categoriesRouter);
app.use("/ingredientes", ingredientsRouter);

// endpoint de login
app.post("/login", async (req, res) => {
  const login = req.body;
  const usuario = await performLogin(login, "usuarios");

  if (!usuario) res.send("Usuário não encontrado");

  if (login.senha === usuario.senha) res.send({ usuario });
  else res.send("Senha incorreta");
});
