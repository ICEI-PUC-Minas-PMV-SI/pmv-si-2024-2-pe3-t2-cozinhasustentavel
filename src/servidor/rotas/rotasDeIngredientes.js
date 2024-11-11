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
  const ingrediente = req.body;
  writeOneEntity(ingrediente, "ingredientes");
  res.send("Ingrediente adicionado com sucesso");
});

// endpoint de visualizar dados do ingrediente
ingredientsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const ingrediente = await readOneEntity(id, "ingredientes");
  res.send(ingrediente);
});

// endpoint de visualizar dados de todos os ingredientes:
ingredientsRouter.get("", async (req, res) => {
  const ingredientes = await readAllEntities("ingredientes");
  res.send(ingredientes);
});

// endpoint de editar ingrediente
ingredientsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const newIngredientInfo = req.body;

  editOneEntity(id, newIngredientInfo, "ingredientes");
  res.send("Ingrediente editado com sucesso");
});

// endpoint de deletar ingrediente
ingredientsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  deleteOneEntity(id, "ingredientes");
  res.send("Ingrediente deletado com sucesso");
});
