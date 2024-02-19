import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class ValidateIdMiddleware {

    static task = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            const params = Number(req.params.id);
            const search = await prisma.task.findFirst({where: {id: params}})

            if (!search) {
                return res.status(404).json({ messa: "Task not found"});
            }

            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    static category = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            if (req.params) {
                const params = Number(req.params.id);
                const search = await prisma.category.findFirst({ where: { id: params}});

                if (!search) {
                    return res.status(404).json({ message: "Category not found"});
                }
            }
            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
