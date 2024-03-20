"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionCretaSchema = void 0;
const user_schema_1 = require("./user.schema");
exports.sessionCretaSchema = user_schema_1.userSchema.pick({ email: true, password: true });
