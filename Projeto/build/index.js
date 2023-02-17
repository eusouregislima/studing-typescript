"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const bSum = document.getElementById("buttonSum");
const bSub = document.getElementById("buttonSub");
const bDiv = document.getElementById("buttonDiv");
const bMul = document.getElementById("buttonMul");
// mostrando 3 formas de escrever
/*
function sum(valor: Valores): number {
  return valor.a + valor.b;
}
function sub({ a, b }: Valores): number {
  return a - b;
}
function div(a: number, b: number): number {
  return a / b;
}
*/
function operacao({ tipo, a, b }) {
    if (tipo === "SOMAR") {
        return a + b;
    }
    else if (tipo === "SUBTRAIR") {
        return a - b;
    }
    else if (tipo === "DIVIDIR") {
        return a / b;
    }
    else if (tipo === "MULTIPLICAR") {
        return a * b;
    }
}
bSum.addEventListener("click", function () {
    const resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
});
bSub.addEventListener("click", function () {
    const resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
});
bDiv.addEventListener("click", function () {
    const resultado = operacao({
        tipo: "DIVIDIR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
});
bMul.addEventListener("click", function () {
    const resultado = operacao({
        tipo: "MULTIPLICAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
});
