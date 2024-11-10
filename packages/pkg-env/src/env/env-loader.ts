import { logger } from '@repo/pkg-logger'
import dotenv from 'dotenv'
import { EnvFileLoadError } from '../errors/env-file-load-error'

export class EnvLoader {
    loadEnv(filePath: string): Record<string, any> {
        const result = dotenv.config({ path: filePath })

        if (result.error) {
            logger.warn(new EnvFileLoadError(filePath, result.error))
            return {}
        }

        const envVars = result.parsed || {}

        Object.keys(envVars).forEach(key => {
            const value = envVars[key]
            if (value !== undefined) {
                envVars[key] = this.parseValue(value)
            }
        })

        return envVars
    }

    parseValue(value: string): any {
        if (value === 'true') return true
        if (value === 'false') return false
        if (!isNaN(Number(value))) return Number(value)
        return value
    }
}
