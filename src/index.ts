import app from '@/external/api/config'

import UserRepositoryMemory from "@/external/memory/UserRepositoryMemory";
import UserRegister from "@/core/user/service/UserRegister";
import RegisterUserController from "@/adapters/RegisterUserController";
import UserRepositoryPrismaPg from "@/external/prisma/UserRepositoryPrismaPg";
import UserSearch from "./core/user/service/UserSearch";
import SearchUsersController from "./adapters/SearchUsersController";
import UserSearchById from "./core/user/service/UserSearchById";
import SearchUserByIdController from "./adapters/SearchUserByIdController";



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



app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);