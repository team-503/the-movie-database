export class EnvUtils<T extends object> {
    private env: T

    constructor(envVars: T) {
        this.env = envVars
    }

    isProduction(): boolean {
        return 'NODE_ENV' in this.env && this.env.NODE_ENV === 'production'
    }

    isDevelopment(): boolean {
        return 'NODE_ENV' in this.env && this.env.NODE_ENV === 'development'
    }

    isTest(): boolean {
        return 'NODE_ENV' in this.env && this.env.NODE_ENV === 'test'
    }
}
