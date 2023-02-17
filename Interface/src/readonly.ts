interface ProductProps {
  readonly id: string;
  name: string;
  description: string;
}

let productOne: ProductProps = {
  id: "01",
  name: "Teclado mecânico",
  description: "Teclado muito top",
};

console.log(productOne); // vejo o produto 1

//se o cara vai alterar o id
productOne.name = "Tênis";
console.log(productOne);
// Porém esse é um caso real onde o meu id nunca deve sofrer alteração

// após colocar o readonly não foi mais possível alterar o id
// é possivel somente visualizar
