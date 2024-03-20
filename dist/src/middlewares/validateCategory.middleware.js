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
exports.ValidateCategory = void 0;
const prisma_1 = require("../database/prisma");
class ValidateCategory {
}
exports.ValidateCategory = ValidateCategory;
_a = ValidateCategory;
ValidateCategory.execute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.categoryId) {
            const category = req.body.categoryId;
            const search = yield prisma_1.prisma.category.findFirst({ where: { id: category } });
            if (!search) {
                return res.status(404).json({ message: "Category not found" });
            }
        }
        next();
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
