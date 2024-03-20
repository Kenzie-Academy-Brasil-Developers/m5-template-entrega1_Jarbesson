import bcrypt from "bcryptjs"
import { UserCreate, UserReturn } from "../interfaces/user.interface";
import { useReturnShema } from "../schemas/user.schema";
import { prisma } from "../database/prisma";

export class UserServices {
    public register = async (payload: UserCreate):Promise<UserReturn>=>{
        payload.password = await bcrypt.hash(payload.password, 10);
        const user = await prisma.user.create({data: payload});

        return useReturnShema.parse(user);
    }

    public getUser = async (userId: number):Promise<UserReturn> => {
        const user = await prisma.user.findFirst({where: {id: userId} });
        return useReturnShema.parse(user);
    }
}