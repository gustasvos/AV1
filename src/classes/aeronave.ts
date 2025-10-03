import * as fs from 'fs'
import path from "path"
import Carregador from "../interfaces/carregador"
import Salvador from "../interfaces/salvador"

export default class Aeronave implements Salvador, Carregador {
    public codigo: number
    public modelo: string
    public tipo: TipoAeronave
    public capacidade: number
    public alcance: number
    private static nextCodigo: number = 1

    constructor(codigo: number, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number) {
        this.codigo = Aeronave.nextCodigo++
        this.modelo = modelo
        this.tipo = tipo
        this.capacidade = capacidade
        this.alcance = alcance
    }

    // getters

    get getCodigo(): number { return this.codigo }

    get getModelo(): string { return this.modelo }

    get getTipo(): TipoAeronave { return this.tipo }

    get getCapacidade(): number { return this.capacidade }

    get getAlcance(): number { return this.alcance }

    // setters

    // set setCodigo(novoCodigo) { return this.codigo = novoCodigo }

    // métodos

    public cadastrar = (): void => {
        
    }

    public detalhes = (): void => {
        console.log(`
        Detalhes da Aeronave ${this.getCodigo}
        Código: ${this.getCodigo}
        Modelo: ${this.getModelo}
        Tipo: ${this.getTipo}
        Capacidade: ${this.getCapacidade}
        Alcance: ${this.getAlcance}
        `)
    }

    public salvar = (): void => {
        const aeronaveData = {
            codigo: this.getCodigo,
            mdoelo: this.getModelo,
            tipo: this.getTipo,
            capacidade: this.getCapacidade,
            alcance: this.getAlcance
        }

        const publicDirPath = path.join(__dirname, '..', 'public')
        const filePath = path.join(__dirname, '..', 'public', 'aeronaves.json')

        if (!fs.existsSync(publicDirPath)) {
            fs.mkdirSync(publicDirPath, { recursive: true })
        }

        try {
            let aeronaves = []

            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf-8')
                aeronaves = JSON.parse(data) // converte json em array de objetos
            }

            aeronaves.push(aeronaveData)

            fs.writeFileSync(filePath, JSON.stringify(aeronaves, null, 2), 'utf-8')
            console.log("Aeronave salva com sucesso.")
        }
        catch (err) {
            console.log(`Erro ao salvar a aeronave: ${err}`)
        }
    }

    public carregar = (): void => {
        
    }
}

export enum TipoAeronave {
    COMERCIAL = 'COMERCIAL',
    MILITAR = 'MILITAR'
}