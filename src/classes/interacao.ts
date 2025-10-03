import * as readline from 'readline';
import Aeronave, { TipoAeronave } from './aeronave';
import Funcionario, { NivelPermissao } from './funcionario';
import Peca, { StatusPeca, TipoPeca } from './peca';

console.log(`
    1. Aeronave
    2. Funcionário
    3. Peça
    4. Etapa
`)

export default class Interacao {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    // Função para ler o input e executar o callback com a resposta
    private pedirInput(question: string, callback: (res: string) => void): void {
        this.rl.question(question, (res) => {
            callback(res)
        })
    }

    public iniciar(): void {
        this.pedirInput("Escoha:", (res) => {
            switch (res) {
                case '1':
                    this.criarAeronave()
                    break
                case '2':
                    this.criarFuncionario()
                    break
                case '3':
                    this.criarPeca()
                    break
                default:
                    console.log("Opção inválida, tente novamente.")
                    break
            }
        })
    }

    // CRIAR AERONAVE
    public criarAeronave(): void {
        this.pedirInput("Código da aeronave: ", (codigo) => {
            this.pedirInput("Modelo da aeronave: ", (modelo) => {
                this.pedirInput("Capacidade da aeronave: ", (capacidade) => {
                    this.pedirInput("Alcance da aeronave (em km): ", (alcance) => {
                        this.selecionarTipoAeronave((tipo) => {
                            const aeronave = new Aeronave(
                                codigo,
                                modelo,
                                tipo,
                                parseInt(capacidade),
                                parseInt(alcance)
                            )

                            aeronave.detalhes()

                            this.fechar()
                        })
                    })
                })
            })
        })
    }

    private selecionarTipoAeronave(callback: (tipo: TipoAeronave) => void): void {
        console.log("\nSelecione o tipo da aeronave:")
        console.log("1 - COMERCIAL")
        console.log("2 - MILITAR")

        this.pedirInput("Digite o número correspondente: ", (escolha) => {
            if (escolha === '1') {
                callback(TipoAeronave.COMERCIAL)
            } else if (escolha === '2') {
                callback(TipoAeronave.MILITAR)
            } else {
                console.log("Opção inválida. Por favor, digite 1 ou 2.")
                this.selecionarTipoAeronave(callback) // repete
            }
        });
    }

    // CRIAR FUNCIONÁRIO
    public criarFuncionario(): void {
        this.pedirInput("ID do funcionário: ", (id) => {
            this.pedirInput("Nome do funcionário: ", (nome) => {
                this.pedirInput("Telefone do funcionário: ", (telefone) => {
                    this.pedirInput("Endereço do funcionário: ", (endereco) => {
                        this.pedirInput("Usuário do funcionário: ", (usuario) => {
                            this.pedirInput("Senha do funcionário: ", (senha) => {
                                this.selecionarNivelPermissao((nivelPermissao) => {
                                    const funcionario = new Funcionario(
                                        id,
                                        nome,
                                        telefone,
                                        endereco,
                                        usuario,
                                        senha,
                                        nivelPermissao
                                    )

                                    console.log("\nFuncionário cadastrado com sucesso!")
                                    console.log(`
                                    ID: ${funcionario.getId}
                                    Nome: ${funcionario.getNome}
                                    Telefone: ${funcionario.getTelefone}
                                    Endereço: ${funcionario.getEndereco}
                                    Usuário: ${funcionario.getUsuario}
                                    Nível de Permissão: ${funcionario.getNivelPermissao}
                                    `)

                                    this.fechar()
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    private selecionarNivelPermissao(callback: (nivelPermissao: NivelPermissao) => void): void {
        console.log("\nSelecione o nível de permissão do funcionário:")
        console.log("1 - ADMINISTRADOR")
        console.log("2 - ENGENHEIRO")
        console.log("3 - OPERADOR")

        this.pedirInput("Digite o número correspondente: ", (escolha) => {
            if (escolha === '1') {
                callback(NivelPermissao.ADMINISTRADOR)
            } else if (escolha === '2') {
                callback(NivelPermissao.ENGENHEIRO)
            } else if (escolha === '3') {
                callback(NivelPermissao.OPERADOR)
            } else {
                console.log("Opção inválida. Por favor, digite 1, 2 ou 3.")
                this.selecionarNivelPermissao(callback) // Repete a pergunta se a opção for inválida
            }
        })
    }

    // CRIAR PEÇA
    public criarPeca = (): void => {
        this.pedirInput('Nome da peça: ', (nome) => {
            this.pedirInput('Fornecedor: ', (fornecedor) => {
                this.selecionarTipoPeca((tipoPeca) => {
                    this.selecionarStatusPeca((statusPeca) => {
                        const peca = new Peca(
                            nome,
                            tipoPeca,
                            fornecedor,
                            statusPeca
                        )

                        console.log("\nPeça cadastrada com sucesso!")
                        console.log(`
                        Nome: ${peca.getNome}
                        Tipo: ${peca.getTipo}
                        Fornecedor: ${peca.getFornecedor}
                        Peça: ${peca.getStatus}
                        `)

                        this.fechar()
                    })
                })
            })
        })
    }

    private selecionarTipoPeca(callback: (tipoPeca: TipoPeca) => void): void {
        console.log("\nSelecione o tipo desta peça:")
        console.log("1 - NACIONAL")
        console.log("2 - IMPORTADA")

        this.pedirInput("Digite o número correspondente: ", (escolha) => {
            if (escolha === '1') {
                callback(TipoPeca.NACIONAL)
            } else if (escolha === '2') {
                callback(TipoPeca.IMPORTADA)
            } else {
                console.log("Opção inválida. Por favor, digite uma das opções disponíveis.")
                this.selecionarTipoPeca(callback) // Repete a pergunta se a opção for inválida
            }
        })
    }

    private selecionarStatusPeca(callback: (status: StatusPeca) => void): void {
        console.log("\nSelecione o status inicial desta peça:")
        console.log("1 - EM PRODUÇÃO")
        console.log("2 - EM TRANSPORTE")
        console.log("3 - PRONTA")

        this.pedirInput('Digite o número correspondente: ', (escolha) => {
            if (escolha === '1') {
                callback(StatusPeca.EM_PRODUCAO)
            }
            else if (escolha === '2') {
                callback(StatusPeca.EM_TRANSPORTE)
            }
            else if (escolha === '3') {
                callback(StatusPeca.PRONTA)
            }
            else {
                console.log('Opção inválida. Por favor, digite uma das opções disponíveis.')
                this.selecionarStatusPeca(callback)
            }
        })
    }

    private fechar(): void {
        this.rl.close()
    }
}
