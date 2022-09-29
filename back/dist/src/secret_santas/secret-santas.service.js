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
const draw_entity_1 = require("../draw/draw.entity");
const users_service_1 = require("../users/users.service");
let SecretSantasService = class SecretSantasService {
    constructor(secretSantaRepository, usersService) {
        this.secretSantaRepository = secretSantaRepository;
        this.usersService = usersService;
    }
    async findOne(uuid) {
        return await secret_santa_entity_1.SecretSanta.findOne({ where: { uuid } });
    }
    async createSecretSanta(usersDto) {
        const newSecretSanta = new secret_santa_entity_1.SecretSanta();
        let users = [];
        usersDto.forEach(async (userDto) => {
            let user = await this.usersService.findOne(userDto.username);
            if (user) {
                users.push(user);
            }
        });
        newSecretSanta.uuid = (0, uuid_1.v4)();
        newSecretSanta.draws = this.draw(users);
        await newSecretSanta.save();
        return newSecretSanta;
    }
    draw(users) {
        let draws = [];
        let giftee = users;
        users.forEach(user => {
            let randomElement = Math.floor(Math.random() * giftee.length);
            while (giftee[randomElement].uuid == user.uuid) {
                randomElement = Math.floor(Math.random() * giftee.length);
            }
            let draw = new draw_entity_1.Draw();
            draw.santa = user.uuid;
            draw.giftee = giftee[randomElement].uuid;
            draws.push(draw);
            giftee.splice(randomElement, 1);
        });
        return draws;
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], SecretSantasService);
exports.SecretSantasService = SecretSantasService;
//# sourceMappingURL=secret-santas.service.js.map