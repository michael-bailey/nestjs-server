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
var Post_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const User_model_1 = require("../Users/User.model");
let Post = Post_1 = class Post {
};
__decorate([
    query_graphql_1.IDField(() => String),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "body", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_model_1.User),
    __metadata("design:type", Promise)
], Post.prototype, "owner", void 0);
Post = Post_1 = __decorate([
    graphql_1.ObjectType(),
    query_graphql_1.QueryOptions({ pagingStrategy: query_graphql_1.PagingStrategies.CURSOR }),
    query_graphql_1.Relation('owner', () => Post_1, { disableRemove: true }),
    typeorm_1.Entity()
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.model.js.map