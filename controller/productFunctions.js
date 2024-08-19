import { getProductsDB, getProductDB, addProductDB, deleteProductDB, updateProductDB } from "../model/productsDB.js";

const fetchProducts = async (req, res) => {
    res.json(await getProductsDB())
}

const fetchProduct = async (req, res) => {
    res.json(await getProductDB(req.params.id))
}

const addProduct = async (req, res) => {
    let {prodName, quantity, amount, category, prodUrl} = req.body

    await addProductDB(prodName, quantity, amount, category, prodUrl)
    res.send('Product was successfully added')
}

const deleteProduct = async (req, res) => {
    await deleteProductDB(req.params.id)
    res.send('Product was successfully deleted')
}

const updateProduct = async (req, res) => {
    let {prodName, quantity, amount, category, prodUrl} = req.body
    let product = await getProductDB(req.params.id)

    prodName ? prodName = prodName : prodName = product.prodName
    quantity ? quantity = quantity : quantity = product.quantity
    amount ? amount = amount : amount = product.amount
    category ? category = category : category = product.category
    prodUrl ? prodUrl = prodUrl : prodUrl = product.prodUrl

    await updateProductDB(prodName, quantity, amount, category, prodUrl, req.params.id)
    res.send('Product info was successfully updated')
}

export { fetchProducts, fetchProduct, addProduct, deleteProduct, updateProduct }