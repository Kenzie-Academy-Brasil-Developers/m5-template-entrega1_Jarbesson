"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionServices = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = require("../database/prisma");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_schema_1 = require("../schemas/user.schema");
class SessionServices {
    constructor() {
        this.login = ({ email, password }) => __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield prisma_1.prisma.user.findFirst({ where: { email } });
            if (!foundUser) {
                throw new AppError_1.AppError("User not exists", 404);
            }
            const pwdMatch = yield (0, bcrypt_1.compare)(password, foundUser.password);
            if (!pwdMatch) {
                throw new AppError_1.AppError("Email and password doesn't match", 401);
            }
            const secret = process.env.JWT_SECRET;
            const expiresIn = process.env.EXPIRES_IN;
            const token = (0, jsonwebtoken_1.sign)({ id: foundUser.id }, secret, {
                expiresIn,
                subject: foundUser.id.toString(),
            });
            return {
                accessToken: token,
                user: user_schema_1.useReturnShema.parse(foundUser)
            };
        });
    }
}
exports.SessionServices = SessionServices;
