export class EnvHelper {
    static isProduction(): boolean {
        return process.env.NODE_ENV === 'production'
    }

    static isDevelopment(): boolean {
        return process.env.NODE_ENV === 'development'
    }

    static isTest(): boolean {
        return process.env.NODE_ENV === 'test'
    }
}
