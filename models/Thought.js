const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// making the columns and giving the type to the table
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

// `thoughtText`,`createdAt`,`username`,`reactions`
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

//   Create a virtual called `reactionCount`

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
