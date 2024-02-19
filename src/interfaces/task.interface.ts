import { z } from "zod";
import { taskCategorySchema, taskCreateSchema, taskReturnShema, taskSchema, taskUpdateShema } from "../schemas/task.schema";


type TTask = z.infer<typeof taskSchema>

type TTaskCreate = z.infer<typeof taskCreateSchema>

type TTaskUpadate = z.infer<typeof taskUpdateShema>

type TTaskCategorySchema = z.infer<typeof taskCategorySchema>;

export {TTask, TTaskCreate, TTaskUpadate, TTaskCategorySchema};