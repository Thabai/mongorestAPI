const { Router } = require('express');
const { createUser, findUser, updateUserEmail, deleteUser} = require('./users.controllers');
const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users/:username', findUser);
userRouter.put('/users', updateUserEmail);
userRouter.delete("/users/:username/:pass", deleteUser);

module.exports = userRouter;