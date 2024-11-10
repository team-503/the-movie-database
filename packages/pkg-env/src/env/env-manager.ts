import { z, ZodSchema, ZodTypeAny } from 'zod'
import { EnvLoader } from './env-loader'
import { EnvUtils } from './env-utils'
import { EnvValidator } from './env-validator'

export class EnvManager<TSchema extends ZodTypeAny> {
    private envVars: z.infer<TSchema>
    private loader: EnvLoader
    private validator: EnvValidator
    private schema: ZodSchema<TSchema>

    constructor(schema: TSchema, envFilesPaths: string[] = []) {
        this.schema = schema
        this.loader = new EnvLoader()
        this.validator = new EnvValidator()
        this.envVars = {
            NODE_ENV: process.env.NODE_ENV,
        }

        envFilesPaths.forEach(filePath => {
            const loadedEnv = this.loader.loadEnv(filePath)
            this.envVars = { ...this.envVars, ...loadedEnv }
        })

        this.validateEnv()
    }

    private validateEnv(): void {
        this.validator.validate(this.schema, this.envVars)
    }

    getEnv(): z.infer<TSchema> & EnvUtils<z.infer<TSchema>> {
        const utilsInstance = new EnvUtils(this.envVars)
        Object.assign(utilsInstance, this.envVars)
        return utilsInstance
    }
}
