import * as fs from 'fs'
import path from "path"
import Carregador from "../interfaces/carregador"
import Salvador from "../interfaces/salvador"

export default class Teste implements Salvador, Carregador {
    public tipo: TipoTeste
    public resultado: ResultadoTeste

    constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
        this.tipo = tipo
        this.resultado = resultado
    }

    get getTipo(): TipoTeste { return this.tipo }

    get getResultado(): ResultadoTeste { return this.resultado }

    public salvar = (): void => {
        const testeData = {
            tipo: this.getTipo,
            resultado: this.getResultado,
        }

        const publicDirPath = path.join(__dirname, '..', 'public')
        const filePath = path.join(__dirname, '..', 'public', 'testes.json')

        if (!fs.existsSync(publicDirPath)) {
            fs.mkdirSync(publicDirPath, { recursive: true })
        }

        try {
            let testes = []

            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf-8')
                testes = JSON.parse(data) // converte json em array de objetos
            }

            testes.push(testeData)

            fs.writeFileSync(filePath, JSON.stringify(testes, null, 2), 'utf-8')
            // Aeronave.salvarNextCodigo()

            console.log("Teste salvo com sucesso.")
        }
        catch (err) {
            console.log(`Erro ao salvar teste: ${err}`)
        }
    }

    // public carregar = (): void => {
    public carregar = (): void => {
        const filePath = path.join(__dirname, '..', 'public', 'testes.json')

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            const parsedData = JSON.parse(data)

            console.log('Testes carregados do arquivo: ', parsedData)
        }
    }
}

export enum TipoTeste {
    ELETRICO = 'ELÉTRICO',
    HIDRAULICO = 'HIDRÁULICO',
    AERODINAMICO = 'AERODINAMICO'
}

export enum ResultadoTeste {
    APROVADO = 'APROVADO',
    REPROVADO = 'REPROVADO'
}