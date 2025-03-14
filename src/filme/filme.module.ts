import { Module } from "@nestjs/common";
import { FilmeController } from "./filme.controller";
import { FilmeArmazenados } from "./filme.armazenado";


@Module ({
    imports:[],
    controllers:[FilmeController],
    providers:[FilmeArmazenados]
})

export class FilmeModule{}
