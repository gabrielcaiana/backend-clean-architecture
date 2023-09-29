import { User } from "@/core/user/model/User";

export default interface UserRepository {
  searchAll(): Promise<User[]>;
  searchById(id: number): Promise<User | null>;
  searchEmail(email: string): Promise<User | null>;
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
}