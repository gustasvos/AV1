import Aeronave, { TipoAeronave } from "./aeronave";

let aeronave = new Aeronave('01', 'modelo1', TipoAeronave.COMERCIAL, 150, 200)
let aeronave2 = new Aeronave('02', 'modelo1', TipoAeronave.MILITAR, 150, 200)
let aeronave3 = new Aeronave('03', 'modelo2', TipoAeronave.COMERCIAL, 150, 200)
let aeronave4 = new Aeronave('04', 'modelo2', TipoAeronave.MILITAR, 150, 500)
let aeronave5 = new Aeronave('05', 'modelo3', TipoAeronave.MILITAR, 150, 400)

let as = [aeronave, aeronave2, aeronave3, aeronave4, aeronave5]

.forEach(a => {
    a.detalhes()    
});

// aeronave.detalhes()