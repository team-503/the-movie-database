import {
    DataSource,
    DeepPartial,
    FindOptionsWhere,
    InsertResult,
    ObjectId,
    ObjectLiteral,
    Repository,
    SaveOptions,
    UpdateResult,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { UpsertOptions } from 'typeorm/repository/UpsertOptions'

export class GenericTypeOrmRepository<
    TEntity extends ObjectLiteral,
    TCreate extends DeepPartial<TEntity>,
    TUpdate extends DeepPartial<TEntity>,
> extends Repository<TEntity> {
    constructor(
        private entity: new () => TEntity,
        private dataSource: DataSource,
    ) {
        super(entity, dataSource.createEntityManager())
    }

    override create(): TEntity
    override create(entity: TCreate[]): TEntity[]
    override create(entity: TCreate): TEntity
    override create(entity?: unknown): TEntity | TEntity[] {
        return super.create(entity as TEntity)
    }

    override save(entity: TCreate[], options: SaveOptions & { reload: false }): Promise<TEntity[]>
    override save(entity: TCreate[], options?: SaveOptions): Promise<TEntity[]>
    override save(entity: TCreate, options: SaveOptions & { reload: false }): Promise<TEntity>
    override save(entity: TCreate, options?: SaveOptions): Promise<TEntity>
    override save(entity: unknown, options?: unknown): Promise<TEntity[]> | Promise<TEntity[]> | Promise<TEntity> {
        return super.save(entity as TEntity, options as SaveOptions)
    }

    // @ts-ignore
    override insert(entity: TCreate | TCreate[]): Promise<InsertResult> {
        return super.insert(entity as QueryDeepPartialEntity<TEntity> | QueryDeepPartialEntity<TEntity>[])
    }

    // @ts-ignore
    override update(
        criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<TEntity>,
        partialEntity: TUpdate,
    ): Promise<UpdateResult> {
        return super.update(criteria, partialEntity as QueryDeepPartialEntity<TEntity>)
    }

    // @ts-ignore
    override upsert(
        entityOrEntities: TUpdate | TUpdate[],
        conflictPathsOrOptions: string[] | UpsertOptions<TEntity>,
    ): Promise<InsertResult> {
        return super.upsert(
            entityOrEntities as QueryDeepPartialEntity<TEntity> | QueryDeepPartialEntity<TEntity>[],
            conflictPathsOrOptions,
        )
    }
}
