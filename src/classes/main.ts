import Aeronave, { TipoAeronave } from "./aeronave";
import Etapa , { StatusEtapa } from "./etapa";
import Funcionario, { NivelPermissao } from "./funcionario";
import Peca, { StatusPeca, TipoPeca } from "./peca";

let aeronave = new Aeronave('01', 'modelo1', TipoAeronave.COMERCIAL, 150, 200)
let aeronave2 = new Aeronave('02', 'modelo1', TipoAeronave.MILITAR, 150, 200)
let aeronave3 = new Aeronave('03', 'modelo2', TipoAeronave.COMERCIAL, 150, 200)
let aeronave4 = new Aeronave('04', 'modelo2', TipoAeronave.MILITAR, 150, 500)
let aeronave5 = new Aeronave('05', 'modelo3', TipoAeronave.MILITAR, 150, 400)

let as = [aeronave, aeronave2, aeronave3, aeronave4, aeronave5]

as.forEach(a => {
    a.detalhes()    
});

// funcionario

let fun1: Funcionario = new Funcionario('2', 'Gabriel', '123123123', 'endereco y', 'gabriel-user', 'senha-gabriel', NivelPermissao.OPERADOR)
let fun2: Funcionario = new Funcionario('3', 'Ana', '111111111', 'endereco a', 'ana-user', 'ana-senha', NivelPermissao.ENGENHEIRO)
let fun3: Funcionario = new Funcionario('4', 'Mateus', '222222222', 'endereco m', 'mateus-user', 'mateus-senha', NivelPermissao.ENGENHEIRO)
let fun4: Funcionario = new Funcionario('5', 'TESTE', '55555555', 'endereco TESTE', 'TESTE-USER', 'SENHA-TESTE', NivelPermissao.ENGENHEIRO)

let funs: Funcionario[] = [fun1, fun2, fun3]


let etapa = new Etapa("etapa 1", "12/10", StatusEtapa.PENDENTE, funs)
console.log(etapa.listarFuncionarios())
etapa.associarFuncionario(fun4)
etapa.iniciar()
console.log(etapa.getStatus)
etapa.finalizar()
console.log(etapa.getStatus)

let peca = new Peca('peca1', TipoPeca.NACIONAL, 'fornecedor1', StatusPeca.EM_PRODUCAO)
console.log(peca)
peca.atualizarStatus(StatusPeca.EM_TRANSPORTE)
console.log(peca)

// aeronave.detalhes()
