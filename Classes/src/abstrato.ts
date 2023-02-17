type DadosConta = {
  nome: string;
  numero: string;
  endereco: string;
};

// No abstract essa classe fica abstrata, ela serve como modelo e não é instanciada.

abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("=======================================");
    console.log(`Novaconta P. Física criada com sucesso para ${dados.nome}`);
    console.log("=======================================");
    return true;
  }
}

class PessoaJuridica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
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
