import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateIdMiddleware {

    static emailIsUnique = async (req:Request, res:Response, next: NextFunction):Promise<void> =>{
        const {email} = req.body;

        const foundUser = await prisma.user.findFirst({where: {email}});
        
        if (foundUser) {
            throw new AppError("This email is already registered.", 409)
        }

        return next();
    }


    static task = async (req:Request, res:Response, next: NextFunction) =>{
      
            const params = Number(req.params.id);
            const search = await prisma.task.findFirst({where: {id: params}})

            if (!search) {
                return res.status(404).json({ message: "Task not found"});
            }

            res.locals.task = search
            
            next();
      
    };

    static category = async (req:Request, res:Response, next: NextFunction) =>{
       
                const params = Number(req.params.id);
                const search = await prisma.category.findFirst({ where: { id: params}});

                if (!search) {
                    return res.status(404).json({ message: "Category not found"});
                }
                res.locals.category = search
            
            next();
      
    };
}
