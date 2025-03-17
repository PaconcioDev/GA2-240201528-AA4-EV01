import { pi } from '../index.js';

function areaCuadrilatero (base, altura) {
  const area = base * altura;
  return area;
}

function areaTriangulo (base, altura) {
  const x = areaCuadrilatero(base, altura);
  const area = x / 2;
  return area;
}

function areaTrapecio (baseMayor, baseMenor, altura) {
  const totalBase = baseMayor * baseMenor;
  const x = totalBase * altura;
  const area = x / 2;
  return area;
}

function areaCirculo (radio) {
  const area = pi * radio ** 2;
  return area;
}

export { areaCuadrilatero, areaTriangulo, areaTrapecio, areaCirculo }

