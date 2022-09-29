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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAllUsers(currentUser) {
        const users = await user_entity_1.User.find();
        const filtered = users.filter((user) => user.uuid !== currentUser.uuid);
        return filtered;
    }
    async findOne(username) {
        return await user_entity_1.User.findOne({ where: { username } });
    }
    async createUser(data) {
        const hashedPw = await bcrypt.hash(data.password, 10);
        const newUser = new user_entity_1.User();
        newUser.uuid = (0, uuid_1.v4)();
        newUser.username = data.username;
        newUser.password = hashedPw;
        newUser.firstname = data.firstname;
        newUser.lastname = data.lastname;
        newUser.email = data.firstname + "." + data.lastname + "@secretsanta.com";
        await newUser.save();
        return newUser;
    }
    async updateUser(uuid, data) {
        const user = await this.findUserByUuid(uuid);
        if (user) {
            user.username = data.username;
            await user.save();
            return user;
        }
    }
    async deleteUser(uuid) {
        const user = await this.findUserByUuid(uuid);
        if (user) {
            return await this.userRepository.remove(user);
        }
    }
    async findUserByUuid(uuid) {
        return await user_entity_1.User.findOne({ where: { uuid } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map