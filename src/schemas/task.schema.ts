
import { z } from "zod";
import { categoryShema } from "./category.schema";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1).max(255),
    content: z.string().min(1).max(255),
    finished: z.boolean().optional(),
    categoryId: z.number().positive().nullish()
});



export const taskCategorySchema = taskSchema.extend({
    category: categoryShema.nullish().optional()
})

export const taskReturnShema = taskSchema.omit({categoryId: true})
export const taskCreateSchema = taskSchema.omit({id: true, finished:true});
export const taskUpdateShema = taskCreateSchema.partial();