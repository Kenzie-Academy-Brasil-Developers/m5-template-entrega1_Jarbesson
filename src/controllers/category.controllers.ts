import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";
import { container, injectable } from "tsyringe";

@injectable()
export class CategoryControllers{
    private categoryService: CategoryServices = new CategoryServices(); 
    
    public create = async(req:Request, res:Response):Promise<Response> =>{
        // const body = req.body
        const userId = Number(res.locals.decoded.sub)
        console.log("userId",userId);
        
        const newCategory = await this.categoryService.create(req.body,userId);
        return res.status(201).json(newCategory);
    };

    public delete = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        const categoryService = container.resolve(CategoryServices);
        await categoryService.delete(params);
        return res.status(204).json()
    };
}