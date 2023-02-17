// Type alias consigo criar tipos mais poderosos, com mais informações que tipos primitivos

type Info = {
  id: number;
  name: string;
  description?: string;
};

const productInfo: Info = {
  id: 1,
  name: "Teclado",
  description: "Mecânico com RGB",
};

type Category = {
  slug: string;
  quantityProducts: number;
};

const category1: Category = {
  slug: "hardware",
  quantityProducts: 15,
};

console.log(category1);

// agora vou unir o tipo Info com o tipo categoria

type ProductInfo = Info & Category; // Produto info é a união entre info e categoria

const newProduct: ProductInfo = {
  id: 1,
  name: "produto teste",
  slug: "testando",
  quantityProducts: 45,
};

console.log(newProduct);
