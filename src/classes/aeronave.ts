import * as fs from 'fs'
import path from "path"
import Salvador from "../interfaces/salvador"

export default class Aeronave implements Salvador {
    public codigo: number
    public modelo: string
    public tipo: TipoAeronave
    public capacidade: number
    public alcance: number
    private static nextCodigo: number = 1

    constructor(codigo: number, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number) {
        Aeronave.carregar()
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

    // métodos


    public detalhes = (): string => {
        return `
            Detalhes da Aeronave ${this.getCodigo}
            Código: ${this.getCodigo}
            Modelo: ${this.getModelo}
            Tipo: ${this.getTipo}
            Capacidade: ${this.getCapacidade}
            Alcance: ${this.getAlcance}
            `
    }

    public salvar = (): void => {
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

            if (aeronaves.length === 0) {
                // inicia valor de nextCodigo
                aeronaves.push({ nextCodigo: Aeronave.nextCodigo })
            }
            else {
                // atualiza nextCodigo
                aeronaves[0].nextCodigo = Aeronave.nextCodigo
            }

            aeronaves.push({
                codigo: this.getCodigo,
                modelo: this.getModelo,
                tipo: this.getTipo,
                capacidade: this.getCapacidade,
                alcance: this.getAlcance
            })

            fs.writeFileSync(filePath, JSON.stringify(aeronaves, null, 2), 'utf-8')
            // Aeronave.salvarNextCodigo()

            console.log("Aeronave salva com sucesso.")
        }
        catch (err) {
            console.log(`Erro ao salvar a aeronave: ${err}`)
        }
    }

    public static carregar = (): any[] => {
        const filePath = path.join(__dirname, '..', 'public', 'aeronaves.json')

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            const parsedData = JSON.parse(data)

            Aeronave.nextCodigo = parsedData[0].nextCodigo || 1
            return parsedData.slice(1)
        }
        return []
    }

    // }

    // // Carregar o valor do próximo código de aeronave do arquivo JSON
    // private static carregarNextCodigo(): void {
    //     const filePath = path.join(__dirname, '..', 'public', 'nextCodigo.json')

    //     if (fs.existsSync(filePath)) {
    //         const data = fs.readFileSync(filePath, 'utf-8')
    //         const savedData = JSON.parse(data)
    //         Aeronave.nextCodigo = savedData.nextCodigo || 1
    //     }
    // }

    // // Atualizar o valor do próximo código no arquivo JSON
    // private static salvarNextCodigo(): void {
    //     const filePath = path.join(__dirname, '..', 'public', 'nextCodigo.json')
    //     const nextCodigoData = { nextCodigo: Aeronave.nextCodigo }

    //     fs.writeFileSync(filePath, JSON.stringify(nextCodigoData, null, 2), 'utf-8')
    // }
}

export enum TipoAeronave {
    COMERCIAL = 'COMERCIAL',
    MILITAR = 'MILITAR'
}
