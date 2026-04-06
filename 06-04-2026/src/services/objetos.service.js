// Mock de dados

const objetos = [
    { id: 1, nome: "Caneta" },
    { id: 2, nome: "Papel" }
]

class ObjetoService {
    getAll() {
        return objetos
    }

    getById(id) {
        return objetos.find(o => o.id === parseInt(id))
    }

    create(nome) {
        const newObjeto = {
            id: objetos.length > 0 ? objetos[objetos.length - 1].id + 1 : 1,
            nome
        }
        objetos.push(newObjeto)
        return newObjeto
    }

    update(id, nome) {
        const index = objetos.findIndex(o => o.id === parseInt(id));
        if (index !== -1) {
            objetos[index].nome = nome;
            return objetos[index];
        }
        return null;
    }
    delete(id) {
        const index = objetos.findIndex(o => o.id === parseInt(id));

        if (index !== -1) {
            const deletedObjeto = objetos.splice(index, 1);
            return deletedObjeto[0]; 
        }

        return null;}
}


export const objetosService = new ObjetoService()