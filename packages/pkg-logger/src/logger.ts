import { createLogger as createWinstonLogger, transports } from 'winston'
import { loggerFormat } from './logger-format'

export const createLogger = (
    {
        logLevel,
        logFile,
        isDevelopment,
    }: {
        logLevel: 'error' | 'warn' | 'help' | 'data' | 'info' | 'debug' | 'prompt' | 'verbose' | 'input' | 'silly'
        logFile?: string
        isDevelopment?: boolean
    } = {
        logLevel: 'info',
        logFile: undefined,
        isDevelopment: false,
    },
) => {
    return createWinstonLogger({
        level: logLevel,
        format: loggerFormat,
        transports: [
            new transports.Console(),
            ...(logFile
                ? [
                      new transports.File({
                          filename: logFile,
                      }),
                  ]
                : []),
        ],
    })
}
