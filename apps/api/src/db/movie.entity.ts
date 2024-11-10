import { Injectable } from '@nestjs/common'
import { Field, ObjectType } from '@nestjs/graphql'
import { CreateTypeOrmEntity, GenericTypeOrmRepository, TypeORMHelper, UpdateTypeOrmEntity } from '@repo/pkg-helpers'
import { Column, DataSource, Entity } from 'typeorm'
import { BaseMovieEntity } from './base-movie.entity'

const tableName = TypeORMHelper.getPrefixedTableName('movies')

@ObjectType()
@Entity({ name: tableName })
export class MovieEntity extends BaseMovieEntity {
    @Column({ type: 'simple-json' })
    @Field(() => [Number])
    genre_ids: number[]
}

export const MOVIES_TABLE = TypeORMHelper.getTableProperties(MovieEntity, tableName)

export type MovieCreateEntity = CreateTypeOrmEntity<MovieEntity, 'createdAt' | 'updatedAt'>
export type MovieUpdateEntity = UpdateTypeOrmEntity<MovieEntity, 'id' | 'createdAt' | 'updatedAt'>

@Injectable()
export class MovieRepository extends GenericTypeOrmRepository<MovieEntity, MovieCreateEntity, MovieUpdateEntity> {
    constructor(dataSource: DataSource) {
        super(MovieEntity, dataSource)
    }
}
