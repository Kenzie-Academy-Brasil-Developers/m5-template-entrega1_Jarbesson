import { NextFunction, Request, Response } from "express";
// import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class  PermissionMiddlware {
    static isAdminOrwnerUser = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
        const userTokenId = Number(res.locals.decoded.sub);
        // const userId = Number(req.params.userId);

        // const userToken = await prisma.user.findFirst({
        //     where: { id: userTokenId }
        // });

        if (!userTokenId) {
            throw new AppError("This user is not the task owner",403);
        }

    }
}