import { MovieBelongsToCollection } from '@/common/dto/movie/movie-belongs-to-collection'
import { MovieGenre } from '@/common/dto/movie/movie-genre'
import { MovieProductionCompany } from '@/common/dto/movie/movie-production-company'
import { MovieProductionCountry } from '@/common/dto/movie/movie-production-country'
import { MovieSpokenLanguage } from '@/common/dto/movie/movie-spoken-language'
import { BaseMovieEntity } from '@/db/base-movie.entity'
import { Injectable } from '@nestjs/common'
import { Field, Float, ObjectType } from '@nestjs/graphql'
import { InjectDataSource } from '@nestjs/typeorm'
import { CreateTypeOrmEntity, GenericTypeOrmRepository, TypeORMHelper, UpdateTypeOrmEntity } from '@repo/pkg-helpers'
import { Column, DataSource, Entity } from 'typeorm'

const tableName = TypeORMHelper.getPrefixedTableName('movies_details')

@ObjectType()
@Entity({ name: tableName })
export class MovieDetailsEntity extends BaseMovieEntity {
    @Column({ type: 'json' })
    @Field(() => [MovieGenre])
    genres: MovieGenre[]

    @Column({ type: 'json', nullable: true })
    @Field(() => MovieBelongsToCollection, { nullable: true })
    belongs_to_collection: MovieBelongsToCollection

    @Column()
    @Field(() => Float)
    budget: number

    @Column()
    @Field(() => String)
    homepage: string

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    imdb_id: string

    @Column({ type: 'json' })
    @Field(() => [String])
    origin_country: string[]

    @Column({ type: 'json' })
    @Field(() => [MovieProductionCompany])
    production_companies: MovieProductionCompany[]

    @Column({ type: 'json' })
    @Field(() => [MovieProductionCountry])
    production_countries: MovieProductionCountry[]

    @Column()
    @Field(() => Number)
    revenue: number

    @Column()
    @Field(() => Number)
    runtime: number

    @Column({ type: 'json' })
    @Field(() => [MovieSpokenLanguage])
    spoken_languages: MovieSpokenLanguage[]

    @Column()
    @Field(() => String)
    status: string

    @Column()
    @Field(() => String)
    tagline: string
}

export const MOVIES_DETAILS_TABLE = TypeORMHelper.getTableProperties(MovieDetailsEntity, tableName)

export type MovieDetailsCreateEntity = CreateTypeOrmEntity<MovieDetailsEntity, 'createdAt' | 'updatedAt'>
export type MovieDetailsUpdateEntity = UpdateTypeOrmEntity<MovieDetailsEntity, 'id' | 'createdAt' | 'updatedAt'>

@Injectable()
export class MovieDetailsRepository extends GenericTypeOrmRepository<
    MovieDetailsEntity,
    MovieDetailsCreateEntity,
    MovieDetailsUpdateEntity
> {
    constructor(@InjectDataSource() dataSource: DataSource) {
        super(MovieDetailsEntity, dataSource)
    }
}
