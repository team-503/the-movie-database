import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieProductionCompany {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    logo_path?: string

    @Field(() => String)
    name: string

    @Field(() => String)
    origin_country: string
}
