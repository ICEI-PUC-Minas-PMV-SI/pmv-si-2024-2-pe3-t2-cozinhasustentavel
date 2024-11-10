import http from "http";
import express from "express";
import cors from "cors";
import { performLogin, writeOneEntity } from "./utilities.js";

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

// endpoint de login
app.post("/login", async (req, res) => {
  const login = req.body;
  const user = await performLogin(login, "usuarios");

  if (!user) res.send({ message: "Usuário não encontrado" });

  if (login.senha === user.senha) res.send({ user });
  else res.send({ message: "Senha incorreta" });
});

// endpoint de cadastro do usuário
app.post("/usuario", (req, res) => {
  const user = req.body;
  writeOneEntity(user);
  res.send("Usuário adicionado com sucesso");
});
