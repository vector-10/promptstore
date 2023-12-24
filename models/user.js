import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    unique: [true, "Email Already Exists"],
    required: [true, "Email is Required"],
  },
  userName: {
    type: "String",
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![0-9]+$)(?!.*?\s)[a-zA-Z0-9]+$/,
      "Username invalid, it should contain 8 - 20 alphanumeric letters and must be unique!",
    ],
  },
  image: {
    type: "String",
    required: [true, "image is required"],
  },
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
