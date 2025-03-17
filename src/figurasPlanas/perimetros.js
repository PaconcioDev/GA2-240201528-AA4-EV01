import { pi } from '../index.js';

function perimetroCuadrilatero (base, altura) {
  const baseFinal = base * 2;
  const alturaFinal = altura * 2;
  const perimetro = baseFinal + alturaFinal;
  return perimetro;
}

function perimetroTrapecio (baseMayor, baseMenor, ladoIzq, ladoDer) {
  const perimetro = baseMayor + baseMenor + ladoIzq + ladoDer;
  return perimetro;
}

function perimetroCirculo (radio) {
  const perimetro = 2 * pi * radio;
  return perimetro;
}

export {
  perimetroCirculo,
  perimetroCuadrilatero,
  perimetroTrapecio,
};