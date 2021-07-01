// //Unknown
// declare const maybe:unknown

// if (maybe == true) {
//     const aNumber:number = 1803;
// }

// if (typeof maybe == 'string') {
//     const aString:string = maybe;
// }

// //Any
// declare function getValue(key:string):any;
// const str:string = getValue('myString');

// //Void
// function warnUser():void {
//     console.log("Void!");
// }

// let unusable:void = undefined;

// //Null y Undefined
// let u:undefined = undefined;
// let n:null = null;
// let myString: string | undefined | null = undefined;

// //Never
// function error(message: string | undefined):never {
//     throw new Error(message);
// }

// function infinite():never {
//     while(true){}
// }

//Union de tipos
/* let price:number | string = 12.45;

price = '10.5akdjdfhuienji';

if (typeof price == 'string') {
    price = parseInt(price);
}

console.log(price);

function printID(id: number | string) {
    console.log(id);
}

printID(2000);

let persona: {
    nombre:string,
    edad:number | string
} & {
    id: string,
    trabaja: boolean
} = {
    nombre: 'Frida',
    edad: 25,
    id: '18096',
    trabaja: true
};

function getBudget(obj: {budget: number | string}) {
    if(typeof obj.budget == 'string') {
        if (isNaN(parseInt(obj.budget))) {
            throw new Error('El valor ingresado no es un número');
        } else {
            console.log(`$${obj.budget} MXN`);
        }
    } else {
        console.log(`$${obj.budget} MXN`);
    }
}

getBudget({
    budget:5000
}); */

function countPeople(people: string | string[]) {
    if (Array.isArray(people)) {
        return people.length;
    } else {
        return 1;
    }
}

console.log(countPeople('Frida'));
console.log(countPeople(['frida', 'Daniela', 'Mariza']));
