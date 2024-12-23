import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class GetUsers {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return this.userRepository.getUsers();
  }
}
