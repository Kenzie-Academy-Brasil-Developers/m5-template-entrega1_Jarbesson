import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";
import { container } from "tsyringe";



export class TaskControllers {

     public create = async (req: Request, res: Response):Promise<Response> => {
        const body = req.body
        const userId = Number(res.locals.decoded.sub)
        const  taskService = container.resolve(TaskServices);

        const newTask = await taskService.create(body,userId);
        return res.status(201).json(newTask);
    }

    public findMany = async (req: Request, res: Response):Promise<Response> => {    
        const  category  = req.query?.category   
        const userId = Number(res.locals.decoded.sub) 
        const  taskService = container.resolve(TaskServices);
        const allTask = await taskService.findMany(category as string, userId);
        return res.status(200).json(allTask)
    }

     public findOne = async (req: Request, res: Response):Promise<Response> =>{
        const id = Number(req.params.id)
        const  taskService = container.resolve(TaskServices);
        const task = await taskService.findOne(id);
        return res.status(200).json(task);
    }


    public update = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        const body = req.body
        const taskService = container.resolve(TaskServices);

        const task = await taskService.update(params,body);
        return res.status(200).json(task);
    }

    public delete = async(req: Request, res: Response):Promise<Response> =>{
        const params = Number(req.params.id);
        const taskService = container.resolve(TaskServices);
        const task = await taskService.delete(params);
        return res.status(204).json(task);
    }
};