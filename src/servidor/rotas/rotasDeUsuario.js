import express from "express";
import {
  writeOneEntity,
  readOneEntity,
  editOneEntity,
  deleteOneEntity,
  readAllEntities,
} from "../utilities.js";

export const userRouter = express.Router();

// ENDPOINTS DE GERENCIAR USUÁRIO:

// endpoint de cadastro do usuário
userRouter.post("", (req, res) => {
  const usuario = req.body;
  writeOneEntity(usuario, "usuarios");
  res.send("Usuário adicionado com sucesso");
});

// endpoint de visualizar dados do usuário
userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const usuario = await readOneEntity(id, "usuarios");
  res.send(usuario);
});

// endpoint de visualizar dados de todos os usuários:
userRouter.get("", async (req, res) => {
  const usuarios = await readAllEntities("usuarios");
  res.send(usuarios);
});

// endpoint de editar usuário
userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const newUserInfo = req.body;

  editOneEntity(id, newUserInfo, "usuarios");
  res.send("Usuário editado com sucesso");
});

// endpoint de deletar usuário
userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  deleteOneEntity(id, "usuarios");
  res.send("Usuário deletado com sucesso");
});
