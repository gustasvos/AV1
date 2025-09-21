import Carregador from "../interfaces/carregador"
import Salvador from "../interfaces/salvador"

export default class Peca implements Salvador, Carregador {
    public nome: string
    public tipo: TipoPeca
    public fornecedor: string
    public status: StatusPeca
    
    constructor(nome: string, tipo: TipoPeca, fornecedor: string, status: StatusPeca) {
        this.nome = nome
        this.tipo = tipo
        this.fornecedor = fornecedor
        this.status = status
    }

    // getters

    get getNome(): string { return this.nome }

    get getTipo(): TipoPeca { return this.tipo }

    get getFornecedor(): string { return this.fornecedor }

    get getStatus(): StatusPeca { return this.status }


    public atualizarStatus = (novoStatus: StatusPeca): void => {
        this.status = novoStatus
    }

    public salvar = (): void => {

    }

    public carregar = (): void => {

    }
}

export enum TipoPeca {
    NACIONAL = 'NACIONAL',
    IMPORTADA = 'IMPORTADA'
}

export enum StatusPeca {
    EM_PRODUCAO = 'EM PRODUÇÃO',
    EM_TRANSPORTE = 'EM TRANSPORTE',
    PRONTA = 'PRONTA'
}