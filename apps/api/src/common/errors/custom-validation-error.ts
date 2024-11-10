import { JSONHelper } from '@repo/pkg-helpers'
import { ValidationError } from 'class-validator'

export class CustomValidationError extends Error {
    constructor(validationErrors: ValidationError[] = []) {
        super(`Validation error: ${JSONHelper.stringifyError(validationErrors)}`)
    }
}
