interface CourseProps {
  id: string;
  name: string;
  price: number;
  // definir apenas a função e o que ela deve esperar e retornar
  promotion: (price: number) => void;
}

function showPromotions(price: number): void {
  console.log(`Promoção no curso por apenas: R$ ${price}`);
}

const newCourse: CourseProps = {
  id: "01",
  name: "Course Pro",
  price: 300,
  promotion: showPromotions,
};

console.log(newCourse.promotion(247.97));

// Também poderia ter passado a função direto na variável

const newCourse2: CourseProps = {
  id: "01",
  name: "Course Pro",
  price: 300,
  promotion: (price: number): void => {
    console.log("Preço total:", price);
  },
};
console.log(newCourse2.promotion(149.0));

//Mais um exemplo

interface SumProps {
  (valor1: number, valor2: number): number;
}

let sumNumbers: SumProps = (valor1: number, valor2: number): number => {
  console.log("Resultado: ", valor1 + valor2);
  return valor1 + valor2;
};

const result = sumNumbers(17, 22);
console.log("Resultado da variável:", result);
