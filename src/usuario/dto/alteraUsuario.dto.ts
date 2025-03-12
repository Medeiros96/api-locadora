


import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty ({message: "nome nao pode ser vazio"})
    @IsOptional()
    nome:string;

    @IsInt()
    @IsOptional()
    idade: Number;

    @IsString()
    @IsOptional()
    cidade: string;

    @IsEmail(undefined,{message:"email invalido"})
    @EmailUnico({message:"email ja cadastrado. Tente Novamente! "})
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    telefone: string;

    @MinLength(6,{message: "senha precisa de pelo menos 6 digitos"})
    @IsOptional()
    senha: string;
}

