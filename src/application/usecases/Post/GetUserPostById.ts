import { IPostRepository } from "../../../domain/repositories/IPostRepository";

export class GetUserPostById {
  constructor(private postRepository: IPostRepository) {}

  async execute(userId: string, postId: string) {
    return this.postRepository.getUserPostById(userId, postId);
  }
}
