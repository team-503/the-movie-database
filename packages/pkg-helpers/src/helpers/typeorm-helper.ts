import config from 'config'
import { getMetadataArgsStorage } from 'typeorm'
import { EnvHelper } from './env-helper'

type IsValidObject<T> = T extends object ? (T extends Function ? false : T extends any[] ? false : true) : false
type ColumnMap<T, Ttable> =
    IsValidObject<T> extends true
        ? {
              _: Ttable
          } & {
              [K in keyof T]: K
          }
        : never

export class TypeORMHelper {
    private static readonly APP_NAME = config.get<string>('appName')

    static getPrefixedTableName(table: string): string {
        if (EnvHelper.isDevelopment()) {
            return table
        }
        return `${this.APP_NAME}__${table}`
    }

    static getTableProperties<T extends object, TTable extends string>(entity: new () => T, table: TTable): ColumnMap<T, TTable> {
        const columns = getMetadataArgsStorage().columns.filter(col => col.target === entity)
        const columnMap = {
            _: table,
        } as ColumnMap<T, TTable>
        columns.forEach(col => ((columnMap as any)[col.propertyName] = col.propertyName))
        return columnMap
    }
}
