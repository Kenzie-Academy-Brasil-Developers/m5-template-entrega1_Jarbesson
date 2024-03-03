import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class ValidateCategoryUser{
    static isCategoryOwner = async (req: Request ,res:Response ,next:NextFunction): Promise<void> =>{
        const sub = Number(res.locals.decoded.sub);

        const {category} = res.locals;

        if (category.userId !== Number(sub)) {
            throw new AppError("This user is not the category owner",403)
        }

        return next();
    }
}