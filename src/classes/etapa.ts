import Finalizador from "../interfaces/finalizador"
import Inicializador from "../interfaces/inicializador"
import Funcionario from "./funcionario"

export default class Etapa implements Inicializador, Finalizador {
    public nome: string
    public prazo: string
    public status: StatusEtapa
    public funcionarios: Funcionario[]

    constructor(nome: string, prazo: string, status: StatusEtapa, funcionarios: Funcionario[]) {
        this.nome = nome
        this.prazo = prazo
        this.status = status
        this.funcionarios = funcionarios
    }

    // getters

    get getNome(): string { return this.nome }

    get getPrazo(): string { return this.prazo }

    get getStatus(): StatusEtapa { return this.status }

    get getFuncionarios(): Funcionario[] { return this.funcionarios }

    // métodos

    public iniciar = (): void => {

    }

    public finalizar = (): void => {
        
    }

    public associarFuncionario = (f: Funcionario): void => {

    }

    public listarFuncionarios = (): string => {
        
        // return (`
        //     Funcionários associados a etapa: ${this.getNome}: 
        //     ${this.funcionarios.forEach(f => {
        //         `${f.getNome}`
        //     })}
        //     `)
    }
}

export enum StatusEtapa {
    PENDENTE = 'PENDENTE',
    ANDAMENTO = 'ANDAMENTO',
    CONCLUIDA = 'CONCLUIDA'
}


// public detalhes = (): void => {
//     console.log(`
//     Detalhes da Aeronave ${this.getCodigo}
//     Código: ${this.getCodigo}
//     Modelo: ${this.getModelo}
//     Tipo: ${this.getTipo}
//     Capacidade: ${this.getCapacidade}
//     Alcance: ${this.getAlcance}
//     `)
// }