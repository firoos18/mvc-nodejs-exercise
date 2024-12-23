import mongoose from "mongoose";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { Post } from "../../domain/entities/Post";

const postSchema = new mongoose.Schema({
  id: String,
  userId: String,
  title: String,
  caption: String,
});

const PostModel = mongoose.model("Post", postSchema);

export class MongoPostRepository implements IPostRepository {
  async createPost(post: Post): Promise<Post> {
    const createdPost = new PostModel(post);
    await createdPost.save();
    return post;
  }

  async getAllPosts(): Promise<Post[]> {
    const posts = await PostModel.find();
    return posts.map(
      (post) => new Post(post.id, post.userId!, post.title!, post.caption!)
    );
  }

  async getUserPost(userId: string): Promise<Post[]> {
    const userPost = await PostModel.find({ userId: userId });
    return userPost.map(
      (post) => new Post(post.id, post.userId!, post.title!, post.caption!)
    );
  }

  async getUserPostById(
    userId: string,
    postId: string
  ): Promise<Post | null | undefined> {
    const userPostById = await PostModel.findOne({
      userId: userId,
      id: postId,
    });
    if (!userPostById) return null;
    if (userPostById && userPostById !== undefined) {
      return new Post(
        userPostById.id,
        userPostById.userId!,
        userPostById.title!,
        userPostById.caption!
      );
    }
  }
}
