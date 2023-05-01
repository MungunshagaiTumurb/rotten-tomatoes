import express from "express";
import { getAllMovies, getMovie } from "../controllers/movies.controller";
import { getAllComment } from "../controllers/comments.controller";

const MoviesRouter = express.Router();

MoviesRouter.get("/movies", getAllMovies);
MoviesRouter.get("/movie/:id", getMovie);
export default MoviesRouter;
