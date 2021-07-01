const user = {
    nombre: 'Frida',
    edad: 28
};

console.log(user, user.nombre, user['nombre']);

function printCoords(punto:{x:number, y:number}) {
    console.log(`Coordenadas: ${punto.x} - ${punto.y}`);
}

const p = {
    x: 10,
    y: 20
}

printCoords({x: 10, y: 14});

function postTweet(t:{username:string, text:string, mediaUrl?:string}) {
    console.log(`Nuevo tweet: ${t.username}, ${t.text}, ${(t.mediaUrl?.toLowerCase() ?? '')}`)
}

postTweet({username: 'frida', text: 'Hola a todos'});

const tweet:{username:string, text:string, mediaUrl:string, fecha?: boolean} = {
    username: 'frida',
    text: 'Hola',
    mediaUrl: 'http://frida.com',
    fecha: false
};

postTweet(tweet);