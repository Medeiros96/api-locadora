



import { IsString ,IsInt} from "class-validator";

export class CriarFilmeDto{
    @IsString()
    nome: String;

    @IsInt()
    duracao: Number;

    @IsString()
    sinopse: String;

    @IsString()
    ano: String;

    @IsString()
    genero: String;
}