// Mostrando que também posso ter métodos

interface NovoProduto<V extends number> {
  nome: string;
  preco: V;

  formatar(valor: V): string;
}

const arroz: NovoProduto<number> = {
  nome: "Arroz Agulhinha",
  preco: 1500,
  formatar(valor: number): string {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  },
};

console.log(arroz);
console.log(arroz.formatar(1500));

//Exemplo com o type

type NewProdut<V extends number | string> = {
  nome: string;
  preco: V;
};

const feijao: NewProdut<string> = {
  nome: "Feijao fradinho",
  preco: "1200",
};

console.log(feijao);
