import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import { result } from './services/student-service';
dotenv.config();
const app = express();
result();
app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));