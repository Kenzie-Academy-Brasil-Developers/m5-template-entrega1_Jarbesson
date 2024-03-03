import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { JwtPayload, verify,decode } from "jsonwebtoken";

export class AuthMiddleware{
    public isAuthenticated = (req:Request, res:Response, next:NextFunction):void =>{
        const {authorization} = req.headers;
        if (!authorization) {
            throw new AppError("Token is required", 401);
        }

        const [_beare, token] = authorization.split(" ");

        const secret = process.env.JWT_SECRET!;

        verify(token, secret) as JwtPayload;

        res.locals = { ...res.locals,decoded: decode(token) };


        return next();
    }
}