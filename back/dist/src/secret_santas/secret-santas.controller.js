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
exports.SecretSantasController = void 0;
const common_1 = require("@nestjs/common");
const secret_santas_service_1 = require("./secret-santas.service");
const secret_santa_dto_1 = require("./dto/secret-santa.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let SecretSantasController = class SecretSantasController {
    constructor(secretSantasService) {
        this.secretSantasService = secretSantasService;
    }
    createUser(data) {
        return this.secretSantasService.createSecretSanta(data);
    }
    findUserByUuid(uuid) {
        return this.secretSantasService.findOne(uuid);
    }
    async updateUser(uuid, data) {
        return this.secretSantasService.updateSecretSanta(uuid, data);
    }
    async deleteUser(uuid) {
        return this.secretSantasService.deleteSecretSanta(uuid);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [secret_santa_dto_1.SecretSantaDto]),
    __metadata("design:returntype", void 0)
], SecretSantasController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/:uuid'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecretSantasController.prototype, "findUserByUuid", null);
__decorate([
    (0, common_1.Put)('/:uuid'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, secret_santa_dto_1.SecretSantaDto]),
    __metadata("design:returntype", Promise)
], SecretSantasController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:uuid'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecretSantasController.prototype, "deleteUser", null);
SecretSantasController = __decorate([
    (0, common_1.Controller)('secret-santas'),
    __metadata("design:paramtypes", [secret_santas_service_1.SecretSantasService])
], SecretSantasController);
exports.SecretSantasController = SecretSantasController;
//# sourceMappingURL=secret-santas.controller.js.map