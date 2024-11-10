import { OmitObjectMethods } from '../common/omit-object-methods'

export type UpdateTypeOrmEntity<T, TOmit extends keyof OmitObjectMethods<T> = never> = Partial<OmitObjectMethods<Omit<T, TOmit>>>
