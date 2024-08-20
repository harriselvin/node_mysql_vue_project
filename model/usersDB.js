import { pool } from "../config/config.js";

const getUsersDB = async () => {
    let [data] = await pool.query(`
        SELECT * FROM users
        `)
    return data
}

const getUserDB = async (email) => {
    let [[data]] = await pool.query(`
        SELECT * FROM users
        WHERE emailAdd = ?
        `, [email])
    return data
}

const addUserDB = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile) => {
    await pool.query(`
        INSERT INTO users (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile])
}

const deleteUserDB = async (id) => {
    await pool.query(`
        DELETE FROM users
        WHERE userID = ?
        `, [id])
}

const updateUserDB = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id) => {
    await pool.query(`
        UPDATE users
        set firstName = ?,
        lastName = ?,
        userAge = ?,
        gender = ?,
        userRole = ?,
        emailAdd = ?,
        userPass = ?,
        userProfile = ?
        WHERE userID = ?
        `, [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id])
}

export { getUsersDB, getUserDB, addUserDB, deleteUserDB, updateUserDB }