const router = require('express').Router();
const Thought = require("../../controllers/thought-contoller.js");

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-contoller');


    
router
    .route('/')
    // GET to get all thoughts
    .get(Thought.getAllThoughts)
    //POST to create a new thought 
    .post(Thought.addThought)


// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    // GET to get a single thought by its _id
    .get(getThoughtById)
    // PUT to update a thought by its _id
    .put(updateThought)
    // DELETE to remove a thought by its _id
    .delete(deleteThought);

// /api/thoughts /: thoughtId / reactions
router.route('/:thoughtId/reactions')
    //POST to create a reaction stored in a single thought's reactions array field
    .post(addReaction)
    //DELETE to pull and remove a reaction by the reaction's reactionId value
    .delete(deleteReaction);

module.exports = router;