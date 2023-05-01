import mongoose, { Schema } from "mongoose";

interface Comment {
  name: String;
  text: String;
  date: Date;
  email: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "User";
  };
  movie_id: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Movie";
  };
}

const CommentSchema = new Schema<Comment>({});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
