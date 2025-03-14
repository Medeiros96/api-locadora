

import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity"; 


@Injectable()
export class FilmeArmazenados {
    #filmes: FilmeEntity[] = [];

    // Adiciona um filme
    adicionarFilme(filme: FilmeEntity) {
        this.#filmes.push(filme);
    }

    get Filmes() {
        return this.#filmes;
    }

    // Remove filme por id
    async removeFilme(id: string) {
        const filme = this.buscaPorID(id);

        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        );
        return filme;
    }

    // Atualiza filme por id
    atualizaFilme(id: string, dadosAtualizacao: Partial<FilmeEntity>) {
        const filme = this.buscaPorID(id);

        // Atualiza os dados do filme, ignorando o id
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

    // Busca um filme por id
    private buscaPorID(id: string) {
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        );
        if (!possivelFilme) {
            throw new Error('Filme não encontrado');
        }
        return possivelFilme;
    }

    // Validar se existe um filme com o nome informado
    async validaNome(nome: string): Promise<boolean> {
        const possivelFilme = this.#filmes.find(
            filme => filme.nome === nome
        );
        return (possivelFilme !== undefined);
    }
}
