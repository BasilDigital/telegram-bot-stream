module.exports = function (mongoose) {
    const UserSchema = mongoose.Schema(
        {
            name: String,
            chatId: { type: Number, unique: true, required: true }
        }
    )

    const User = mongoose.model('User', UserSchema)
    return User

};
