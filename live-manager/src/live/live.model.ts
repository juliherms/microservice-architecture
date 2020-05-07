import {
    Entity,
    Column,
    PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';

export enum LiveStatus {
    PENDING = 'pending',
    DONE = 'done'
}

/**
 * Classe responsável por representar uma live no sistema
 */
@Entity({name: 'lives'})
export class Live {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: "timestamp"})
    date: Date;

    @Column()
    password: string;

    @Column()
    slug: string;

    @Column()
    status: LiveStatus = LiveStatus.PENDING;

    @CreateDateColumn({type: "timestamp"})
    created_at: Date;

}