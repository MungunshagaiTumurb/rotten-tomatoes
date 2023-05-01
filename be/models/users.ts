import mongoose, { Schema } from "mongoose";

interface User {
  name: String;
  email: String;
  password: String;
}

const UserSchema = new Schema<User>({});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
