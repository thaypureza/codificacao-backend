import express from 'express'
import { filmeService } from '../services/filme.service.js'

const route = express.Router()

route.get('/', (req, res) => {
    const filmes = filmeService.getAll()
    res.json(filmes)
})

route.get('/:id', (req, res) => {
    const {id} = req.params;
    const filme = filmeService.getById(id);

    if (!filme) {
        return res.status(404).json({
            message: "Filme não encontrado"
        })
    }

    res.json(filme)
})

export default route;