"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const typeorm_1 = require("typeorm");
const Result_1 = require("../entity/Result");
const Student_1 = require("../entity/Student");
const database_service_1 = require("./database-service");
async function result() {
    const databaseService = new database_service_1.DatabaseService();
    await databaseService.getConnection();
    const connection = typeorm_1.getConnection();
    const userRepository = connection.getRepository(Student_1.Student);
    // const student = new Student();
    // student.name = "test";
    // userRepository.save(student);
    // const result = new Result();
    // result.marks = 75;
    // result.student = student;
    const resultRepository = connection.getRepository(Result_1.Result);
    // resultRepository.save(result);
    const user = await resultRepository.createQueryBuilder('result').innerJoin('result.student', 'student').getMany();
    console.log(user);
}
exports.result = result;
