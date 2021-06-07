import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import { test } from './services/user-service';
dotenv.config();
const app = express();
test();
app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));