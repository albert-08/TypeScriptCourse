"use strict";
if (maybe == true) {
    const aNumber = 1803;
}
if (typeof maybe == 'string') {
    const aString = maybe;
}
const str = getValue('myString');
//Void
function warnUser() {
    console.log("Void!");
}
let unusable = undefined;
//Null y Undefined
let u = undefined;
let n = null;
let myString = undefined;
//Never
function error(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
