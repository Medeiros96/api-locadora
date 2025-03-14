

import { IsInt, IsOptional, IsString } from "class-validator";

export class alteraFilmeDto {
    @IsOptional()
    @IsString()
    nome: string;
  
    @IsOptional()
    @IsInt()
    duracao: number;
  
    @IsOptional()
    @IsString()
    sinopse: string;
  
    @IsOptional()
    @IsString()
    ano: string;
  
    @IsOptional()
    @IsString()
    genero: string;
  }