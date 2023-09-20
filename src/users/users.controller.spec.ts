import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    userController = module.get<UsersController>(UsersController);
  });

  it('should return users list', () => {
    expect(userController.findAll()).toBe('This action returns all users');
  });

  it.todo('should return a created user');
});
