



export class UsuarioEntity{
    id: string;
    nome:string;
    idade:number;
    cidade:string;
    email:string;
    telefone:number;
    senha:string;
    constructor(id: string, nome:string, idade:number, cidade:string, email:string, telefone:number, senha:string){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
    }
}