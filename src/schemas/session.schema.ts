import { userSchema } from "./user.schema";

export const sessionCretaSchema = userSchema.pick({email: true, password:true});
