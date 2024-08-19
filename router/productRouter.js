import express from 'express';
import { fetchProducts, fetchProduct, addProduct, deleteProduct, updateProduct } from '../controller/productFunctions.js';

const prodRouter = express.Router()

prodRouter.get('/', fetchProducts)
        .get('/:id', fetchProduct)
        .post('/insert', addProduct)
        .delete('/delete/:id', deleteProduct)
        .patch('/update/:id', updateProduct)

export default prodRouter