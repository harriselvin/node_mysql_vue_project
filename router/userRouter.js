import express from 'express';
import { fetchUsers, fetchUser, addUser, deleteUser, updateUser, loginUser } from '../controller/userFunctions.js';
import { checkUser } from '../middleware/authenticate.js';

const userRouter = express.Router()

// Users Info
userRouter.get('/', fetchUsers)
        .get('/:id', fetchUser)
        .post('/register', addUser)
        .post('/login/', checkUser, loginUser)
        .patch('/update/:id', updateUser)
        .delete('/delete/:id', deleteUser)

export default userRouter