import { Elysia } from "elysia";
import UserSearch from "@/core/user/service/UserSearch";
import UserSearchById from "@/core/user/service/UserSearchById";

type Body = {
  name: string
  email: string
  password: string
}

export default class SearchUserByIdController {
  constructor(readonly server: Elysia, readonly useCase: UserSearchById) {
    server.get('/user/:id', async ({ params }) => {
      const id = Number(params.id)
      return await this.useCase.execute(id)
    })
  }
}