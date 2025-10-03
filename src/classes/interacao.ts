import * as readline from 'readline';
import Aeronave, { TipoAeronave } from './aeronave';
import Funcionario, { NivelPermissao } from './funcionario';

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

    // Função para selecionar o nível de permissão do funcionário
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
        });
    }

    // Função para encerrar a interação
    private fechar(): void {
        this.rl.close()
    }
}
