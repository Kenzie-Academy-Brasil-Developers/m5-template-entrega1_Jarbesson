import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class ValidateTaskUser{
    static isTaskOwner = async (req: Request ,res:Response ,next:NextFunction): Promise<void> =>{
        const sub = Number(res.locals.decoded.sub);

        const {task} = res.locals;

        if (task.userId !== Number(sub)) {
            throw new AppError("This user is not the Task owner",403)
        }

        return next();
    }
} 