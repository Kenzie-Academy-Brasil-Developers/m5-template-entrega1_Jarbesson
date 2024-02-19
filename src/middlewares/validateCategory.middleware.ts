
import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";


export class ValidateCategory {
     static execute = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            if (req.body.categoryId) {
                const category = req.body.categoryId
                const search = await prisma.category.findFirst({where: { id: category}});

                if (!search) {
                    return res.status(404).json({ message: "Category not found"})
                }
            }
            next();
        } catch (error) {
            return res.status(500).json(error)
        }
    };
}