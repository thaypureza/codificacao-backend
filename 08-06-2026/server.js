import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

//CONFIGURAÇÃO PARA LER json NO CORPO DAS REQUISIÇÕES

let chats = [
    {
        id: "order-101",
        orderStatus: "A caminho",
        driver: { name: "Carlos Billagran", phone: "+55 11 99999-9999" },
        customer: { name: "Ana Souza", phone: "+55 11 98888-8888" },
        messages: [
            { id: 1, sender: "system", text: "Pedido em processo...", timestamp: "20:15" },
            { id: 2, sender: "driver", text: "Olá Ana, estou a caminho!", timestamp: "20:16" },
            { id: 3, sender: "customer", text: "Legal, Carlos! O interfone está com defeito, pode me ligar quando chegar?", timestamp: "20:17" }
        ]
    }
];

// ----------- ROTAS DE API -----------

//listar todos os chats/pedidos ativos
app.get('api/chats', (req, res) => {
    res.json(chats);
});

//Buscar os detalhes de um chat específico
app.get('api/chats/:orderId', (req, res) => {
    const chat = chats.find(c => c.id === req.params.orderId);
    if (!chat) {
        return res.status(404).json({ error: "Chat/Pedido não encontrado" });
    }
    res.json(chat);
});

//Enviar uma nova mensagem para um chat específico
app.post('api/chats/:orderId/messages', (req, res) => {
    const { orderId } = req.params;
    const { sender, text } = req.body;
    if (!sender || !text) {
        return res.status(404).json({ error: "Os campos sender e text são obrigatórios" });
    }

    const chat = chats.find(c => c.id === orderId);
    if (!chat) {
        return res.status(404).json({ error: "Chat não encontrado" });
    }
});

//Criando um timestamp simples
const now = new Date();
const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

const newMessage = {
    id: chat.messages.length + 1,
    sender,
    text,
    timestamp
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta em: http://localhost:${PORT}`);
});
