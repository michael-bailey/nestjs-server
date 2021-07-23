"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const typeorm_1 = require("typeorm");
const Post_model_1 = require("../Post/Post.model");
let User = class User {
};
__decorate([
    query_graphql_1.IDField(() => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "passWord", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    graphql_1.Field(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], User.prototype, "created", void 0);
__decorate([
    typeorm_1.OneToMany(() => Post_model_1.Post, post => post.owner),
    __metadata("design:type", Promise)
], User.prototype, "posts", void 0);
User = __decorate([
    graphql_1.ObjectType(),
    query_graphql_1.QueryOptions({ pagingStrategy: query_graphql_1.PagingStrategies.CURSOR }),
    query_graphql_1.CursorConnection('posts', () => Post_model_1.Post, { disableRemove: true }),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.model.js.map