"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoAndPhotographer = void 0;
const typeorm_1 = require("typeorm");
const Photo_1 = require("../entity/Photo");
const database_service_1 = require("./database-service");
async function photoAndPhotographer() {
    const databaseService = new database_service_1.DatabaseService();
    await databaseService.getConnection();
    const connection = typeorm_1.getConnection();
    // const photo1 = new Photo();
    // photo1.url = "test2.jpg";
    // await connection.manager.save(photo1);
    // const photo = await connection.getRepository(Photo).find({ relations: ['photographer'] });
    // const photographer = await connection.getRepository(Photographer).find({ relations: ['photos'] });
    // if (photo) {
    //     photographer?.photos.push(photo);
    // }
    // console.log(photo);
    //await connection.manager.save(photographer);
    /* Getting photo with id = 2 and assign a photographer to it with join */
    const photo2 = connection.getRepository(Photo_1.Photo).createQueryBuilder('photo').innerJoinAndSelect('photo.photographer', 'photographer').getMany();
    console.log(photo2);
}
exports.photoAndPhotographer = photoAndPhotographer;
