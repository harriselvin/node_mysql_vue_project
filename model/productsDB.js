import { pool } from "../config/config.js";

const getProductsDB = async () => {
    let [data] = await pool.query(`
        SELECT * FROM products
        `)
    return data
}

const getProductDB = async (id) => {
    let [[data]] = await pool.query(`
        SELECT * FROM products 
        WHERE prodId = ?
        `, [id])
    return data
}

const addProductDB = async (prodName, quantity, amount, category, prodDesc, prodUrl) => {
    await pool.query(`
        INSERT INTO products (prodName, quantity, amount, category, prodDesc, prodUrl)
        VALUES (?, ?, ?, ?, ?, ?)
        `, [prodName, quantity, amount, category, prodDesc, prodUrl])
}

const deleteProductDB = async (id) => {
    await pool.query(`
        DELETE FROM products
        WHERE prodId = ?
        `, [id])
}

const updateProductDB = async (prodName, quantity, amount, category, prodDesc, prodUrl, prodId) => {
    await pool.query(`
        UPDATE products
        SET prodName = ?, 
        quantity = ?, 
        amount = ?, 
        category = ?, 
        prodDesc = ?,
        prodUrl = ?
        WHERE prodId = ?
        `, [prodName, quantity, amount, category, prodDesc, prodUrl, prodId])
}

export { getProductsDB, getProductDB, addProductDB, deleteProductDB, updateProductDB }