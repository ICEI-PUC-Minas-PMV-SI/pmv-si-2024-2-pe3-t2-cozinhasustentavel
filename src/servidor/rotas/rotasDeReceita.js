import express from "express";
import {
  writeOneEntity,
  readOneEntity,
  editOneEntity,
  deleteOneEntity,
  readAllEntities,
} from "../utilities.js";

export const recipeRouter = express.Router();

// ENDPOINTS DE GERENCIAR RECEITAS:

// endpoint de criar receita
recipeRouter.post("", (req, res) => {
  try {
    const receita = req.body;
    writeOneEntity(receita, "receitas");
    res.send("Receita adicionada com sucesso");
  } catch {
    res.send("Falha ao adicionar receita");
  }
});

// endpoint de visualizar dados da receita
recipeRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const receita = await readOneEntity(id, "receitas");
    res.send(receita);
  } catch {
    res.send("Falha ao buscar receita");
  }
});

// endpoint de visualizar dados de todas as receitas:
recipeRouter.get("", async (req, res) => {
  try {
    const receitas = await readAllEntities("receitas");
    res.send(receitas);
  } catch {
    res.send("Falha ao buscar receitas")
  }
});

// endpoint de editar receita
recipeRouter.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const newRecipeInfo = req.body;

    editOneEntity(id, newRecipeInfo, "receitas");
    res.send("Receita editada com sucesso");
  } catch {
    res.send("Falha ao editar receita");
  }
});

// endpoint de deletar receita
recipeRouter.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;

    deleteOneEntity(id, "receitas");
    res.send("Receita deletada com sucesso");
  } catch {
    res.send("Falha ao deletar receita");
  }
});
