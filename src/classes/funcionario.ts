export default class Funcionario {
    public id: string
    public nome: string
    public telefone: string
    public endereco: string
    public usuario: string
    public senha: string
    public nivelPermissao: NivelPermissao

    constructor(id: string, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao) {
        this.id = id
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.usuario = usuario
        this.senha = senha
        this.nivelPermissao = nivelPermissao
    }

    // getters

    get getId(): string { return this.id }

    get getNome(): string { return this.nome }

    get getTelefone(): string { return this.telefone }

    get getEndereco(): string { return this.endereco }

    get getUsuario(): string { return this.usuario }

    get getSenha(): string { return this.senha }

    get getNivelPermissao(): NivelPermissao { return this.nivelPermissao }

    // métodos

    public autenticar = (usuario: string, senha:string): boolean => {
        return true
    }

    public salvar = (): void => {

    }
    
    public carregar = (): void => {

    }

}

export enum NivelPermissao {
    ADMINISTRADOR = 'ADMINISTRADOR',
    ENGENHEIRO = 'ENGENHEIRO',
    OPERADOR = 'OPERADOR'
}