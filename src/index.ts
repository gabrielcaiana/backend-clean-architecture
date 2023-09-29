import app from '@/external/api/config'

import UserRepositoryMemory from "@/external/memory/UserRepositoryMemory";

import UserRegister from "@/core/user/service/UserRegister";
import RegisterUserController from "@/adapters/controllers/user/RegisterUserController";
import UserRepositoryPrismaPg from "@/external/prisma/UserRepositoryPrismaPg";
import SearchUsersController from "@/adapters/controllers/user//SearchUsersController";
import SearchUserByIdController from "@/adapters/controllers/user//SearchUserByIdController";
import UserSearch from "@/core/user/service/UserSearch";
import UserSearchById from "@/core/user/service/UserSearchById";
import UserDeleteById from './core/user/service/UserDeleteById';
import DeleteUserByIdController from './adapters/controllers/user/DeleteUserByIdController';



const userRepository = new UserRepositoryPrismaPg()

// use case -> controller -> user register
const userRegister = new UserRegister(userRepository)
new RegisterUserController(app, userRegister)

// use case -> controller -> user search
const userSearch = new UserSearch(userRepository)
new SearchUsersController(app, userSearch)

// use case -> controller -> user search by id
const userSearchById = new UserSearchById(userRepository)
new SearchUserByIdController(app, userSearchById)

// use case -> controller -> user delete by id
const userDeleteById = new UserDeleteById(userRepository)
new DeleteUserByIdController(app, userDeleteById)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);