import { EnvHelper } from './env-helper'

export class JSONHelper {
    static stringifyError(error: object | object[]): string {
        return JSON.stringify(error, null, EnvHelper.isDevelopment() ? 2 : 0)
    }
}
