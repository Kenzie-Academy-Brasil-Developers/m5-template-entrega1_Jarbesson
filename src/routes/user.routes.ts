import { Router } from "express"
import { UserControllers } from "../controllers/user.controllers"
import { AuthMiddleware } from "../middlewares/auth.Middleware";
import { ValidateIdMiddleware } from "../middlewares/validateId.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";


const userControllers = new UserControllers();

const auth = new AuthMiddleware();

export const userRouter = Router();

userRouter.post("/",validateBody.execute(userCreateSchema),ValidateIdMiddleware.emailIsUnique, userControllers.register)
userRouter.get("/profile",auth.isAuthenticated, userControllers.getUser)