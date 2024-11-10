import { EnvHelper } from '@repo/pkg-helpers'
import { createLogger } from './logger'

export * from './logger'

export const logger = createLogger({
    logLevel: 'silly',
    isDevelopment: EnvHelper.isDevelopment(),
})
