const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThoughtById,
    updateThoughtbyTId,
    deleteThoughtbyTId
} = require('../../controllers/thought-controller');

// /api/thoughts /: thoughtId / reactions


router.route('/:id/thoughts/:reactions')
    .post(createThoughtByTId)
    .delete(removeThoughtByTId)

// GET to get all thoughts
router.route('/')
    // GET all users
    .get(getAllThoughts)
   



router.route('/:thoughtId')
// GET to get a single thought by its _id
    .get(getThoughtById)
// PUT to update a thought by its _id
    .put(updateThoughtbyId)
// DELETE to remove a thought by its _id
    .delete(deleteThoughtbyId)


