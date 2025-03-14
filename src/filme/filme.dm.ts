


import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity"; // A entidade Filme

@Injectable()
export class FilmesArmazenados {
    #filmes: FilmeEntity[] = [];

    // Adiciona um novo filme
    adicionarFilme(filme: FilmeEntity) {
        this.#filmes.push(filme);
    }

    // Retorna todos os filmes
    get Filmes() {
        return this.#filmes;
    }

    // Remove um filme pelo ID
    async removeFilme(id: string) {
        const filme = this.buscaPorID(id);

        // Filtra a lista de filmes removendo o filme com o ID fornecido
        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        );
        return filme;
    }

    // Atualiza um filme com novos dados
    atualizaFilme(id: string, dadosAtualizacao: Partial<FilmeEntity>) {
        const filme = this.buscaPorID(id);

        // Itera sobre os dados de atualização e aplica as mudanças
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id') {
                    return;
                }
                if (valor === undefined) {
                    return;
                }
                filme[chave] = valor;
            }
        );
        return filme;
    }

    // Busca um filme pelo ID
    private buscaPorID(id: string) {
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        );
        if (!possivelFilme) {
            throw new Error('Filme não encontrado');
        }
        return possivelFilme;
    }

    // Verifica se já existe um filme com o nome fornecido
    async validaNome(nome: string): Promise<boolean> {
        const possivelFilme = this.#filmes.find(
            filme => filme.nome === nome
        );
        return (possivelFilme !== undefined);
    }
}
