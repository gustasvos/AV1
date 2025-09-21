import Carregador from "./carregador";
import Finalizador from "./finalizador";
import Inicializador from "./inicializador";
import Salvador from "./salvador";

export default interface Sistema extends Salvador, Carregador, Inicializador, Finalizador {

}