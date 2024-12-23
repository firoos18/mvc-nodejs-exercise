import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class GetUserById {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return this.userRepository.getUserById(id);
  }
}
