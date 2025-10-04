import path from 'path';
import * as fs from 'fs'
import * as readline from 'readline';

import Aeronave, { TipoAeronave } from './aeronave';
import Funcionario, { NivelPermissao } from './funcionario';
import Peca, { StatusPeca, TipoPeca } from './peca';
import Teste, { ResultadoTeste, TipoTeste } from './teste';
import Etapa, { StatusEtapa } from './etapa';

// menu inicial
const menuInicial = (): void => {
    console.log(`
Selecione uma opção:

Items a cadastrar:

1. Aeronave
2. Funcionário
3. Peça
4. Teste
5. Etapa

Produção:

6. Iniciar produção
`)
}


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

        menuInicial()

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
                case '4':
                    this.criarTeste()
                    break
                case '5':
                    this.criarEtapa()
                    break
                default:
                    console.log("Opção inválida, tente novamente.")
                    break
            }
        })
    }

    // CRIAR AERONAVE
    public criarAeronave(): void {
        // this.pedirInput("Código da aeronave: ", (codigo) => {
        this.pedirInput("Modelo da aeronave: ", (modelo) => {
            this.pedirInput("Capacidade da aeronave: ", (capacidade) => {
                this.pedirInput("Alcance da aeronave (em km): ", (alcance) => {
                    this.selecionarTipoAeronave((tipo) => {
                        const aeronave = new Aeronave(
                            0,
                            modelo,
                            tipo,
                            parseInt(capacidade),
                            parseInt(alcance)
                        )

                        aeronave.salvar()
                        console.log('\nAeronave cadastrada com sucesso.')
                        aeronave.detalhes()

                        this.iniciar()
                    })
                })
            })
            // })
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
        })
    }

    // CRIAR FUNCIONÁRIO
    public criarFuncionario(): void {
        // this.pedirInput("ID do funcionário: ", (id) => {
        this.pedirInput("Nome do funcionário: ", (nome) => {
            this.pedirInput("Telefone do funcionário: ", (telefone) => {
                this.pedirInput("Endereço do funcionário: ", (endereco) => {
                    this.pedirInput("Usuário do funcionário: ", (usuario) => {
                        this.pedirInput("Senha do funcionário: ", (senha) => {
                            this.selecionarNivelPermissao((nivelPermissao) => {
                                const funcionario = new Funcionario(
                                    0,
                                    nome,
                                    telefone,
                                    endereco,
                                    usuario,
                                    senha,
                                    nivelPermissao
                                )

                                funcionario.salvar()
                                console.log("\nFuncionário cadastrado com sucesso.")
                                console.log(`
                                    ID: ${funcionario.getId}
                                    Nome: ${funcionario.getNome}
                                    Telefone: ${funcionario.getTelefone}
                                    Endereço: ${funcionario.getEndereco}
                                    Usuário: ${funcionario.getUsuario}
                                    Nível de Permissão: ${funcionario.getNivelPermissao}
                                    `)

                                this.iniciar()
                            })
                        })
                    })
                })
            })
        })
        // })
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

                        peca.salvar()
                        console.log("\nPeça cadastrada com sucesso.")
                        console.log(`
                        Nome: ${peca.getNome}
                        Tipo: ${peca.getTipo}
                        Fornecedor: ${peca.getFornecedor}
                        Peça: ${peca.getStatus}
                        `)

                        this.iniciar()
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

    // CRIAR TESTE
    public criarTeste = (): void => {
        this.selecionarTipoTeste((tipoTeste) => {
            this.selecionarResultadoTeste((resultadoTeste) => {
                const teste = new Teste(
                    tipoTeste,
                    resultadoTeste
                )

                teste.salvar()
                console.log('Teste criado com sucesso.')
                console.log(`
                        Tipo: ${teste.getTipo}
                        Resultado: ${teste.getResultado}
                `)

                this.iniciar()
            })
        })
    }

    private selecionarTipoTeste(callback: (tipoTeste: TipoTeste) => void): void {
        console.log("\nSelecione o tipo deste teste: ")
        console.log("1 - ELÉTRICO")
        console.log("2 - HIDRÁULICO")
        console.log("3 - AERODINÂMICO")

        this.pedirInput('Digite o número correspondente: ', (escolha) => {
            if (escolha === '1') {
                callback(TipoTeste.ELETRICO)
            }
            else if (escolha === '2') {
                callback(TipoTeste.HIDRAULICO)
            }
            else if (escolha === '3') {
                callback(TipoTeste.AERODINAMICO)
            }
            else {
                console.log('Opção inválida. Por favor, digite uma das opções disponíveis.')
                this.selecionarTipoTeste(callback)
            }
        })
    }

    private selecionarResultadoTeste(callback: (resultadoTeste: ResultadoTeste) => void): void {
        console.log("\nSelecione o resultado deste teste: ")
        console.log("1 - APROVADO")
        console.log("2 - REPROVADO")

        this.pedirInput('Digite o número correspondente: ', (escolha) => {
            if (escolha === '1') {
                callback(ResultadoTeste.APROVADO)
            }
            else if (escolha === '2') {
                callback(ResultadoTeste.REPROVADO)
            }
            else {
                console.log('Opção inválida. Por favor, digite uma das opções disponíveis.')
                this.selecionarResultadoTeste(callback)
            }
        })
    }


    // CRIAR ETAPA
    public criarEtapa = (): void => {
        this.pedirInput('Nome da etapa: ', (nome) => {
            this.pedirInput('Prazo da etapa: ', (prazo) => {
                this.selecionarStatusEtapa((statusEtapa) => {
                    this.carregarFuncionarios((funcionarios) => {
                        this.selecionarFuncionariosEtapa(funcionarios, (funcionariosSelecionados) => {
                            const etapa = new Etapa(
                                nome,
                                prazo,
                                statusEtapa,
                                funcionariosSelecionados
                            )

                            console.log("\nEtapa cadastrada com sucesso.")
                            console.log(`
                            Nome: ${etapa.getNome}
                            Prazo: ${etapa.getPrazo}
                            Status: ${etapa.getStatus}
                            `)

                            console.log(etapa)

                            this.iniciar()
                        })
                    })
                })
            })
        })
    }

    private carregarFuncionarios(callback: (funcionarios: Funcionario[]) => void): void {
        const filePath = path.join(__dirname, '..', 'public', 'funcionarios.json')
        let funcionarios: Funcionario[] = []

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            const jsonData = JSON.parse(data)

            // map no array de objetos para pegar só os funcionários e não o nextId
            funcionarios = jsonData.filter((item: { id: number; }) => item.id).map((item: { id: number; nome: string; telefone: string; endereco: string; usuario: string; senha: string; nivelPermissao: NivelPermissao; }) => {
                return new Funcionario(
                    item.id,
                    item.nome,
                    item.telefone,
                    item.endereco,
                    item.usuario,
                    item.senha,
                    item.nivelPermissao
                )
            })
        }
        else {
            console.log("Nenhum funcionário encontrado.")
        }

        callback(funcionarios)

    }

    private selecionarStatusEtapa(callback: (status: StatusEtapa) => void): void {
        console.log("\nSelecione o status da etapa:")
        console.log("1 - PENDENTE")
        console.log("2 - ANDAMENTO")
        console.log("3 - CONCLUIDA")

        this.pedirInput('Digite o número correspondente: ', (escolha) => {
            if (escolha === '1') {
                callback(StatusEtapa.PENDENTE)
            } else if (escolha === '2') {
                callback(StatusEtapa.ANDAMENTO)
            } else if (escolha === '3') {
                callback(StatusEtapa.CONCLUIDA)
            } else {
                console.log("Opção inválida. Por favor, digite 1, 2 ou 3.")
                this.selecionarStatusEtapa(callback)
            }
        })
    }

    private selecionarFuncionariosEtapa(funcionarios: Funcionario[], callback: (funcionariosSelecionados: Funcionario[]) => void): void {
        console.log("\nEscolha os funcionários para associar à etapa:")

        funcionarios.forEach((funcionario, index) => {
            console.log(`${index + 1} - ${funcionario.getNome} (ID: ${funcionario.getId})`)
        })

        this.pedirInput('Digite os números correspondentes separados por vírgula: ', (input) => {
            const idsSelecionados = input.split(',').map(id => parseInt(id.trim()))
            const funcionariosSelecionados = funcionarios.filter(funcionario =>
                idsSelecionados.includes(funcionario.getId)
            )

            if (funcionariosSelecionados.length === 0) {
                console.log("Nenhum funcionário selecionado. Tente novamente.")
                this.selecionarFuncionariosEtapa(funcionarios, callback) // repete
            } else {
                callback(funcionariosSelecionados)
            }
        })
    }
}