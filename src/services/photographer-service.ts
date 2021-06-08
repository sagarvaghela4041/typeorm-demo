import { getConnection } from "typeorm";
import { Photo } from "../entity/Photo";
import { Photographer } from "../entity/Photographer";
import { DatabaseService } from "./database-service";

export async function photoAndPhotographer() {
    const databaseService = new DatabaseService();
    await databaseService.getConnection();
    const connection = getConnection();
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
    // const photo2 = await connection.getRepository(Photo).createQueryBuilder('photo').leftJoinAndSelect('photo.photographer', 'photographer').where('photo.id = :id', { id: 2 }).getOne();
    // const photographer = await connection.getRepository(Photographer).findOne({ id: 1 });
    // if (photo2 && photographer) {
    //     photo2.photographer = photographer;
    //     await connection.getRepository(Photo).save(photo2);
    // }

    /* Creating new Photographer and pushing photos manually */
    // const photographer = new Photographer();
    // photographer.name = 'new photographer';
    // await connection.manager.save(photographer);

    /* Getting new photographer's details */
    const photographer2 = await connection.getRepository(Photographer).createQueryBuilder('photographer').
        leftJoinAndSelect('photographer.photos', 'photo').where('photographer.id = :id', { id: 2 }).getOne();
    const photos = await connection.getRepository(Photo).find();
    // if (photos && photographer2) {
    //     photographer2.photos = photos;
    //     await connection.getRepository(Photographer).save(photographer2);
    // }
    console.log(photographer2?.photos);

}