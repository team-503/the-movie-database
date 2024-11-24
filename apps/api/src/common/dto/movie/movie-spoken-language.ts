import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieSpokenLanguage {
    @Field(() => String)
    english_name: string

    @Field(() => String)
    iso_639_1: string

    @Field(() => String)
    name: string
}
