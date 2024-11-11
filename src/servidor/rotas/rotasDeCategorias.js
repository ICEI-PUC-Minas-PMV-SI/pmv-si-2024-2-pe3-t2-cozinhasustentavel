import express from "express";
import {
  writeOneEntity,
  readOneEntity,
  editOneEntity,
  deleteOneEntity,
  readAllEntities,
} from "../utilities.js";

export const categoriesRouter = express.Router();

// ENDPOINTS DE GERENCIAR CATEGORIAS:

// endpoint de criar categoria
categoriesRouter.post("", (req, res) => {
  const categoria = req.body;
  writeOneEntity(categoria, "categorias");
  res.send("Categoria adicionada com sucesso");
});

// endpoint de visualizar dados da categoria
categoriesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const categoria = await readOneEntity(id, "categorias");
  res.send(categoria);
});

// endpoint de visualizar dados de todas as categorias:
categoriesRouter.get("", async (req, res) => {
  const categorias = await readAllEntities("categorias");
  res.send(categorias);
});

// endpoint de editar categoria
categoriesRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const newRecipeInfo = req.body;

  editOneEntity(id, newRecipeInfo, "categorias");
  res.send("Categoria editada com sucesso");
});

// endpoint de deletar categoria
categoriesRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  deleteOneEntity(id, "categorias");
  res.send("Categoria deletada com sucesso");
});
