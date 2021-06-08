import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Photographer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Photo, photo => photo.photographer)
    photos: Photo[];
}