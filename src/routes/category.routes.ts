import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schema";
import { ValidateIdMiddleware } from "../middlewares/validateId.middleware";

export const categoryRouter = Router();

const categoryControllers = new CategoryControllers();

categoryRouter.post("/",validateBody.execute(categoryCreateSchema), categoryControllers.create);
categoryRouter.delete("/:id",ValidateIdMiddleware.category, categoryControllers.delete);