import express from 'express'
import filmesRoutes from './routes/filmesRoutes.js'

const app = express()
app.use(express.json())

const port = 3000;
app.use('/filmes', filmesRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})