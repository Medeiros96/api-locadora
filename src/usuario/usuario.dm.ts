



import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";


@Injectable()
export class UsuariosArmazenados {
    #usuarios: UsuarioEntity[] = [];

    AdicionarUsuario(usuario: UsuarioEntity) {
        this.#usuarios.push(usuario);
    }

    get Usuarios() {
        return this.#usuarios;
    }

    async removeUsuario(id: string) {
        const usuario = this.buscaPorID(id);

        this.#usuarios = this.#usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )
        return usuario;
    }

    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id') {
                    return
                }
                if(valor === undefined){
                    return
                }
                usuario[chave] = valor;
            }
        )
        return usuario;
    }

    private buscaPorID(id: string) {
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )
        if (!possivelUsuario) {
            throw new Error('Usuario nao encontrado')
        }
        return possivelUsuario;
    }

    async validaEmail(email: string): Promise<boolean> {
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        return (possivelUsuario !== undefined);
    }
}

