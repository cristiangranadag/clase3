/** Hacer el algoritmo para escribir un programa que evalúe la expresión (x+w)/(2*w) */

let resultado;
let x;
let w;

x = Number(prompt("Ingresar número x"));
w = Number(prompt("Ingresar número w"));

resultado = (x+w)/(2*w);

alert("El resultado es "+resultado);