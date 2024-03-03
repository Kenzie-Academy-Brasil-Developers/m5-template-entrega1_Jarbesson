import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCategory, TCategoryCreateSchema } from "../interfaces/category.interfaces";

@injectable()
export class CategoryServices{
    public create = async(payload: TCategoryCreateSchema, userId: number ):Promise<TCategory> =>{
        
        const newCategory = await prisma.category.create({
            data: {...payload, userId}
            
        });

        return newCategory
    };

    public delete = async (id: number) => {
        await prisma.category.delete({where: {id}});
    };
}