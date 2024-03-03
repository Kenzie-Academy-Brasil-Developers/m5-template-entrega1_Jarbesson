import { z } from "zod";
import { sessionCretaSchema } from "../schemas/session.schema";
import { UserReturn } from "./user.interface";

type SessionCreate = z.infer<typeof sessionCretaSchema>;
type SessionReturn = {
    accessToken: string;
    user: UserReturn;
}

export {SessionCreate,SessionReturn}
