const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../../controllers/user-controller');

//api/users/:userId/friends/:friendId

router.route('/:id/friends/:friendId')
    .post(addNewFriendByFId)
    .delete(removeFriendByFId)

// /api/users
router.route('/')
// GET all users
    .get(getAllUsers)
    // POST a new user:
    .post(createUser)
    
 

router.route('/:id')
    // GET a single user by its _id and populated thought and friend data
    .get(getUserById)
    // PUT to update a user by its _id
    .put(updateUserbyId)
        
// DELETE to remove user by its _id
    .delete(deleteUserbyId)