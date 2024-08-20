import express from 'express';
import userRouter from './router/userRouter.js'
import prodRouter from './router/productRouter.js'


const port = process.env.PORT || 8000
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use('/users', userRouter)
app.use('/products', prodRouter)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})