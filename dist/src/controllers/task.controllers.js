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
exports.TaskControllers = void 0;
const task_services_1 = require("../services/task.services");
const tsyringe_1 = require("tsyringe");
class TaskControllers {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const userId = Number(res.locals.decoded.sub);
            const taskService = tsyringe_1.container.resolve(task_services_1.TaskServices);
            const newTask = yield taskService.create(body, userId);
            return res.status(201).json(newTask);
        });
        this.findMany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const category = (_a = req.query) === null || _a === void 0 ? void 0 : _a.category;
            const userId = Number(res.locals.decoded.sub);
            const taskService = tsyringe_1.container.resolve(task_services_1.TaskServices);
            const allTask = yield taskService.findMany(category, userId);
            return res.status(200).json(allTask);
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const taskService = tsyringe_1.container.resolve(task_services_1.TaskServices);
            const task = yield taskService.findOne(id);
            return res.status(200).json(task);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(req.params.id);
            const body = req.body;
            const taskService = tsyringe_1.container.resolve(task_services_1.TaskServices);
            const task = yield taskService.update(params, body);
            return res.status(200).json(task);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(req.params.id);
            const taskService = tsyringe_1.container.resolve(task_services_1.TaskServices);
            const task = yield taskService.delete(params);
            return res.status(204).json(task);
        });
    }
}
exports.TaskControllers = TaskControllers;
