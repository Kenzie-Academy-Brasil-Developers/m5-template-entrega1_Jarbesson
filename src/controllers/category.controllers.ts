import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";
import { container } from "tsyringe";

export class CategoryControllers{
    private categoryService = container.resolve(CategoryServices);

    public create = async(req:Request, res:Response):Promise<Response> =>{
        const body = req.body
        const newCategory = await this.categoryService.create(body);
        return res.status(201).json(newCategory);
    };

    public delete = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        await this.categoryService.delete(params);
        return res.status(204).json()
    };
}