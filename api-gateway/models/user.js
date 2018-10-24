var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
var User = mongoose.model("User", userSchema);
module.exports = User;
module.exports.add = (user, callback) => {
    user.save(callback);
}
module.exports.getById = (id, callback) => {
    let query = {_id: id};
    User.findById(query, callback);
}