import { UseCase } from "@/core/shared/UseCase";
import UserRepository from "@/core/user/repository/UserRepository";

type Entry = {
  name: string
  email: string
  password: string
}

export default class UserRegister implements UseCase<Entry, void> {
  constructor(private readonly repository: UserRepository ) { }

  async execute(entry: Entry): Promise<void> {
    const { name, email, password } = entry;

    const searchUser = await this.repository.searchEmail(email);
    
    if (searchUser) {
      throw new Error('Email already registered');
    }

    await this.repository.create({
      name,
      email,
      password,
    })
  }
}