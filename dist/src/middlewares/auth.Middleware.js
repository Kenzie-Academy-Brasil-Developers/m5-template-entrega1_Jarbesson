"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    constructor() {
        this.isAuthenticated = (req, res, next) => {
            const { authorization } = req.headers;
            if (!authorization) {
                throw new AppError_1.AppError("Token is required", 401);
            }
            const [_beare, token] = authorization.split(" ");
            const secret = process.env.JWT_SECRET;
            (0, jsonwebtoken_1.verify)(token, secret);
            res.locals = Object.assign(Object.assign({}, res.locals), { decoded: (0, jsonwebtoken_1.decode)(token) });
            return next();
        };
    }
}
exports.AuthMiddleware = AuthMiddleware;
