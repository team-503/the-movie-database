import { Injectable } from '@nestjs/common'
import { Field, InputType, Int, ObjectType, OmitType, PickType } from '@nestjs/graphql'
import { CreateTypeOrmEntity, GenericTypeOrmRepository, TypeORMHelper, UpdateTypeOrmEntity } from '@repo/pkg-helpers'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Column, CreateDateColumn, DataSource, Entity, Index, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'

const tableName = TypeORMHelper.getPrefixedTableName('users')

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
@Entity({ name: tableName })
@Unique(['email'])
@Index(['email'])
export class UserEntity {
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column({ type: 'varchar' })
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    password: string
}

@InputType()
export class UserInput extends PickType(UserEntity, ['email', 'password'] as const, InputType) {}

@ObjectType()
export class UserOutput extends OmitType(UserEntity, ['createdAt', 'updatedAt', 'password'] as const, ObjectType) {}

export const USERS_TABLE = TypeORMHelper.getTableProperties(UserEntity, tableName)

export type UserCreateEntity = CreateTypeOrmEntity<UserEntity, 'id' | 'createdAt' | 'updatedAt'>
export type UserUpdateEntity = UpdateTypeOrmEntity<UserEntity, 'id' | 'createdAt' | 'updatedAt'>

@Injectable()
export class UserRepository extends GenericTypeOrmRepository<UserEntity, UserCreateEntity, UserUpdateEntity> {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource)
    }
}
