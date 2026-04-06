import express from 'express'
import objetosRoutes from './routes/objetosRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

//rotas
app.use("/objetos", objetosRoutes)

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);

})

