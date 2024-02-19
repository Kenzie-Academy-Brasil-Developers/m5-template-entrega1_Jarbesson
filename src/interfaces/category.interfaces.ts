import { z } from "zod";
import { categoryCreateSchema, categoryShema } from "../schemas/category.schema";


type TCategory = z.infer<typeof categoryShema>;

type TCategoryCreateSchema = z.infer<typeof categoryCreateSchema>;

export {TCategory, TCategoryCreateSchema};