import { User } from "@/core/user/model/User";
import UserUpdateById from "@/core/user/service/UserUpdateById";
import { Elysia } from "elysia";

export default class UpdateUserByIdController {
  constructor(readonly server: Elysia, readonly useCase: UserUpdateById) {
    server.put('/user/:id', async ({ params, body }) => {
      const id = Number(params.id)
      const user = body as User

      const payload = {
        id,
        user
      }

      return await this.useCase.execute(payload)
    })
  }
}