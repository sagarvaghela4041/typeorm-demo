import { getConnection } from "typeorm";
import { Result } from "../entity/Result";
import { Student } from "../entity/Student";
import { DatabaseService } from "./database-service";

export async function result(): Promise<void> {
    const databaseService = new DatabaseService();
    await databaseService.getConnection();
    const connection = getConnection();
    const userRepository = connection.getRepository(Student);
    // const student = new Student();
    // student.name = "test";
    // userRepository.save(student);

    // const result = new Result();
    // result.marks = 75;
    // result.student = student;
    const resultRepository = connection.getRepository(Result);
    // resultRepository.save(result);
    const user = await resultRepository.createQueryBuilder('result').innerJoinAndSelect('result.student', 'student').getMany();
    console.log(user);

}