import { z } from "zod";
import { useReturnShema, userCreateSchema } from "../schemas/user.schema";


type UserCreate = z.infer<typeof userCreateSchema>

type UserReturn = z.infer<typeof useReturnShema>

export {UserCreate, UserReturn}