"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateShema = exports.taskCreateSchema = exports.taskReturnShema = exports.taskCategorySchema = exports.taskSchema = void 0;
const zod_1 = require("zod");
const category_schema_1 = require("./category.schema");
exports.taskSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().min(1).max(255),
    content: zod_1.z.string().min(1).max(255),
    finished: zod_1.z.boolean().optional(),
    categoryId: zod_1.z.number().positive().nullish()
});
exports.taskCategorySchema = exports.taskSchema.extend({
    category: category_schema_1.categoryShema.nullish().optional()
});
exports.taskReturnShema = exports.taskSchema.omit({ categoryId: true });
exports.taskCreateSchema = exports.taskSchema.omit({ id: true, finished: true });
exports.taskUpdateShema = exports.taskSchema.omit({ id: true });
