import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import { photoAndPhotographer } from './services/photographer-service';
dotenv.config();
const app = express();
photoAndPhotographer();
app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));