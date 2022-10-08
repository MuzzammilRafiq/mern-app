import { model, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      //   required: true,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
    ups: {
      type: Number,
      default: 0,
    },
    downs: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default model("Post", PostSchema);
