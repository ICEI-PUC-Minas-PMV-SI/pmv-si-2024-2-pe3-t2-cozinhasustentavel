import express from "express";
import {
  writeOneEntity,
  readOneEntity,
  editOneEntity,
  deleteOneEntity,
  readAllEntities,
} from "../utilities.js";

export const ingredientsRouter = express.Router();

// ENDPOINTS DE GERENCIAR INGREDIENTES:

// endpoint de criar ingrediente
ingredientsRouter.post("", (req, res) => {
  try {
    const ingrediente = req.body;
    writeOneEntity(ingrediente, "ingredientes");
    res.send("Ingrediente adicionado com sucesso");
  } catch {
    res.send("Falha ao adicionar ingrediente");
  }
});

// endpoint de visualizar dados do ingrediente
ingredientsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ingrediente = await readOneEntity(id, "ingredientes");
    res.send(ingrediente);
  } catch {
    res.send("Falha ao buscar ingrediente");
  }
});

// endpoint de visualizar dados de todos os ingredientes:
ingredientsRouter.get("", async (req, res) => {
  try {
    const ingredientes = await readAllEntities("ingredientes");
    res.send(ingredientes);
  } catch {
    res.send("Falha ao buscar ingredientes");
  }
});

// endpoint de editar ingrediente
ingredientsRouter.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const newIngredientInfo = req.body;

    editOneEntity(id, newIngredientInfo, "ingredientes");
    res.send("Ingrediente editado com sucesso");
  } catch {
    res.send("Falha ao editar ingrediente");
  }
});

// endpoint de deletar ingrediente
ingredientsRouter.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;

    deleteOneEntity(id, "ingredientes");
    res.send("Ingrediente deletado com sucesso");
  } catch {
    res.send("Falha ao deletar ingrediente");
  }
});
