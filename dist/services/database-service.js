"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const typeorm_1 = require("typeorm");
class DatabaseService {
    async getConnection() {
        await typeorm_1.createConnection();
    }
}
exports.DatabaseService = DatabaseService;
