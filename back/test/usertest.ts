import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersService } from '../src/users/users.service';
import { User } from '../src/users/user.entity';
import { CreateUserInput } from "../src/users/dto/create-user.dto";
import { UpdateUserDto } from "../src/users/dto/update-user.dto";

export class UsersTest
{

    constructor(private userService: UsersService) { }

    public testFindAllUsers(): void
    {
        describe('Find All Users', () =>
        {

            it('add', async () =>
            {
                let expected: any;

                let result = await this.userService.findAll();
                jest.spyOn(this.userService, 'findAll').mockImplementation(() => expected);

                expect(result).toBe(expected);
            });
        });
    }

    public testFindOne(username: string): void
    {
        describe('Find One', () =>
        {

            it('add', async () =>
            {
                let expected: any;

                let result = await this.userService.findOne(username);
                jest.spyOn(this.userService, 'findOne').mockImplementation(() => expected);

                expect(result).toBe(expected);
            });
        });
    }

    public testCreateUser(): void
    {
        describe('Create User', () =>
        {

            it('add', async () =>
            {
                let result = await this.userService.createUser(new CreateUserInput());

                expect(this.userService.findAll()).toContain(result);
            });
        });
    }

    public testUpdateUser(uuid: string, data: UpdateUserDto): void
    {
        describe('Updtate User', () =>
        {

            it('add', async () =>
            {
                let result = await this.userService.updateUser(uuid, data);

                expect(this.userService.findAll()).toContain(result);
            });
        });
    }

    public testdeleteUser(uuid: string): void
    {
        describe('Delete User', () =>
        {

            it('add', async () =>
            {
                await this.userService.deleteUser(uuid);

                expect(this.userService.findUserByUuid(uuid)).toBeNull();
            });
        });
    }

    public testFindUserByUuid(uuid: string): void
    {
        describe('Find User By Uuid', () =>
        {

            it('add', async () =>
            {
                let result = await this.userService.findUserByUuid(uuid);

                expect(this.userService.findAll()).toContain(result);
            });
        });
    }

}