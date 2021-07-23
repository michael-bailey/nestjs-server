import { ExecutionContext } from '@nestjs/common';
declare const GraphqlJwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GraphqlJwtGuard extends GraphqlJwtGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};
