import express from 'express';
import userRouter from './router/userRouter.js'
import prodRouter from './router/productRouter.js'
import cors from 'cors'

const port = process.env.PORT || 8000
const app = express()

app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true
}))

app.use(express.static('public'))
app.use(express.json())

app.use('/users', userRouter)
app.use('/products', prodRouter)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})