export class EnvFileLoadError extends Error {
    constructor(filePath: string, error: Error) {
        super(`Failed to load ${filePath}`)
    }
}
