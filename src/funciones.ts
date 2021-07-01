function saludar():string {
    return '2';
}

const saludo = (nombre: string, edad: number):string => {
    const mensaje = `Hola! ${nombre}, veo que tienes ${edad} años`;
    return mensaje.toUpperCase();
}

saludar();

console.log(saludo('Frida', 25));