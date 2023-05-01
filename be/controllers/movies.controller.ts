import express from "express";
import { Request, Response } from "express";
import MovieModel from "../models/movies";

const MovieRouter = express.Router();

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const response = await MovieModel.find({}).limit(30).skip(10);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await MovieModel.findOne({ _id: id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getAllMovies, getMovie };
