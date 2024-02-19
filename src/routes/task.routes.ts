import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskUpdateShema} from "../schemas/task.schema";
import { ValidateCategory } from "../middlewares/validateCategory.middleware";
import { ValidateIdMiddleware } from "../middlewares/validateId.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post("/",validateBody.execute(taskCreateSchema),ValidateCategory.execute,taskControllers.create);
taskRouter.get("/", taskControllers.findMany);
taskRouter.get("/:id",ValidateIdMiddleware.task, taskControllers.findOne);
taskRouter.patch("/:id",ValidateIdMiddleware.task,validateBody.execute(taskUpdateShema),taskControllers.update);
taskRouter.delete("/:id",ValidateIdMiddleware.task, taskControllers.delete);
