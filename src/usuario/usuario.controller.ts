



import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import { criaUsuarioDTO } from "./dto/usuario.dto";

import { v4 as uuid } from "uuid"; //importante que seja colocado o import dessa forma.
import { ListaUsuarioDTO } from "./dto/consulta.dto";

@Controller('/usuario')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {

     

        var novoUsuario = new UsuarioEntity(uuid(),dadosUsuario.nome,
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


        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.cidade,
                usuario.email
            )
        );
                return listaRetorno;
    }
}
