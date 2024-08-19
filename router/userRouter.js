import express from 'express';
import { fetchUsers, fetchUser, addUser, deleteUser, updateUser } from '../controller/userFunctions.js';

const userRouter = express.Router()

// Users Info
userRouter.get('/', fetchUsers)
        .get('/:id', fetchUser)
        .post('/insert', addUser)
        .delete('/delete/:id', deleteUser)
        .patch('/update/:id', updateUser)

export default userRouter