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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIdMiddleware = void 0;
const prisma_1 = require("../database/prisma");
const AppError_1 = require("../errors/AppError");
class ValidateIdMiddleware {
}
exports.ValidateIdMiddleware = ValidateIdMiddleware;
_a = ValidateIdMiddleware;
ValidateIdMiddleware.emailIsUnique = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const foundUser = yield prisma_1.prisma.user.findFirst({ where: { email } });
    if (foundUser) {
        throw new AppError_1.AppError("This email is already registered.", 409);
    }
    return next();
});
ValidateIdMiddleware.task = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const params = Number(req.params.id);
    const search = yield prisma_1.prisma.task.findFirst({ where: { id: params } });
    if (!search) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.locals.task = search;
    next();
});
ValidateIdMiddleware.category = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const params = Number(req.params.id);
    const search = yield prisma_1.prisma.category.findFirst({ where: { id: params } });
    if (!search) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.locals.category = search;
    next();
});
