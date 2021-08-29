import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
