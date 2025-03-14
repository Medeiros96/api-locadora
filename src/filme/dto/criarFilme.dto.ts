



import { IsString, IsInt, IsNotEmpty } from "class-validator";

export class CriarFilmeDto {
    @IsString()
    @IsNotEmpty({ message: "nome nao pode ser vazio" })
    nome: string;

    @IsInt()
    duracao: number;

    @IsString()
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;
}