import { Schema, Types, model } from "mongoose";
import User from "../users/user.model";


const HaveSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    zip: {
      type: String,
      require: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model('Have', HaveSchema)
