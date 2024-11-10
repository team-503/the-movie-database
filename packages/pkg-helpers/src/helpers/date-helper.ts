import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { assert } from '../utils'

dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(utc)
dayjs.extend(timezone)

export class DateHelper {
    static formatDate(date: Date): string {
        return date.toISOString()
    }

    static dateToISODateString(timestamp: number | string): string {
        const numericTimestamp = Number(timestamp)
        assert(!Number.isNaN(numericTimestamp))
        return new Date(numericTimestamp).toISOString()
    }

    static getCurrentDateJSONString(): string {
        return dayjs().tz('Europe/Kyiv').toJSON()
    }

    static getLocaleDateString(date: string | Date): string {
        return dayjs(date).format('DD MMMM YYYY')
    }

    static processTimestamps<T extends { createdAt?: Date; updatedAt?: Date }>({
        createdAt,
        updatedAt,
        ...obj
    }: T): Omit<T, 'createdAt' | 'updatedAt'> & { createdAt?: string; updatedAt?: string } {
        return {
            ...obj,
            createdAt: createdAt?.toISOString(),
            updatedAt: updatedAt?.toISOString(),
        }
    }
}
