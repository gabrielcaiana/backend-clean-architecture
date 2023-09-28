import { Elysia } from "elysia";
import UserRegister from "@/core/user/service/UserRegister";

type Body = {
  name: string
  email: string
  password: string
}

export default class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: UserRegister) {
    server.post('/user', async ({ body }) => {
      const { name, email, password } = body as Body;

      await this.useCase.execute({
        name,
        email,
        password,
      });

      return {
        body: {
          message: 'User created successfully',
        }
      }
    })
  }
}