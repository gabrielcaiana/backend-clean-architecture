import { UseCase } from "@/core/shared/UseCase";
import { User } from "../model/User";
import UserRepository from "./UserRepository";

export default class UserSearch implements UseCase<void, User[]> {
  constructor(readonly repository: UserRepository) { }

  async execute(): Promise<User[]> {
    return await this.repository.searchAll();
  }
}