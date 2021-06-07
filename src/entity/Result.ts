import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';

@Entity()
export class Result {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marks: number;

    @OneToOne(() => Student)
    @JoinColumn([{ name: "student" }])
    student: Student;
}