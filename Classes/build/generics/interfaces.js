"use strict";
// Mostrando que também posso ter métodos
const arroz = {
    nome: "Arroz Agulhinha",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    },
};
console.log(arroz);
console.log(arroz.formatar(1500));
const feijao = {
    nome: "Feijao fradinho",
    preco: "1200",
};
console.log(feijao);
