"use strict";
// No abstract essa classe fica abstrata, ela serve como modelo e não é instanciada.
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================");
        console.log(`Novaconta P. Física criada com sucesso para ${dados.nome}`);
        console.log("=======================================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================");
        console.log(`Novaconta P. Jurídica criada com sucesso para ${dados.nome}`);
        console.log("=======================================");
        return true;
    }
}
const xinquirica = new PessoaFisica();
xinquirica.abrirConta({
    nome: "Xinquirica da silva",
    numero: "2217-0",
    endereco: "New avenue, 55",
});
const programador = new PessoaJuridica();
programador.abrirConta({
    nome: "Teste de nome",
    numero: "1500 X",
    endereco: "Teste de endereço",
});
