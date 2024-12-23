import mongoose from "mongoose";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
});

const UserModel = mongoose.model("User", userSchema);

export class MongoUserRepository implements IUserRepository {
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((user) => new User(user.id, user.name!, user.email!));
  }

  async createUser(user: User): Promise<User> {
    const createdUser = new UserModel(user);
    await createdUser.save();
    return user;
  }

  async getUserById(id: string): Promise<User | null | undefined> {
    const user = await UserModel.findOne({ id });
    if (!user || user === undefined) return null;
    if (user && user !== undefined)
      return new User(user.id!, user.name!, user.email!);
  }
}
