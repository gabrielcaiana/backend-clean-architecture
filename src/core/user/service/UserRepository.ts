import { User } from "@/core/user/model/User";

export default interface UserRepository {
  searchEmail(email: string): Promise<User | null>;
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
}