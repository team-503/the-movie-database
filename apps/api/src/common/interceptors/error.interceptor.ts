import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { logger } from '@repo/pkg-logger'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                logger.error(`Error occurred: ${error.message}`, error.stack)
                return throwError(() => error)
            })
        )
    }
}
