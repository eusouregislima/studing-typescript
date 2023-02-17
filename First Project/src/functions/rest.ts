function salesAmount(
  sales1: number,
  sales2: number,
  sales3: number,
  sales4: number
): number {
  const total = sales1 + sales2 + sales3 + sales4;

  console.log(total);
  return total;
}

salesAmount(500, 1700, 458, 15);

// Recriando a situação quando não se sabe ao certo quantas vendas virão

function salesAmount2(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;

  const total = vendas.reduce((total, vendas) => total + vendas);
  console.log(
    `Você tem ${quantidadeVendas} vendas hoje! que te rederam R$${total}.`
  );
}
salesAmount2(10, 50, 75, 58, 89, 63);

function mostraNomes(...nomes: string[]) {
  let totalNomes: number = nomes.length;
  console.log(totalNomes);

  nomes.map((nome) => {
    console.log(nome);
  });
}

mostraNomes("Régis", "Programador", "Teste", "Teste dois", "Teste três");
