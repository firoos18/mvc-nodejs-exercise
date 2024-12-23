import { CreatePost } from "../../application/usecases/Post/CreatePost";
import { GetAllPosts } from "../../application/usecases/Post/GetAllPosts";
import { GetUserPost } from "../../application/usecases/Post/GetUserPost";
import { GetUserPostById } from "../../application/usecases/Post/GetUserPostById";
import { MongoPostRepository } from "../database/MongoPostRepository";
import { Request, Response } from "express";

const postRepository = new MongoPostRepository();

export class PostController {
  static async create(req: Request, res: Response) {
    const { userId, title, caption } = req.body;
    const createPost = new CreatePost(postRepository);
    const post = await createPost.execute(userId, title, caption);
    res.status(201).json(post);
  }

  static async getUserPost(req: Request, res: Response) {
    const { userId } = req.params;
    const getUserPost = new GetUserPost(postRepository);
    const post = await getUserPost.execute(userId);
    res.status(200).json(post);
  }

  static async getUserPostById(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const postId = req.query.postId as string;
      if (typeof postId !== "string") {
        res.status(400).json({ message: "Invalid or missing postId" });
      }
      const getUserPostById = new GetUserPostById(postRepository);
      const post = await getUserPostById.execute(userId, postId);
      if (!post) {
        res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getAllPosts(req: Request, res: Response) {
    const getAllPosts = new GetAllPosts(postRepository);
    const post = await getAllPosts.execute();
    res.status(200).json(post);
  }
}
