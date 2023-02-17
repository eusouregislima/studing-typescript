const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const bSum = document.getElementById("buttonSum") as HTMLElement;
const bSub = document.getElementById("buttonSub") as HTMLElement;
const bDiv = document.getElementById("buttonDiv") as HTMLElement;
const bMul = document.getElementById("buttonMul") as HTMLElement;

type Operacoes = "SOMAR" | "SUBTRAIR" | "DIVIDIR" | "MULTIPLICAR";

interface Valores {
  tipo: Operacoes;
  a: number;
  b: number;
}

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

function operacao({ tipo, a, b }: Valores): number | unknown {
  if (tipo === "SOMAR") {
    return a + b;
  } else if (tipo === "SUBTRAIR") {
    return a - b;
  } else if (tipo === "DIVIDIR") {
    return a / b;
  } else if (tipo === "MULTIPLICAR") {
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
