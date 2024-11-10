import { format } from 'winston'

const { combine, timestamp, printf, colorize, json } = format

export const loggerFormat: ReturnType<typeof combine> = combine(
    json(),
    colorize({ all: true }),
    timestamp({ format: 'DD/MM/YYYY hh:mm:ss' }),
    printf(info => `[${info.timestamp}] ${info.level}: ${info.message?.trim()}`),
)
