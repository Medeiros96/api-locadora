

import { Body, Controller, Post } from "@nestjs/common";

@Controller('/usuario')
export class UsuarioController{
    @Post()
    async criaUsuario(@Body() dadosUsuario) {
        var usuario = {
            dadosUsuario: dadosUsuario,
            status: 'Usuario Criado!'
    }
    return usuario;
}
}
