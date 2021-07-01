//Unknown
declare const maybe:unknown

if (maybe == true) {
    const aNumber:number = 1803;
}

if (typeof maybe == 'string') {
    const aString:string = maybe;
}

//Any
declare function getValue(key:string):any;
const str:string = getValue('myString');

//Void
function warnUser():void {
    console.log("Void!");
}

let unusable:void = undefined;

//Null y Undefined
let u:undefined = undefined;
let n:null = null;
let myString: string | undefined | null = undefined;

//Never
function error(message: string | undefined):never {
    throw new Error(message);
}

function infinite():never {
    while(true){}
}


