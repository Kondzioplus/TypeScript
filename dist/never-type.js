"use strict";
// Typ Never.
const showError = (message) => {
    throw new Error(message); //brak returna = typ never.
};
const showErrors = () => {
    while (true) {
        console.log('Error');
    }
};
const showLog = () => {
    console.log('some log');
};
if (showLog() === undefined) {
    console.log('Jestem tutaj');
}
