import Finalizador from "../interfaces/finalizador"
import Inicializador from "../interfaces/inicializador"
import Funcionario from "./funcionario"

export default class Etapa implements Inicializador, Finalizador {
    public nome: string
    public prazo: string
    public status: StatusEtapa
    public funcionarios: Funcionario[]
    public etapaAnterior?: Etapa

    constructor(nome: string, prazo: string, status: StatusEtapa, funcionarios: Funcionario[], etapaAnterior?: Etapa) {
        this.nome = nome
        this.prazo = prazo
        this.status = status
        this.funcionarios = funcionarios
        this.etapaAnterior = etapaAnterior
    }

    // getters

    get getNome(): string { return this.nome }

    get getPrazo(): string { return this.prazo }

    get getStatus(): StatusEtapa { return this.status }

    get getFuncionarios(): Funcionario[] { return this.funcionarios }

    // métodos

    public iniciar = (): void => {
        if (this.etapaAnterior && this.etapaAnterior.getStatus !== StatusEtapa.CONCLUIDA) {
            console.log(`Não é possível iniciar a etapa "${this.getNome}" porque a etapa anterior "${this.etapaAnterior.getNome}" não foi concluída.`)
            return
        }

        if (this.getStatus === StatusEtapa.PENDENTE) {
            this.status = StatusEtapa.ANDAMENTO
            console.log(`A etapa ${this.getNome} foi iniciada.`)
        }
        else console.log(`A etapa ${this.getNome} não pode ser iniciada pois já está em andamento ou já foi concluída.`)
    }

    public finalizar = (): void => {
        if (this.getStatus === StatusEtapa.ANDAMENTO) {
            this.status = StatusEtapa.CONCLUIDA
            console.log(`A etapa ${this.getNome} foi concluída.`)
        }
        else console.log(`A etapa ${this.getNome} não pode ser concluída pois não está em andamento.`)
        
    }

    public associarFuncionario = (f: Funcionario): void => {

        this.funcionarios.push(f)
        console.log(`Funcionário ${f.getId} (${f.getNome}) foi adicionado a ${this.getNome} com sucesso!\n `)
        this.listarFuncionarios()
    }

    public listarFuncionarios = (): void => {
        const funcionariosNomeId = this.funcionarios.map(f => ({
            id: f.getId,
            nome: f.getNome
        }))

        console.log(`Funcionários associados a etapa ${this.getNome}:`)
        console.table(funcionariosNomeId)
        // return (`Funcionários associados a etapa: ${this.getNome}: ${this.funcionarios.map(f => f.getNome).join(", ")}`)
    }
}

export enum StatusEtapa {
    PENDENTE = 'PENDENTE',
    ANDAMENTO = 'ANDAMENTO',
    CONCLUIDA = 'CONCLUIDA'
}


// As etapas de produção também farão parte do sistema. Cada etapa terá um nome, um
// prazo para conclusão e um status que poderá estar como pendente, em andamento ou
// concluída. É importante que o avanço das etapas siga uma ordem lógica, impedindo
// que uma etapa seja concluída sem que a anterior tenha sido finalizada. Métodos para
// iniciar e finalizar etapas deverão ser desenvolvidos, sempre garantindo a consistência
// do processo de produção. Cada etapa deverá estar vinculada a uma aeronave e poderá
// ter funcionários responsáveis por sua execução.
