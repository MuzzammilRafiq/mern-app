import { model, Schema } from "mongoose";

const ReactionSchema = new Schema({
  postId: {
    type: String,
    required: true,
  },

  reacted: {
    type: [String],
    default: [],
  },
});

export default model("Reaction", ReactionSchema);
