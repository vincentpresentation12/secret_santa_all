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
exports.SecretSanta = void 0;
const typeorm_1 = require("typeorm");
const draw_entity_1 = require("../draw/draw.entity");
let SecretSanta = class SecretSanta extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SecretSanta.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => draw_entity_1.Draw, (draw) => draw.secretSanta),
    __metadata("design:type", Array)
], SecretSanta.prototype, "draws", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], SecretSanta.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SecretSanta.prototype, "updatedAt", void 0);
SecretSanta = __decorate([
    (0, typeorm_1.Entity)()
], SecretSanta);
exports.SecretSanta = SecretSanta;
//# sourceMappingURL=secret-santa.entity.js.map