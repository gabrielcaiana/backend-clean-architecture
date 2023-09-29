import { UseCase } from "@/core/shared/UseCase";
import UserRepository from "./UserRepository";

export default class UserDeleteById implements UseCase<number, void> {
  constructor(private readonly repository: UserRepository) { }

  async execute(id: number): Promise<void> {
    return await this.repository.deleteById(id) 
  }
}