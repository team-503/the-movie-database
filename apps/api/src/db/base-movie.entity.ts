import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@ObjectType({ isAbstract: true })
export class BaseMovieEntity {
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field(() => Boolean)
    adult: boolean

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    backdrop_path: string

    @Column()
    @Field(() => String)
    original_language: string

    @Column()
    @Field(() => String)
    original_title: string

    @Column({ type: 'text' })
    @Field(() => String)
    overview: string

    @Column()
    @Field(() => Number)
    popularity: number

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    poster_path: string

    @Column()
    @Field(() => String)
    release_date: string

    @Column()
    @Field(() => String)
    title: string

    @Column()
    @Field(() => Boolean)
    video: boolean

    @Column()
    @Field(() => Number)
    vote_average: number

    @Column()
    @Field(() => Number)
    vote_count: number
}