

import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";

@Controller('/usuario')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario) {

        var validacoes = this.clsUsuariosArmazenados.validaUsuario(dadosUsuario);

        if(validacoes.length > 0){
            return{
                status:'erro',
                validacoes: validacoes
            }
        }

        var novoUsuario = new UsuarioEntity(dadosUsuario.id, dadosUsuario.nome,
                                            dadosUsuario.idade, dadosUsuario.cidade,
                                            dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);                                            

        var usuario = {
            dadosUsuario: dadosUsuario,
            status: 'Usuario Criado!'
    }
    return usuario;
}
    @Get()
    async listaUsuarios(){
        return this.clsUsuariosArmazenados.Usuarios;
    }
}
