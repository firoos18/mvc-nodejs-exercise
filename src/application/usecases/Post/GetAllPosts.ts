import { IPostRepository } from "../../../domain/repositories/IPostRepository";

export class GetAllPosts {
  constructor(private postRepository: IPostRepository) {}

  async execute() {
    return this.postRepository.getAllPosts();
  }
}
