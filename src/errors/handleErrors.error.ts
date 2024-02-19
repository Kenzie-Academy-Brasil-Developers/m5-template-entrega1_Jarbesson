import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class HandleErrors{
    static execute (error: Error, req:Request, res:Response, Next:NextFunction) {
        if (error instanceof ZodError) {
            return res.status(400).json({ message: error});
        }
        console.log(error);
        return res.status(500).json({ message: "internal server error"});
    }
}