import { ArgsType, Field, Int } from '@nestjs/graphql'
import { IsNumber, IsPositive } from 'class-validator'

@ArgsType()
export class PageArgs {
    @IsNumber()
    @IsPositive()
    @Field(() => Int, { nullable: true, defaultValue: 1 })
    page: number
}
