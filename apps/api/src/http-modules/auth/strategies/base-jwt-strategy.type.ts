import { UserEntity } from '../../../db/user.entity'

export interface BaseJwtStragy {
    validate(payload: any): UserEntity | Promise<UserEntity>
}
