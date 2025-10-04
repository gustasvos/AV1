import * as readline from 'readline';
import Aeronave, { TipoAeronave } from "./aeronave";
import Etapa , { StatusEtapa } from "./etapa";
import Funcionario, { NivelPermissao } from "./funcionario";
import Interacao from "./interacao";
import Peca, { StatusPeca, TipoPeca } from "./peca";
import Teste, { ResultadoTeste, TipoTeste } from './teste';

// const interacao: Interacao = new Interacao
// interacao.iniciar()

// console.log(`
//     1. Aeronave
//     2. Funcionário
//     3. Peça
//     4. Etapa
// `)

// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Escolha: ", (res) => {
//     switch (res) {
//         case '1':
//             interacao.criarAeronave()
//             break
//         default:
//             console.log("opção invalida, tente novamente.")
//             break
//     }
// })

// interacao.criarAeronave()

// const iniciar = (): void => {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })

//     const perguntar = () => {
//         rl.question('Escolha uma das opções acima para cadastrar.', (o) => {
//             switch (o) {
//                 case '1':
//                     console.log('teste')
//                     // interacao.criarAeronave()
//                     rl.close()
//                     break
//                 case '2':
//                     // interacao.criarFuncionario()
//                     // rl.close()
//                     break
//                 case '3':
//                     // rl.close()
//                     break
//                 case '4':
//                     // rl.close()
//                     break
//                 default:
//                     console.log("Opção inválida, tente novamente.")
//                     break
//                     // perguntar()
//             }
//         })
//     }
//     perguntar()
// }

// iniciar()

let aeronave = new Aeronave(0, 'modelo1', TipoAeronave.COMERCIAL, 150, 200)
aeronave.salvar()
// let aeronave2 = new Aeronave(0, 'modelo1', TipoAeronave.MILITAR, 150, 200)
// let aeronave3 = new Aeronave(0, 'modelo2', TipoAeronave.COMERCIAL, 150, 200)
// let aeronave4 = new Aeronave(0, 'modelo2', TipoAeronave.MILITAR, 150, 500)
// let aeronave5 = new Aeronave(0, 'modelo3', TipoAeronave.MILITAR, 150, 400)

// let as = [aeronave, aeronave2, aeronave3, aeronave4, aeronave5]

// as.forEach(a => {
//     a.salvar()
// });

// // funcionario

let fun1: Funcionario = new Funcionario(0, 'Gabriel', '123123123', 'endereco y', 'gabriel-user', 'senha-gabriel', NivelPermissao.OPERADOR)
fun1.salvar()
// let fun2: Funcionario = new Funcionario('3', 'Ana', '111111111', 'endereco a', 'ana-user', 'ana-senha', NivelPermissao.ENGENHEIRO)
// let fun3: Funcionario = new Funcionario('4', 'Mateus', '222222222', 'endereco m', 'mateus-user', 'mateus-senha', NivelPermissao.ENGENHEIRO)
// let fun4: Funcionario = new Funcionario('5', 'TESTE', '55555555', 'endereco TESTE', 'TESTE-USER', 'SENHA-TESTE', NivelPermissao.ENGENHEIRO)

// let funs: Funcionario[] = [fun1, fun2, fun3]


// let etapa = new Etapa("etapa 1", "12/10", StatusEtapa.PENDENTE, funs)
// console.log(etapa.listarFuncionarios())
// etapa.associarFuncionario(fun4)
// etapa.iniciar()
// console.log(etapa.getStatus)
// etapa.finalizar()
// console.log(etapa.getStatus)

let peca = new Peca('peca1', TipoPeca.NACIONAL, 'fornecedor1', StatusPeca.EM_PRODUCAO)
peca.salvar()
peca.carregar()
// console.log(peca)
// peca.atualizarStatus(StatusPeca.EM_TRANSPORTE)
// console.log(peca)

let teste = new Teste(TipoTeste.AERODINAMICO, ResultadoTeste.APROVADO)
teste.salvar()

// aeronave.detalhes()