import mongoose from "mongoose";

const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export {Conversation}