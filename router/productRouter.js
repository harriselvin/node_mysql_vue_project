import express from 'express';
import { fetchProducts, fetchProduct, addProduct, deleteProduct, updateProduct } from '../controller/productFunctions.js';

const prodRouter = express.Router()

prodRouter.get('/', fetchProducts)
        .get('/:id', fetchProduct)
        .post('/addProduct', addProduct)
        .patch('/update/:id', updateProduct)
        .delete('/delete/:id', deleteProduct)

export default prodRouter