import { areaCirculo, areaCuadrilatero, areaTrapecio, areaTriangulo } from './figurasPlanas/areas.js';
import { perimetroCirculo, perimetroCuadrilatero, perimetroTrapecio } from './figurasPlanas/perimetros.js';
import { volumenCilindro, volumenCono, volumenCubo, volumenEsfera, volumenParalelepipedo } from './figurasSolidas/volumen.js';

const pi = Math.PI;
const figuresByOperation = {
  area: ["Cuadrado", "Rectángulo", "Círculo", "Triángulo", "Rombo", "Trapecio"],
  perimeter: ["Cuadrado", "Rectángulo", "Círculo"],
  volume: ["Esfera", "Cubo", "Paralelepípedo", "Cilindro", "Cono"]
};

const inputsByFigure = {
  cuadrado: ["Base", "Altura"],
  rectángulo: ["Base", "Altura"],
  triángulo: ["Base", "Altura"],
  rombo: ["Diagonal Menor", "Diagonal Mayor"],
  trapecio: ["Base Mayor", "Base Menor", "Altura"],
  círculo: ["Radio"],
  cubo: ["Lado"],
  esfera: ["Radio"],
  paralelepípedo: ["Base", "Altura", "Ancho"],
  cilindro: ["Radio", "Altura"],
  cono: ["Radio", "Altura"],
};

document.addEventListener('DOMContentLoaded', () => {
  const operationSelect = document.getElementById('operation-select');
  const figureSelect = document.getElementById('figure-select');
  const operationTitle = document.querySelector('.operation__title');
  const inputForm = document.getElementById('input-form');
  const operationResult = document.querySelector('.operation__result');
  const inputFields = document.getElementById("input-field");
  const resultSpan = document.getElementById("result");

  operationSelect.addEventListener('change', () => {
    operationResult.className = 'operation__result'
    const selectedOperation = operationSelect.value;
    operationTitle.textContent = selectedOperation !== ""
      ? `${operationSelect.options[operationSelect.selectedIndex].text}`
      : `Elija una operación`;

    figureSelect.innerHTML = `<option value="">-Elija una opción-</option>`;
    if (selectedOperation && figuresByOperation[selectedOperation]) {
      figuresByOperation[selectedOperation].forEach((figure) => {
        const option = document.createElement('option');
        option.value = figure.toLowerCase();
        option.textContent = figure;
        figureSelect.appendChild(option);
      });
    }
  });

  figureSelect.addEventListener('change', () => {
    operationResult.className = 'operation__result'
    const selectedFigure = figureSelect.value;
    inputForm.className = selectedFigure !== ""
      ? 'operation__form--visible'
      : 'operation__form';

    inputFields.innerHTML = '';

    if (selectedFigure && inputsByFigure[selectedFigure]) {
      inputsByFigure[selectedFigure].forEach((label) => {
        const div = document.createElement('div');
        div.innerHTML = `<label>${label}: <input type="number" step="any" id="${label.toLowerCase()}"></input></label>`;
        inputFields.appendChild(div);
      });
    } else if (selectedFigure === '') {
      return;
    }
  });

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    operationResult.className = 'operation__result--visible';

    const selectedOperation = operationSelect.value;
    const selectedFigure = figureSelect.value;
    if (!selectedOperation || !selectedFigure) return;

    const values = {};
    inputFields.querySelectorAll("input").forEach((input) => {
      values[input.id] = parseFloat(input.value) || 0;
    });

    let result;
    switch (selectedFigure) {
      case "cuadrado":
      case "rectángulo":
        result = selectedOperation === "area"
          ? areaCuadrilatero(values.base, values.altura)
          : perimetroCuadrilatero(values.base, values.altura);
        break;
      case "triángulo":
        result = areaTriangulo(values.base, values.altura);
        break;
      case "trapecio":
        result = selectedOperation === "area"
          ? areaTrapecio(values.baseMayor, values.baseMenor, values.altura)
          : perimetroTrapecio(values.baseMayor, values.baseMenor, values.ladoizq, values.ladoder);
        break;
      case "círculo":
        result = selectedOperation === "area"
          ? areaCirculo(values.radio)
          : perimetroCirculo(values.radio);
        break;
      case "cubo":
        result = volumenCubo(values.lado);
        break;
      case "esfera":
        result = volumenEsfera(values.radio);
        break;
      case "paralelepípedo":
        result = volumenParalelepipedo(values.base, values.altura, values.ancho);
        break;
      case "cilindro":
        result = volumenCilindro(values.radio, values.altura);
        break;
      case "cono":
        result = volumenCono(values.radio, values.altura);
        break;
    }
    resultSpan.textContent = result;
  });


});









export { pi };
