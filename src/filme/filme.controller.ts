


import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilmeEntity } from './filme.entity';
import { FilmeArmazenados } from './filme.armazenado';
import { CriarFilmeDto } from './dto/criarFilme.dto';
import { AlteraFilmeDto } from './dto/alteraFilme.dto';
import { v4 as uuid } from 'uuid';

@Controller('/filmes')
export class FilmeController {
    constructor(private readonly filmesArmazenados: FilmeArmazenados) { }

    // Criar um novo filme POST
    @Post()
    async criaFilme(@Body() dadosFilme: CriarFilmeDto) {

        const novoFilme = new FilmeEntity(
            uuid(),
            dadosFilme.nome,
            dadosFilme.duracao,
            dadosFilme.sinopse,
            dadosFilme.ano,
            dadosFilme.genero,
        );
        // Adiciona filme ao armazenamento
        this.filmesArmazenados.adicionarFilme(novoFilme);

        return {
            dadosFilme: dadosFilme,
            status: 'Filme Criado!',
        };
    }

    // Lista todos os filmes GET
    @Get()
    async listaFilmes() {
        const filmesListados = this.filmesArmazenados.Filmes;
        return filmesListados;
    }

    // Lista um filme específico por id
    @Get('/:id')
    async listaFilmePorId(@Param('id') id: string) {
        const filme = this.filmesArmazenados.Filmes.find((f) => f.id === id);
        if (!filme) {
            return { message: 'Filme não encontrado!' };
        }
        return filme;
    }

    // Atualiza um filme por id PUT
    @Put('/:id')
    async atualizaFilme(
        @Param('id') id: string,
        @Body() novosDados: AlteraFilmeDto,
    ) {
        const filmeAtualizado = await this.filmesArmazenados.atualizaFilme(id, novosDados);

        return {
            filme: filmeAtualizado,
            message: 'Filme atualizado',
        };
    }

    // Remove filme por id
    @Delete('/:id')
    async removeFilme(@Param('id') id: string) {
        const filmeRemovido = await this.filmesArmazenados.removeFilme(id);

        return {
            filme: filmeRemovido,
            message: 'Filme removido',
        };
    }
}
