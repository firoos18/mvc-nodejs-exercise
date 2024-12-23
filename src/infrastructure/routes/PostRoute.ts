import express from "express";
import { PostController } from "../controllers/PostController";

const router = express.Router();

router.post("/", PostController.create);
router.get("/", PostController.getAllPosts);
router.get("/:userId", PostController.getUserPost);
router.get("/:userId/post", PostController.getUserPostById);

export default router;
