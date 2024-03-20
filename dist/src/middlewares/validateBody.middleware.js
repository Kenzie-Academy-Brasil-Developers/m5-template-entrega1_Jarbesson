"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
class validateBody {
    static execute(schema) {
        return (req, _, next) => {
            req.body = schema.parse(req.body);
            return next();
        };
    }
}
exports.validateBody = validateBody;
