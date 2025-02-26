



import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #usuarios: UsuarioEntity[] = [];

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    get Usuarios(){
        return this.#usuarios;
    }

    validaUsuario(dadosUsuario){
        var validacoes: string[] = [];
        if(!(dadosUsuario.id != null)){
            validacoes.push('id nao pode ser nulo');
        }
        if(!(dadosUsuario.nome != null)){
            validacoes.push('nome nao pode ser nulo');
        }
        if(!(dadosUsuario.idade != null)){
            validacoes.push('idade nao pode ser nulo');
        }
        if(!(dadosUsuario.cidade != null)){
            validacoes.push('cidade nao pode ser nulo');
        }
        if(!(dadosUsuario.email != null)){
            validacoes.push('email nao pode ser nulo');
        }
        if(!(dadosUsuario.telefone != null)){
            validacoes.push('telefone nao pode ser nulo');
        }
        if(!(dadosUsuario.senha != null)){
            validacoes.push('senha nao pode ser nulo');
        }
        return validacoes;
    }
}
