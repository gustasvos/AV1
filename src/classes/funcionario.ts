import * as fs from 'fs'
import path from "path"

export default class Funcionario {
    public id: number
    public nome: string
    public telefone: string
    public endereco: string
    public usuario: string
    public senha: string
    public nivelPermissao: NivelPermissao
    private static nextId: number = 1

    constructor(id: number, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao) {
        this.carregar()
        this.id = Funcionario.nextId++
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.usuario = usuario
        this.senha = senha
        this.nivelPermissao = nivelPermissao
    }

    // getters

    get getId(): number { return this.id }

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
        const funcionarioData = {
            id: this.getId,
            nome: this.getNome,
            telefone: this.getTelefone,
            endereco: this.getEndereco,
            usuario: this.getUsuario,
            senha: this.getSenha,
            nivelPermissao: this.getNivelPermissao
        }

        const publicDirPath = path.join(__dirname, '..', 'public')
        const filePath = path.join(__dirname, '..', 'public', 'funcionarios.json')

        if (!fs.existsSync(publicDirPath)) {
            fs.mkdirSync(publicDirPath, { recursive: true })
        }

        try {
            let funcionarios = []

            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf-8')
                funcionarios = JSON.parse(data) // converte json em array de objetos
            }

            if (funcionarios.length === 0) {
                // inicia valor de nextCodigo
                funcionarios.push({ nextId: Funcionario.nextId })
            }
            else {
                // atualiza nextCodigo
                funcionarios[0].nextId = Funcionario.nextId
            }

            funcionarios.push({
                id: this.getId,
                nome: this.getNome,
                telefone: this.getTelefone,
                endereco: this.getEndereco,
                usuario: this.getUsuario,
                senha: this.getSenha,
                nivelPermissao: this.getNivelPermissao
            })

            fs.writeFileSync(filePath, JSON.stringify(funcionarios, null, 2), 'utf-8')
            // Aeronave.salvarNextCodigo()

            console.log("Funcionário salva com sucesso.")
        }
        catch (err) {
            console.log(`Erro ao salvar o funcionário: ${err}`)
        }
    }

    // public carregar = (): void => {
    public carregar = (): void => {
        const filePath = path.join(__dirname, '..', 'public', 'funcionarios.json')

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            const parsedData = JSON.parse(data)

            Funcionario.nextId = parsedData[0].nextId || 1
        }
    }

}


    // public salvar = (): void => {
    //     const aeronaveData = {
    //         codigo: this.getCodigo,
    //         mdoelo: this.getModelo,
    //         tipo: this.getTipo,
    //         capacidade: this.getCapacidade,
    //         alcance: this.getAlcance
    //     }

    //     const publicDirPath = path.join(__dirname, '..', 'public')
    //     const filePath = path.join(__dirname, '..', 'public', 'aeronaves.json')

    //     if (!fs.existsSync(publicDirPath)) {
    //         fs.mkdirSync(publicDirPath, { recursive: true })
    //     }

    //     try {
    //         let aeronaves = []

    //         if (fs.existsSync(filePath)) {
    //             const data = fs.readFileSync(filePath, 'utf-8')
    //             aeronaves = JSON.parse(data) // converte json em array de objetos
    //         }

    //         aeronaves.push(aeronaveData)

    //         fs.writeFileSync(filePath, JSON.stringify(aeronaves, null, 2), 'utf-8')
    //         console.log("Aeronave salva com sucesso.")
    //     }
    //     catch (err) {
    //         console.log(`Erro ao salvar a aeronave: ${err}`)
    //     }
    // }

export enum NivelPermissao {
    ADMINISTRADOR = 'ADMINISTRADOR',
    ENGENHEIRO = 'ENGENHEIRO',
    OPERADOR = 'OPERADOR'
}
