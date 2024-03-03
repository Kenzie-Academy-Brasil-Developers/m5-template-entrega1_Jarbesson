import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schema";
import { ValidateIdMiddleware } from "../middlewares/validateId.middleware";
import { AuthMiddleware } from "../middlewares/auth.Middleware";
import { ValidateCategoryUser } from "../middlewares/validateCategoryUser";

export const categoryRouter = Router();

const auth = new AuthMiddleware();

const categoryControllers = new CategoryControllers();

categoryRouter.post("/",auth.isAuthenticated,validateBody.execute(categoryCreateSchema), categoryControllers.create);
categoryRouter.delete("/:id",auth.isAuthenticated,ValidateIdMiddleware.category,ValidateCategoryUser.isCategoryOwner, categoryControllers.delete);