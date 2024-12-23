import { Post } from "../../../domain/entities/Post";
import { IPostRepository } from "../../../domain/repositories/IPostRepository";

export class CreatePost {
  constructor(private postRepository: IPostRepository) {}

  async execute(userId: string, title: string, caption: string) {
    const post = new Post(Date.now().toString(), userId, title, caption);
    return this.postRepository.createPost(post);
  }
}
