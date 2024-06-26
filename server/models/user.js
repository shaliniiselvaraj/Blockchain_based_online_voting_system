const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Aadhar Number is required"]
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel