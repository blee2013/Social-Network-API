const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts /: thoughtId / reactions
router.route('/:thoughtId/reactions')
    //POST to create a reaction stored in a single thought's reactions array field
    .post(addReaction)
    //DELETE to pull and remove a reaction by the reaction's reactionId value
    .delete(deleteReaction);
    
router
    .route('/')
    // GET to get all thoughts
    .get(getAllThoughts)
    //POST to create a new thought 
    .post(createThought)

=

// /api/thoughts/<thoughtId>
router.route('/:id')
    // GET to get a single thought by its _id
    .get(getThoughtById)
    // PUT to update a thought by its _id
    .put(updateThought)
    // DELETE to remove a thought by its _id
    .delete(deleteThought);



module.exports = router;