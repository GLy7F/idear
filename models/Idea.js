const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = new Schema(
  {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    user : { type: Schema.Types.ObjectId, ref: "user" }
  },
  { timestamps: true }
);
const Idea = mongoose.model("idea", ideaSchema);
module.exports = Idea;
