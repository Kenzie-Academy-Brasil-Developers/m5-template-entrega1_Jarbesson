import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3).max(255),
    email: z.string().email().max(255),
    password: z.string()
})

export const userCreateSchema = userSchema.omit({id: true});

export const useReturnShema = userSchema.omit({password: true});