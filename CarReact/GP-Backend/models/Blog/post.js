const mongoose = require("mongoose");

var schema = mongoose.Schema;
var post = new schema(
  {
    title:{ type: String, required: true ,lowercase: true },
    body: { type: String, required: true ,lowercase: true},
    model: String,
    brand: String,
    state: { type: Boolean, default: false },
    image: { type: String },
    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    updatedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", post);

