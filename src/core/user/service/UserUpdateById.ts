import { UseCase } from "@/core/shared/UseCase";
import { User } from "@prisma/client";
import UserRepository from "./UserRepository";

type Entry = {
  id: number
  user: User
}

export default class UserUpdateById implements UseCase<Entry, User | null> {
  constructor(private readonly repository: UserRepository) {}

  async execute(entry : Entry): Promise<User | null> {
    return this.repository.updateById(entry.id, entry.user)
  } 
}