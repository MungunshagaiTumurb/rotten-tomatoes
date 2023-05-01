import express from "express";

import { getAllComment } from "../controllers/comments.controller";

const CommentsRouter = express.Router();

CommentsRouter.get("/:id", getAllComment);
export default CommentsRouter;
