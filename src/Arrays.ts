const items = [1,2,3,4,5,6,7];

const nombres:string[] = ['Frida', 'Daniela', 'Mariza'];

const edades:Array<number> = [25, 21, 28];

edades.push(4, 3.4);

const res:string[] = nombres.filter(x => x.startsWith('Fri'));

//tupla
const tupla:(string|number|boolean)[] = ['Frida', 25, false, 26];
const tupla2:[string, number, boolean] = ['Frida', 25, false];
const arrTuplas:[number, boolean][] = [
    [10, false],
    [34, true],
    [50, false]
];