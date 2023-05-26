const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

// Setting up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// Setting up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Addding and delete a friend for the user
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
