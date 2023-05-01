import express from "express";
import { Request, Response } from "express";
import CommentModel from "../models/comments";
import mongoose from "mongoose";

const getAllComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj_id = new mongoose.Types.ObjectId(id);
    const response = await CommentModel.find({
      movie_id: obj_id,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
};

export { getAllComment };
