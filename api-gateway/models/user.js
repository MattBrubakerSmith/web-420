var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = User = mongoose.model("User", userSchema);
module.exports.add = (user, callback) => {
    user.save(callback);
}
module.exports.getById = (id, callback) => {
    let query = {_id: id};
    User.findById(query, callback);
}
module.exports.getOne = (e, callback) => {
    let query = {email: e};
    User.findOne(query, callback);
}