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
exports.SecretSantasService = void 0;
const common_1 = require("@nestjs/common");
const secret_santa_entity_1 = require("./secret-santa.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let SecretSantasService = class SecretSantasService {
    constructor(secretSantaRepository) {
        this.secretSantaRepository = secretSantaRepository;
    }
    async findOne(uuid) {
        return await secret_santa_entity_1.SecretSanta.findOne({ where: { uuid } });
    }
    async createSecretSanta(data) {
        const newSecretSanta = new secret_santa_entity_1.SecretSanta();
        newSecretSanta.uuid = (0, uuid_1.v4)();
        await newSecretSanta.save();
        return newSecretSanta;
    }
    async updateSecretSanta(uuid, data) {
        const secretSanta = await this.findOne(uuid);
        if (secretSanta) {
            secretSanta.uuid = data.uuid;
            await secretSanta.save();
            return secretSanta;
        }
    }
    async deleteSecretSanta(uuid) {
        const secretSanta = await this.findOne(uuid);
        if (secretSanta) {
            return await this.secretSantaRepository.remove(secretSanta);
        }
    }
};
SecretSantasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(secret_santa_entity_1.SecretSanta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SecretSantasService);
exports.SecretSantasService = SecretSantasService;
//# sourceMappingURL=secret-santas.service.js.map