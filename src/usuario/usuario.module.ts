
import {Get, Module} from '@nestjs/common'
import { UsuarioController } from './usuario.controller'
import { UsuariosArmazenados } from './usuario.dm'
import { emailUnicoValidator } from './validacao/email-unico.validator'

@Module ({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuariosArmazenados, emailUnicoValidator]
})

export class UsuarioModule{}
