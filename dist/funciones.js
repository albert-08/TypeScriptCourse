"use strict";
function saludar() {
    return '2';
}
const saludo = (nombre, edad) => {
    const mensaje = `Hola! ${nombre}, veo que tienes ${edad} años`;
    return mensaje.toUpperCase();
};
saludar();
console.log(saludo('Frida', 25));
