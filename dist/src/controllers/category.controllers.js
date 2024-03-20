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
exports.CategoryControllers = void 0;
const category_services_1 = require("../services/category.services");
const tsyringe_1 = require("tsyringe");
let CategoryControllers = class CategoryControllers {
    constructor() {
        this.categoryService = new category_services_1.CategoryServices();
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = Number(res.locals.decoded.sub);
            const newCategory = yield this.categoryService.create(req.body, userId);
            return res.status(201).json(newCategory);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(req.params.id);
            const categoryService = tsyringe_1.container.resolve(category_services_1.CategoryServices);
            yield categoryService.delete(params);
            return res.status(204).json();
        });
    }
};
exports.CategoryControllers = CategoryControllers;
exports.CategoryControllers = CategoryControllers = __decorate([
    (0, tsyringe_1.injectable)()
], CategoryControllers);
