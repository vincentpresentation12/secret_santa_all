"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretSantasModule = void 0;
const common_1 = require("@nestjs/common");
const secret_santas_service_1 = require("./secret-santas.service");
const secret_santas_controller_1 = require("./secret-santas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const secret_santa_entity_1 = require("./secret-santa.entity");
let SecretSantasModule = class SecretSantasModule {
};
SecretSantasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([secret_santa_entity_1.SecretSanta])],
        controllers: [secret_santas_controller_1.SecretSantasController],
        providers: [secret_santas_service_1.SecretSantasService],
        exports: [secret_santas_service_1.SecretSantasService],
    })
], SecretSantasModule);
exports.SecretSantasModule = SecretSantasModule;
//# sourceMappingURL=secret-santas.module.js.map