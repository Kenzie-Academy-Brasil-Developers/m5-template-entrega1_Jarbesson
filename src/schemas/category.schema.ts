import { z } from "zod";

export const categoryShema = z.object({
    id: z.number().positive(),
    name: z.string().min(1).max(255)  
})

export const categoryCreateSchema = categoryShema.omit({id: true});


