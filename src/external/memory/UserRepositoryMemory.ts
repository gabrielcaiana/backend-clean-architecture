import { User } from "@/core/user/model/User";
import UserRepository from "@/core/user/service/UserRepository";

export default class UserRepositoryMemory implements UserRepository {
  private readonly users: User[] = []

  async searchEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() }
    this.users.push(newUser)
    return newUser
  }

  async searchAll(): Promise<User[]> {
    return this.users
  }

  async searchById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }

  async deleteById(id: number): Promise<void> {
    this.users.splice(id, 1)
    return
  }

  async updateById(id: number, user: User): Promise<User | null> {
    const userToUpdated = this.users.find(u => u.id === id) || null;

    if (userToUpdated) {
      Object.assign(userToUpdated, user)
    }

    return userToUpdated
  }
}