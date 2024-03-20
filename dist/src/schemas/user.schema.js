"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReturnShema = exports.userCreateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(3).max(255),
    email: zod_1.z.string().email().max(255),
    password: zod_1.z.string()
});
exports.userCreateSchema = exports.userSchema.omit({ id: true });
exports.useReturnShema = exports.userSchema.omit({ password: true });
