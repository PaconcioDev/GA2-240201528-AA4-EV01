import { pi } from '../index.js';

function volumenEsfera (radio) {
  const x = 4 * pi * radio ** 2;
  const volumen = x / 3;
  return volumen ;
}

function volumenCubo (lado) {
  const volumen = lado ** 3;
  return volumen;
}

function volumenParalelepipedo (base, altura, ancho) {
  const volumen = base * altura * ancho;
  return volumen;
}

function volumenCilindro (radio, altura) {
  const radioCuadrado = radio ** 2;
  const volumen = pi * radioCuadrado * altura;
  return volumen;
}

function volumenCono (radio, altura) {
  const x = volumenCilindro(radio, altura);
  const volumen = x / 3;
  return volumen;
}

export { volumenCilindro, volumenCono, volumenCubo, volumenEsfera, volumenParalelepipedo };