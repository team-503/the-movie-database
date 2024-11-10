import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { JWT_STRATEGY_NAME } from '../auth.constants'

@Injectable()
export class GqlJwtAuthGuard extends AuthGuard(JWT_STRATEGY_NAME) {
    override getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }

    override handleRequest<TUser = unknown>(
        err: unknown,
        user: unknown,
        info: unknown,
        context: ExecutionContext,
        status?: unknown,
    ): TUser {
        if (!user) {
            throw new UnauthorizedException('Missing auth header or invalid token')
        }
        return user as TUser
    }
}
