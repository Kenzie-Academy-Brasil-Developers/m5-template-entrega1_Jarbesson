import "reflect-metadata"
import "express-async-errors"
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import { taskRouter } from "./routes/task.routes";
import { categoryRouter } from "./routes/category.routes";
import { HandleErrors } from "./middlewares/handleErrors.error";
import { userRouter } from "./routes/user.routes";
import { sessionRouter } from "./routes/session.routes";

export const app = express();

app.use(helmet());

app.use(cors())

app.use(json());

app.use("/tasks", taskRouter);

app.use("/categories", categoryRouter);

app.use("/users", userRouter);

app.use("/users/login", sessionRouter);

app.use(HandleErrors.execute);

