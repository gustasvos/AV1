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

    public iniciar = (): void => {

    }

    public finalizar = (): void => {

    }

    public associarFuncionario = (f: Funcionario): void => {

    }

    public listarFuncionarios = (): Funcionario[] => {
        return []
    }
}

export enum StatusEtapa {
    PENDENTE,
    ANDAMENTO,
    CONCLUIDA
}