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
  try {
    const usuario = req.body;
    writeOneEntity(usuario, "usuarios");
    res.send("Usuário adicionado com sucesso");
  } catch {
    res.send("Falha ao adicionar usuário");
  }
});

// endpoint de visualizar dados do usuário
userRouter.get("/:id", async (req, res) => {
  console.log("usuario")
  try {
    console.log("tudo certo usuario")
    const id = req.params.id;
    // const id = "id-0.1564564123435";
    const usuario = await readOneEntity(id, "usuarios");
    res.send(usuario);
  } catch {
    console.log("erro de usuario")
    res.send("Falha ao buscar usuário");
  }
});

// endpoint de visualizar dados de todos os usuários:
userRouter.get("", async (req, res) => {
  try {
    const usuarios = await readAllEntities("usuarios");
    res.send(usuarios);
  } catch {
    
    res.send("Falha ao buscar usuários");
  }
});

// endpoint de editar usuário
userRouter.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const newUserInfo = req.body;

    editOneEntity(id, newUserInfo, "usuarios");
    res.send("Usuário editado com sucesso");
  } catch {
    res.send("Falha ao editar usuário");
  }
});

// endpoint de deletar usuário
userRouter.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;

    deleteOneEntity(id, "usuarios");
    res.send("Usuário deletado com sucesso");
  } catch {
    res.send("Falha ao deletar usuário");
  }
});
