"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = void 0;
const zod_1 = require("zod");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
class HandleErrors {
    static execute(error, req, res, Next) {
        if (error instanceof AppError_1.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(401).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json({ message: error.errors });
        }
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}
exports.HandleErrors = HandleErrors;
