const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    },
    isAdmin: {
      type: Boolean,
      default: false
    },

    ideas: [{ type: Schema.Types.ObjectId, ref: "idea" }]
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
