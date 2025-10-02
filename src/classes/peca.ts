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
        if (this.getStatus === StatusPeca.PRONTA) {
            console.log(`Não é possível alterar o status de uma peça que está pronta.`)
        }
        else {
            console.log(`Status da peça ${this.getNome} foi atualizado com sucesso de ${this.getStatus} para ${novoStatus}`)
            this.status = novoStatus
        }
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


// O sistema também deverá gerenciar peças que serão associadas às aeronaves. Para
// cada peça será necessário informar seu nome, tipo, fornecedor e status. O tipo poderá
// ser nacional ou importada e o status poderá indicar se a peça está em produção, em
// transporte ou pronta para uso. É aconselhável que tipo e status sejam representados
// como valores fixos (enumerações) para padronizar as informações. Um método de
// atualização de status deverá ser implementado, de modo que seja possível acompanhar
// a evolução das peças até a sua utilização
