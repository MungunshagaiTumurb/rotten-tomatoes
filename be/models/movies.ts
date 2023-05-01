import mongoose, { Schema } from "mongoose";

interface Awards {
  wins: String;
  nominations: Number;
  text: String;
}
interface Imdb {
  rating: Number;
  votes: Number;
  id: Number;
}
interface TomaoesViewer {
  rating: Number;
  numReviews: Number;
  meter: Number;
}
interface Tomatoes {
  viewer: TomaoesViewer;
  lastUpdated: Date;
}

interface IMovie {
  movieId: Number;
  genres: [String];
  runtime: Number;
  cast: [String];
  num_mflix_comments: Number;
  poster: String;
  title: String;
  fullplot: String;
  languages: [String];
  writers: [String];
  awards: Awards;
  lastupdated: String;
  year: Number;
  imdb: Imdb;
  countries: [String];
  tomatoes: Tomatoes;
}

const MovieSchema = new Schema<IMovie>({});

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);

export default MovieModel;
