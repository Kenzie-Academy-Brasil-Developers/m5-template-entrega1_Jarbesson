"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importStar(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const task_routes_1 = require("./routes/task.routes");
const category_routes_1 = require("./routes/category.routes");
const handleErrors_error_1 = require("./middlewares/handleErrors.error");
const user_routes_1 = require("./routes/user.routes");
const session_routes_1 = require("./routes/session.routes");
exports.app = (0, express_1.default)();
exports.app.use((0, helmet_1.default)());
exports.app.use((0, express_1.json)());
exports.app.use("/tasks", task_routes_1.taskRouter);
exports.app.use("/categories", category_routes_1.categoryRouter);
exports.app.use("/users", user_routes_1.userRouter);
exports.app.use("/users/login", session_routes_1.sessionRouter);
exports.app.use(handleErrors_error_1.HandleErrors.execute);
