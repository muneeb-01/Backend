const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/intermediateMongodb");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);

// for intermidiate mongodb
// const userSchema = mongoose.Schema({
//   username: String,
//   nickname: String,
//   description: String,
//   categories: {
//     type: Array,
//     default: [],
//   },
//   datecreated: {
//     type: Date,
//     default: Date.now(),
//   },
// });