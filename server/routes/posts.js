import express from "express";
import auth from "../middleware/auth.js";
//to create post, like post u need to have your own id, you need to be logged in
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost); //managed on frontend
router.delete("/:id", auth, deletePost); //managed on frontend
router.patch("/:id/likePost", auth, likePost); // managed on the backend

export default router;
