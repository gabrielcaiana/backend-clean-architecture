import { User } from "@/core/user/model/User";
import UserRepository from "@/core/user/service/UserRepository";
import { PrismaClient } from "@prisma/client";

export default class UserRepositoryPrismaPg implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }
  
  async searchEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
    return this.prisma.user.create({ data: user })
  }

  searchAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  searchById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id
      }
    });
    return;
  }

  updateById(id: number, user: User): Promise<User | null> {
    return this.prisma.user.update({
      where: {
        id
      },
      data: user
    })
  }
}