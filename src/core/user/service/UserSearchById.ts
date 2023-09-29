import { UseCase } from "@/core/shared/UseCase";
import { User } from "@prisma/client";
import UserRepository from "@/core/user/repository/UserRepository";

export default class UserSearchById implements UseCase<number, User | null> {
  constructor(private readonly repository: UserRepository) { }

  async execute(id: number): Promise<User | null> {
    return await this.repository.searchById(id);
  }
}