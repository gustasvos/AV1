import Aeronave from "./aeronave";
import Etapa from "./etapa";

export default class Relatorio {
    public gerarRelatorio = (aeronave: Aeronave): void => {
        const rel = `
        RELÁTORIO FINAL DA AERONAVE ${aeronave.getModelo}:\n

        ${aeronave.detalhes()}
        \n

        ETAPAS REALIZADAS:\n

        ${Etapa}
        `
    }

    public salvarEmArquivo = (): void => {
        
    }
}