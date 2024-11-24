import { EnvManager } from '@repo/pkg-env'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.string().optional(),
    PORT: z.number().optional(),
    TMDB_API_KEY: z.string(),
})

export const ENV = new EnvManager(envSchema, { envFilesPaths: ['.env'] }).getEnv()
