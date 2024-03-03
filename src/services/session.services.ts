import { compare } from "bcrypt";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";
import { SessionCreate, SessionReturn } from "../interfaces/session.interface";
import { sign } from "jsonwebtoken";
import { useReturnShema } from "../schemas/user.schema";

export class SessionServices {
    public login = async ({email, password}: SessionCreate):Promise<SessionReturn> => {
        const foundUser = await prisma.user.findFirst({where: {email}});
    if (!foundUser) {
       throw new AppError( "User not exists", 404)     
    }

    const pwdMatch = await compare(password, foundUser.password);
    if (!pwdMatch) {
        throw new AppError("Email and password doesn't match", 401)
    }

    const secret = process.env.JWT_SECRET!;
    const expiresIn = process.env.EXPIRES_IN!;
     
    const token: string = sign({id: foundUser.id}, secret, {
        expiresIn,
        subject: foundUser.id.toString(),
    });

    return {
        accessToken: token,
        user: useReturnShema.parse(foundUser)
    }
    }
}