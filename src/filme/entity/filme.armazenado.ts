import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity";
import { CriarFilmeDto } from "../dto/criarFilme.dto";




@Injectable()
export class UsuariosArmazenados {
    #usuarios: FilmeEntity[] = [];

    AdicionarUsuario(usuario: FilmeEntity) {
        this.#usuarios.push(usuario);
    }

    get Usuarios() {
        return this.#usuarios;
    }
}