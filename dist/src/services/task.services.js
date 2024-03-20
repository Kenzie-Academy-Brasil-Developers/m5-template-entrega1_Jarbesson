"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.TaskServices = void 0;
const tsyringe_1 = require("tsyringe");
const prisma_1 = require("../database/prisma");
const AppError_1 = require("../errors/AppError");
let TaskServices = class TaskServices {
    constructor() {
        this.create = (payload, userId) => __awaiter(this, void 0, void 0, function* () {
            const newTask = yield prisma_1.prisma.task.create({ data: Object.assign(Object.assign({}, payload), { userId }) });
            return newTask;
        });
        this.findMany = (categoryName, userId) => __awaiter(this, void 0, void 0, function* () {
            if (!categoryName) {
                const allTasksUsers = yield prisma_1.prisma.task.findMany({
                    where: {
                        userId: userId
                    },
                    include: {
                        category: true
                    }
                });
                return allTasksUsers;
            }
            const categoryFound = yield prisma_1.prisma.category.findFirst({
                where: { name: categoryName }
            });
            if (!categoryFound) {
                throw new AppError_1.AppError("category not found", 409);
            }
            if (categoryFound.userId !== userId) {
                throw new AppError_1.AppError("This users is not the category owner", 401);
            }
            const allTasks = yield prisma_1.prisma.task.findMany({
                where: {
                    userId, categoryId: categoryFound.id
                },
                include: {
                    category: true
                }
            });
            return allTasks;
        });
        this.findOne = (taskId) => __awaiter(this, void 0, void 0, function* () {
            const findTask = yield prisma_1.prisma.task.findFirst({ where: {
                    id: taskId
                },
                include: {
                    category: true
                } });
            return findTask;
        });
        this.update = (taskId, payload) => __awaiter(this, void 0, void 0, function* () {
            const updateTask = yield prisma_1.prisma.task.update({ where: { id: taskId }, data: payload });
            return updateTask;
        });
        this.delete = (taskId) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.task.delete({ where: { id: taskId } });
        });
    }
};
exports.TaskServices = TaskServices;
exports.TaskServices = TaskServices = __decorate([
    (0, tsyringe_1.injectable)()
], TaskServices);
