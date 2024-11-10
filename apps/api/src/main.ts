import { BadRequestException, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { logger } from '@repo/pkg-logger'
import { ValidationError } from 'class-validator'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { AppModule } from './app.module'
import { CustomValidationError } from './common/errors/custom-validation-error'
import { ErrorInterceptor } from './common/interceptors/error.interceptor'

const bootstrap = async () => {
    const PORT = process.env.PORT ?? 4000

    process.on('uncaughtException', (error, origin) => {
        console.error('uncaughtException: ', error, 'Origin:', origin)
    })
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'Reason:', reason)
    })

    const app = await NestFactory.create(AppModule)
    app.use(
        helmet({
            crossOriginEmbedderPolicy: false,
            contentSecurityPolicy: {
                directives: {
                    imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
                    scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
                    manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
                    frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
                },
            },
        }),
    )
    app.use(cookieParser())
    app.enableCors({ origin: '*' })
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            exceptionFactory: (validationErrors: ValidationError[] = []) => {
                logger.error(new CustomValidationError(validationErrors))
                return new BadRequestException(validationErrors)
            },
        }),
    )
    app.useGlobalInterceptors(new ErrorInterceptor())
    await app.listen(PORT)
}
bootstrap()
