const filmes = [
    { id: 1, nome: "Harry Potter e a Pedra Filosofal", ano: "2001" },
    { id: 2, nome: "Harry Potter e a Câmara Secreta", ano: "2002" },
    { id: 3, nome: "Harry Potter e o Prisioneiro de Azkaban", ano: "2004" },
    { id: 4, nome: "Harry Potter e o Cálice de Fogo", ano: "2005" },
    { id: 5, nome: "Harry Potter e a Ordem da Fênix", ano: "2007" },
    { id: 6, nome: "Harry Potter e o Enigma do Príncipe", ano: "2009" },
    { id: 7, nome: "Harry Potter e as Relíquias da Morte - Parte 1", ano: "2010" },
    { id: 8, nome: "Harry Potter e as Relíquias da Morte - Parte 2", ano: "2011" }
];

class FilmeService {
    getAll(){
        return filmes;
    }

    getById(id){
        return filmes.find(f => f.id === id);
    }
}

export const filmeService = new FilmeService()