import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskUpdateShema} from "../schemas/task.schema";
import { ValidateCategory } from "../middlewares/validateCategory.middleware";
import { ValidateIdMiddleware } from "../middlewares/validateId.middleware";
import { AuthMiddleware } from "../middlewares/auth.Middleware";
import { ValidateTaskUser } from "../middlewares/validateTaskUser.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

const auth = new AuthMiddleware();
taskRouter.post("/",auth.isAuthenticated,validateBody.execute(taskCreateSchema),ValidateCategory.execute,taskControllers.create);
taskRouter.get("/",auth.isAuthenticated,taskControllers.findMany);
taskRouter.get("/:id",auth.isAuthenticated,ValidateIdMiddleware.task,ValidateTaskUser.isTaskOwner, taskControllers.findOne);
taskRouter.patch("/:id",auth.isAuthenticated,ValidateIdMiddleware.task,ValidateTaskUser.isTaskOwner,validateBody.execute(taskUpdateShema),taskControllers.update);
taskRouter.delete("/:id",auth.isAuthenticated,ValidateIdMiddleware.task,ValidateTaskUser.isTaskOwner, taskControllers.delete);

