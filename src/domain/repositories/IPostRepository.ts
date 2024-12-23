import { Post } from "../entities/Post";

export interface IPostRepository {
  createPost(post: Post): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
  getUserPost(userId: string): Promise<Post[]>;
  getUserPostById(
    userId: string,
    postId: string
  ): Promise<Post | null | undefined>;
}
