"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryCreateSchema = exports.categoryShema = void 0;
const zod_1 = require("zod");
exports.categoryShema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(1).max(255)
});
exports.categoryCreateSchema = exports.categoryShema.omit({ id: true });
