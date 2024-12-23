import { User } from "../entities/User";

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | null | undefined>;
}
