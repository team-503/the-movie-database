import { JSONHelper } from '@repo/pkg-helpers'
import { ZodIssue } from 'zod'

export class EnvSchemaValidationError extends Error {
    constructor(errors: ZodIssue[]) {
        super(`Environment variables validation failed: ${JSONHelper.stringifyError(errors)}`)
    }
}
