import { CreateUser } from "../../application/usecases/User/CreateUser";
import { GetUserById } from "../../application/usecases/User/GetUserById";
import { GetUsers } from "../../application/usecases/User/GetUsers";
import { MongoUserRepository } from "../database/MongoUserRepository";
import { Request, Response } from "express";

const userRepository = new MongoUserRepository();

export class UserController {
  static async create(req: Request, res: Response) {
    const { name, email } = req.body;
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(name, email);
    res.status(201).json(user);
  }

  static async getAll(req: Request, res: Response) {
    const getUsers = new GetUsers(userRepository);
    const users = await getUsers.execute();

    res.status(200).json(users);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const getUserById = new GetUserById(userRepository);
    const user = await getUserById.execute(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not Found." });
    }
  }
}
