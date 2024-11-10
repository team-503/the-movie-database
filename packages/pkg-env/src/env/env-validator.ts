import { ZodSchema } from 'zod'
import { EnvSchemaValidationError } from '../errors/env-schema-validation-error'

export class EnvValidator {
    validate(schema: ZodSchema<any>, envVars: Record<string, any>): void {
        const result = schema.safeParse(envVars)
        if (!result.success) {
            throw new EnvSchemaValidationError(result.error?.errors)
        }
    }
}
