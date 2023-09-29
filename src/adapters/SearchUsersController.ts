import { Elysia } from "elysia";
import UserSearch from "@/core/user/service/UserSearch";

type Body = {
  name: string
  email: string
  password: string
}

export default class SearchUsersController {
  constructor(readonly server: Elysia, readonly useCase: UserSearch) {
    server.get('/users', async () => {
      return await this.useCase.execute()
    })
  }
}