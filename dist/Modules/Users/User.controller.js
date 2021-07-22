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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const User_service_1 = require("./User.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async allUsers() {
        return JSON.stringify(await this.userService.findAll());
    }
    async fromID(id) {
        return JSON.stringify(await this.userService.findOneById(id));
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "allUsers", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Get('from_id/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fromID", null);
UserController = __decorate([
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [User_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=User.controller.js.map