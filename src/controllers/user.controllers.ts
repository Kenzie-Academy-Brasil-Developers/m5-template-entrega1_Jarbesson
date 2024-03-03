import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { Request, Response } from "express";


export class UserControllers{
    
    public register = async (req:Request, res:Response):Promise<Response> =>{     
        const userServices = container.resolve(UserServices);
        const response = await userServices.register(req.body);

        return res.status(201).json(response);
    }

    public getUser = async (req:Request, res:Response):Promise<Response> => {
        const userServices = container.resolve(UserServices);
        const response = await userServices.getUser(Number(res.locals.decoded.sub));

        return res.status(200).json(response);
    }
}