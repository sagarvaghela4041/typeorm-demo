"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const database_service_1 = require("./database-service");
const user = new User_1.User();
user.name = "vaghela";
user.active = false;
async function test() {
    const databaseService = new database_service_1.DatabaseService();
    await databaseService.getConnection();
    const connection = typeorm_1.getConnection();
    const userRepository = connection.getRepository(User_1.User);
    userRepository.save(user);
}
exports.test = test;
