import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findyByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already exists!" });
  }

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

categoryRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();

  return response.status(201).json(categories);
});

export { categoryRoutes };
