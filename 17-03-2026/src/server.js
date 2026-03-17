const express = require("express")

const app = express()
const port = 3000

const frutas = [
    { id: 1, nome: "Banana", cor: "Amarela" },
    { id: 2, nome: "Morango", cor: "vermelha" },
    { id: 3, nome: "Uva", cor: "roxa" }
]

app.get('/frutas', (req, res) => {
    res.send(frutas)
})

app.get('/frutas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const fruta = frutas.find(f => f.id === id)
    
    if (!fruta) {
        return res.status(404).json({
            success: false,
            message: "Fruta não encontrada"
        })
    }
res.json({
    success: true,
    data: fruta
})
})

app.listen(port, () => {
    console.log(`API de Frutas rodando em:${port}`)
})