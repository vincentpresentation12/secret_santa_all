import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { SecretSantasService } from '../src/secret_santas/secret-santas.service';
import { User } from '../src/users/user.entity';
import { Draw } from '../src/draws/draw.entity';
import { CreateUserInput } from "../src/users/dto/create-user.dto";
import { UpdateUserDto } from "../src/users/dto/update-user.dto";
import { SecretSantaDto } from '../src/secret_santas/dto/secret-santa.dto';
import { UserDto } from "../src/users/dto/user.dto";
import { SecretSanta } from "../src/secret_santas/secret-santa.entity";

export class SecretSantaTest
{

    constructor(private secretSantaService: SecretSantasService) { }

    public testFindOne(username: string): void
    {
        describe('Find One', () =>
        {

            it('add', async () =>
            {
                let expected: any;

                let result = await this.secretSantaService.findOne(username);
                jest.spyOn(this.secretSantaService, 'findOne').mockImplementation(() => expected);

                expect(result).toBe(expected);
            });
        });
    }

    public testCreateSecretSanta(usersDto: UserDto[]): void
    {
        describe('Create User', () =>
        {

            it('add', async () =>
            {
                let result = await this.secretSantaService.createSecretSanta(usersDto);

                expect(this.secretSantaService.findOne(result.uuid)).toBeTruthy();
            });
        });
    }

    public testDraw(users: User[]): void
    {
        describe('Find All Users', () =>
        {

            it('add', async () =>
            {
                let santas: string[] = [];
                let giftees: string[] = [];

                let result = await this.secretSantaService.draw(users);

                result.forEach(draw =>
                {
                    expect(draw.santa).not.toEqual(draw.giftee);
                    santas.push(draw.santa);
                    giftees.push(draw.giftee);
                });

                expect(new Set(santas).size).toEqual(new Set(giftees).size);

            });
        });
    }

    public testUpdateSecretSanta(uuid: string, data: SecretSantaDto): void
    {
        describe('Updtate User', () =>
        {

            it('add', async () =>
            {
                let result = await this.secretSantaService.updateSecretSanta(uuid, data);

                let expected = await this.secretSantaService.findOne(uuid);

                expect(expected?.draws).toEqual(result?.draws);
            });
        });
    }

    public testdeleteSecretSanta(uuid: string): void
    {
        describe('Delete User', () =>
        {

            it('add', async () =>
            {
                await this.secretSantaService.deleteSecretSanta(uuid);

                expect(this.secretSantaService.findOne(uuid)).toBeNull();
            });
        });
    }
}