const express = require('express');
const { validateID, validateUserUpdate, validateAvatar } = require('../middlewares/validator');
const {
  getAllUsers,
  getUser,
  // createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:_id', validateID, getUser);
// userRouter.post('/', createUser);
userRouter.patch('/me', validateUserUpdate, updateUser);
userRouter.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = userRouter;
