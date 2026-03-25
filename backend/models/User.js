import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      default: null,
    },
    phone: { type: String, default: null },
    name: String,
    email: String,
    avatar: String,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
