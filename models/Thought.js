const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
    // {
    //     toJSON: {
    //         getters: true
    //     }
    // }
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
        maxlength: 280

    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)

    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
}
);


// get total count of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
    return    this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;