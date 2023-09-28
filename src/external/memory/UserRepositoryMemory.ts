import { User } from "@/core/user/model/User";
import UserRepository from "@/core/user/service/UserRepository";

export default class UserRepositoryMemory implements UserRepository {
  private readonly users: User[] = []

  async searchEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random().toString() }
    this.users.push(newUser)
    return newUser
  }
}