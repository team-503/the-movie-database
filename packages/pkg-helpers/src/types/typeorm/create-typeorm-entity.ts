import { OmitObjectMethods } from '../common/omit-object-methods'
import { PartialSome } from '../common/partial-some'

export type CreateTypeOrmEntity<
    T,
    TOmit extends keyof OmitObjectMethods<T> = never,
    TPartial extends Exclude<keyof OmitObjectMethods<T>, TOmit> = never,
> = OmitObjectMethods<Omit<PartialSome<T, TPartial>, TOmit>>
