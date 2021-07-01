"use strict";
const user = {
    nombre: 'Frida',
    edad: 28
};
console.log(user, user.nombre, user['nombre']);
function printCoords(punto) {
    console.log(`Coordenadas: ${punto.x} - ${punto.y}`);
}
const p = {
    x: 10,
    y: 20
};
printCoords({ x: 10, y: 14 });
function postTweet(t) {
    var _a, _b;
    console.log(`Nuevo tweet: ${t.username}, ${t.text}, ${((_b = (_a = t.mediaUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '')}`);
}
postTweet({ username: 'frida', text: 'Hola a todos' });
const tweet = {
    username: 'frida',
    text: 'Hola',
    mediaUrl: 'http://frida.com',
    fecha: false
};
postTweet(tweet);
