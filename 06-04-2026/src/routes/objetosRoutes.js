import express from 'express'
import { objetosService } from '../services/objetos.service.js'

const route = express.Router()

route.get("/", (req, res) => {
    const data = objetosService.getAll()
    res.json(data)
})

route.post("/", (req, res) => {
    console.log("cheguei aqui");

    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ message: "O nome do objeto é obrigatório" })
    }

    const newObjeto = objetosService.create(nome)

    res.status(201).json(newObjeto)
})

route.get("/:id", (req, res) => {
    const { id } = req.params
    const objeto = objetosService.getById(id)
    if (!objeto) {
        return res.status(404).json({ message: "Objeto não encontrado" })
    }

    res.json(objeto)})

route.put("/:id", (req, res) => { 
    const { id } = req.params 
    const { nome } = req.body 

    if (!nome) {
        return res.status(400).json({ message: "O novo nome do objeto é obrigatório" })
    }

    const updatedObjeto = objetosService.update(id, nome)

    if (!updatedObjeto) {
        return res.status(404).json({ message: "Objeto não encontrado para atualizar" })
    }

    res.json(updatedObjeto)
})

route.delete("/:id", (req, res) => {
    const { id } = req.params
    
    const wasDeleted = objetosService.delete(id)

    if (!wasDeleted) {
        return res.status(404).json({ message: "Objeto não encontrado para remover" })
    }

    res.json({ message: "Objeto removido com sucesso" })
})







export default route