"use strict";
function showPromotions(price) {
    console.log(`Promoção no curso por apenas: R$ ${price}`);
}
const newCourse = {
    id: "01",
    name: "Course Pro",
    price: 300,
    promotion: showPromotions,
};
console.log(newCourse.promotion(247.97));
// Também poderia ter passado a função direto na variável
const newCourse2 = {
    id: "01",
    name: "Course Pro",
    price: 300,
    promotion: (price) => {
        console.log("Preço total:", price);
    },
};
console.log(newCourse2.promotion(149.0));
let sumNumbers = (valor1, valor2) => {
    console.log("Resultado: ", valor1 + valor2);
    return valor1 + valor2;
};
const result = sumNumbers(17, 22);
console.log("Resultado da variável:", result);
