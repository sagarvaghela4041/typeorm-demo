import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Photographer } from './Photographer';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => Photographer, photographer => photographer.photos)
    @JoinColumn([{ name: 'photographer' }])
    photographer: Photographer;

}