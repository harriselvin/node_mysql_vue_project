import { getUsersDB, getUserDB, addUserDB, deleteUserDB, updateUserDB } from "../model/usersDB.js";

const fetchUsers = async (req, res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req, res) => {
    res.json(await getUserDB(req.params.id))
}

const addUser = async (req, res) => {
    let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;
    
    await addUserDB(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile)
    res.send('User was successfully added')
}

const deleteUser = async (req, res) => {
    await deleteUserDB(req.params.id)
    res.send('User was successfully deleted')
}

const updateUser = async (req, res) => {
    let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body
    let user = await getUserDB(req.params.id)

    firstName ? firstName = firstName : firstName = user.firstName
    lastName ? lastName = lastName : lastName = user.lastName
    userAge ? userAge = userAge : userAge = user.userAge
    gender ? gender = gender : gender = user.gender
    userRole ? userRole = userRole : userRole = user.userRole
    emailAdd ? emailAdd = emailAdd : emailAdd = user.emailAdd
    userPass ? userPass = userPass : userPass = user.userPass
    userProfile ? userProfile = userProfile : userProfile = user.userProfile

    await updateUserDB(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, req.params.id)
    res.send('User info was successfully updated')
}

export { fetchUsers, fetchUser, addUser, deleteUser, updateUser }