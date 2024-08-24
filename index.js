import express from 'express';
import userRouter from './router/userRouter.js'
import prodRouter from './router/productRouter.js'
import cors from 'cors'

const port = process.env.PORT || 8000
const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(cors())

app.use(express.static('public'))
app.use(express.json())

app.use('/users', userRouter)
app.use('/products', prodRouter)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})