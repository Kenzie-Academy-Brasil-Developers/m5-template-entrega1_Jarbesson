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
exports.PermissionMiddlware = void 0;
// import { prisma } from "../database/prisma";
const AppError_1 = require("../errors/AppError");
class PermissionMiddlware {
}
exports.PermissionMiddlware = PermissionMiddlware;
_a = PermissionMiddlware;
PermissionMiddlware.isAdminOrwnerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userTokenId = Number(res.locals.decoded.sub);
    // const userId = Number(req.params.userId);
    // const userToken = await prisma.user.findFirst({
    //     where: { id: userTokenId }
    // });
    if (!userTokenId) {
        throw new AppError_1.AppError("This user is not the task owner", 403);
    }
});
