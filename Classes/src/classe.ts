/* Classe?
>> Uma classe armazena as características e as ações que esse objeto vai possuir.
>> Ou seja, conjunto de atributos e métodos(ações)
*/

// Plus na aula adicionando o type alias
// Criando um type

type Status = "ABERTO" | "FECHADO";

class Loja {
  // declarar atributos
  name: string;
  category: string;

  constructor(name: string, category: string) {
    this.name = name;
    this.category = category;
  }

  // Criando um método dentro da classe
  criarLoja(): void {
    console.log(`Loja ${this.name}, category: ${this.category}`);
  }

  //colocando para receber um array de strings com mais pedidos
  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`);
    });

    return `Pedido na messa ${mesa}`;
  }

  mudarStatus(status: Status): void {
    if (status === "ABERTO") {
      console.log("Loja aberta com sucesso");
    } else {
      console.log("Loja fechada");
    }
  }
}

//criando as lojas

const beeBurger = new Loja("Bee Burger", "burgers");
beeBurger.criarLoja();
// Chamando o método
const retornoLoja = beeBurger.emitirPedido(12, "teste 1", "teste 2", "teste 3");
console.log(retornoLoja);

// montando outra loja
const loja2 = new Loja("Teste 2", "test");
loja2.criarLoja();

// testando o exemplo com type alias
beeBurger.mudarStatus("ABERTO");
