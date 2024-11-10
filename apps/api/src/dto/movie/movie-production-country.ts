import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieProductionCountry {
    @Field(() => String)
    iso_3166_1: string

    @Field(() => String)
    name: string
}
