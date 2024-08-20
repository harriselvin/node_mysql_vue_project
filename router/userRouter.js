import express from 'express';
import { fetchUsers, fetchUser, addUser, deleteUser, updateUser } from '../controller/userFunctions.js';

const userRouter = express.Router()

// Users Info
userRouter.get('/', fetchUsers)
        .get('/:id', fetchUser)
        .post('/register', addUser)
        .patch('/update/:id', updateUser)
        .delete('/delete/:id', deleteUser)

export default userRouter