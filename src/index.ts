import { Elysia } from "elysia";
import UserRepositoryMemory from "@/external/memory/UserRepositoryMemory";
import UserRegister from "@/core/user/service/UserRegister";
import RegisterUserController from "@/adapters/RegisterUserController";


const app = new Elysia()

const userRepository = new UserRepositoryMemory()
const userRegister = new UserRegister(userRepository)
new RegisterUserController(app, userRegister)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);