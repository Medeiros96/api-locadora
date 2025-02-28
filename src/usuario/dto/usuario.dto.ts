



import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty ({message: "nome nao pode ser vazio"})
    nome:string;

    @IsInt()
    idade: Number;

    @IsString()
    cidade: string;

    @IsEmail(undefined,{message:"email invalido"})
    @EmailUnico({message:"email ja cadastrado. Tente Novamente! "})
    email: string;

    @IsString()
    telefone: string;

    @MinLength(6,{message: "senha precisa de pelo menos 6 digitos"})
    senha: string;
}

