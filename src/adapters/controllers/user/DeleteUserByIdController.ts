import UserDeleteById from "@/core/user/service/UserDeleteById";
import { Elysia } from "elysia";

type Body = {
  name: string
  email: string
  password: string
}

export default class DeleteUserByIdController {
  constructor(readonly server: Elysia, readonly useCase: UserDeleteById) {
    server.delete('/user/:id', async ({ params }) => {
      const id = Number(params.id)
      return await this.useCase.execute(id)
    })
  }
}