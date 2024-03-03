import { Request, Response } from "express";
import { SessionServices } from "../services/session.services";

export class SessionController {

    public login = async (req:Request, res:Response):Promise<Response> =>{
        const  sessionService = new SessionServices();
        const token = await sessionService.login(req.body);
        return res.status(200).json(token)
    }
}