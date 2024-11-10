import { Injectable } from '@nestjs/common'
import { CreateTypeOrmEntity, GenericTypeOrmRepository, TypeORMHelper, UpdateTypeOrmEntity } from '@repo/pkg-helpers'
import { Column, CreateDateColumn, DataSource, Entity, Index, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'

const tableName = TypeORMHelper.getPrefixedTableName('users')

// @Entity({ name: tableName })
// @Unique(['email'])
// @Index(['email'])
export class UserEntity {
    // @PrimaryGeneratedColumn()
    id: number

    // @CreateDateColumn()
    createdAt: Date

    // @UpdateDateColumn()
    updatedAt: Date

    // @Column({ type: 'varchar' })
    email: string

    // @Column({ type: 'varchar' })
    password: string
}

export const USERS_TABLE = TypeORMHelper.getTableProperties(UserEntity, tableName)

export type UserCreateEntity = CreateTypeOrmEntity<UserEntity, 'id' | 'createdAt' | 'updatedAt'>
export type UserUpdateEntity = UpdateTypeOrmEntity<UserEntity, 'id' | 'createdAt' | 'updatedAt'>

@Injectable()
export class UserRepository extends GenericTypeOrmRepository<UserEntity, UserCreateEntity, UserUpdateEntity> {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource)
    }
}
