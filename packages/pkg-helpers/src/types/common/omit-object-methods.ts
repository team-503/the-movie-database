type NonFunctionProps<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K
}[keyof T]
export type OmitObjectMethods<T> = Pick<T, NonFunctionProps<T>>
