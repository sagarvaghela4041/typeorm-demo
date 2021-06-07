import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
dotenv.config();
const app = express();

try {
    createConnection().then(connection => {
        const userRepository = connection.getRepository(User);
        const user = new User();
        user.name = 'sagar';
        user.active = true;
        userRepository.save(user);
    });
}
catch (err) {
    console.log("here");
    console.log(err);
}

app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));