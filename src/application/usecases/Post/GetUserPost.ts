import { IPostRepository } from "../../../domain/repositories/IPostRepository";

export class GetUserPost {
  constructor(private postRepository: IPostRepository) {}

  async execute(userId: string) {
    return this.postRepository.getUserPost(userId);
  }
}
