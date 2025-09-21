import Carregador from "../interfaces/carregador"
import Salvador from "../interfaces/salvador"

export default class Teste implements Salvador, Carregador {
    public tipo: TipoTeste
    public resultado: ResultadoTeste

    constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
        this.tipo = tipo
        this.resultado = resultado
    }

    public salvar = (): void => {

    }

    public carregar = (): void => {

    }
}

export enum TipoTeste {
    ELETRICO,
    HIDRAULICO,
    AERODINAMICO
}

export enum ResultadoTeste {
    APROVADO,
    REPROVADO
}