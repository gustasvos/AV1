import Carregador from "../interfaces/carregador"
import Salvador from "../interfaces/salvador"

export default class Aeronave implements Salvador, Carregador {
    public codigo: string
    public modelo: string
    public tipo: TipoAeronave
    public capacidade: number
    public alcance: number

    constructor(codigo: string, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number) {
        this.codigo = codigo
        this.modelo = modelo
        this.tipo = tipo
        this.capacidade = capacidade
        this.alcance = alcance
    }

    // getters

    get getCodigo(): string { return this.codigo }

    get getModelo(): string { return this.modelo }

    get getTipo() { return this.tipo }

    get getCapacidade(): number { return this.capacidade }

    get getAlcance(): number { return this.alcance }

    // setters

    // set setCodigo(novoCodigo) { return this.codigo = novoCodigo }

    // métodos

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

    }

    public carregar = (): void => {

    }
}

export enum TipoAeronave {
    COMERCIAL = 'COMERCIAL',
    MILITAR = 'MILITAR'
}