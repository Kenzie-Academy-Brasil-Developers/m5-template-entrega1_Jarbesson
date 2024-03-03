import { Router } from "express";
import { SessionController } from "../controllers/session.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionCretaSchema } from "../schemas/session.schema";

export const sessionRouter = Router()
const sessionController = new SessionController();

sessionRouter.post("/",validateBody.execute(sessionCretaSchema), sessionController.login )