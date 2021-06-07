import { getConnection } from "typeorm";
import { User } from "../entity/User";
import { DatabaseService } from "./database-service";

const user = new User();
user.name = "vaghela";
user.active = false;
export async function test(): Promise<void> {
    const databaseService = new DatabaseService();
    await databaseService.getConnection();
    const connection = getConnection();
    const userRepository = connection.getRepository(User);
    userRepository.save(user);
}