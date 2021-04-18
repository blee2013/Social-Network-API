const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trimmed: true
    }, 
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'

    }]
});
// get total count of friens on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
    // this.friends.reduce((total, friend) => total + friend.replies.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;