import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    unique: [true, "Email Already Exists"],
    required: [true, "Email is Required"],
  },
  userName: {
    type: "String",
    required: [true, "Username is required"]
  },
  image: {
    type: "String",
    required: [true, "image is required"],
  },
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
