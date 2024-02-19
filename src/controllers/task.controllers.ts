import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";
import { container } from "tsyringe";



export class TaskControllers {
    private taskService = container.resolve(TaskServices);

     public create = async (req: Request, res: Response):Promise<Response> => {
        const body = req.body
        const newTask = await this.taskService.create(body);
        return res.status(201).json(newTask);
    }

    public findMany = async (req: Request, res: Response):Promise<Response> => {    
        const  category  = req.query?.category    
        const allTask = await this.taskService.findMany(category as string);
        return res.status(200).json(allTask)
    }

     public findOne = async (req: Request, res: Response):Promise<Response> =>{
        const id = Number(req.params.id)
        const task = await this.taskService.findOne(id);
        return res.status(200).json(task);
    }


    public update = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        const body = req.body
        const task = await this.taskService.update(params,body);
        return res.status(200).json(task);
    }

    public delete = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        const task = await this.taskService.delete(params);
        return res.status(204).json(task);
    }
};