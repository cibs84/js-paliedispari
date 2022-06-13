// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo all'utente di scegliere tra pari e dispari 
//  - Creo variabile per salvare la scelta dell'utente
let userEvenOdd;
//  - Chiedo all'utente di scegliere tra 'pari' - inserendo il numero 1 - oppure 'dispari - inserendo il numero 2
do {
    userEvenOdd = parseInt( prompt('Scegliere Pari o Dispari. Inserire: 1- Pari / 2- Dispari') );
 } 
//  Chiedo all'utente di scegliere FINCHE' non abbia inserito un numero tra 1 per il 'pari' e 2 per il 'dispari'
 while (userEvenOdd < 1 || userEvenOdd > 2);


// Creo una variabile per SALVARE la scelta che trasformo nella stringa 'pari' o 'dispari' in modo da utilizzarla nel messaggio che stamperemo alla fine
if (userEvenOdd === 1) {
    userEvenOdd = 'pari';
} else if (userEvenOdd === 2) {
    userEvenOdd = 'dispari';
}


// Chiedo all'utente di inserire un numero tra 1 e 5
//  - Creo varabile per salvare il numero inserito dall'utente
let userNumber;
//  - Chiedo all'utente d'inserire il numero FINCHE' non sarà compreso tra 1 e 5
 do {
    userNumber = parseInt( prompt('Inserisci un numero tra 1 e 5') );
 } 
 while (userNumber < 1 || userNumber > 5);


 // Creo una funzione per generare un numero random
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
   }


// Genero un numero random per il computer invocando la funzione getRndInteger()
let pcNumber = getRndInteger(1, 5);


// Faccio la somma dei due numeri
let sumNumbers = userNumber + pcNumber;


// Creo la funzione checkEvenNumber() per stabilire se un numero è pari.
function checkEvenNumber(myNumber) {
    // Creo la variabile che ha valore 'false' SE il numero è dispari 
    let isEvenNumber = false;
    // oppure 'true' SE il numero è pari
    if (myNumber % 2 === 0) {
        isEvenNumber = true;
    }

    // La funzione ritorna il valore 'true' o 'false' della variabile 'isEvenNumber'
    return isEvenNumber;
} 


// Invoco la funzione checkEvenNumber() per stabilire SE la somma dei due numeri è pari ALTRIMENTI sarà dispari
let isEvenSum = checkEvenNumber(sumNumbers);


// Creo una variabile per SALVARE il risultato che trasformo da booleano in stringa ('pari' o 'dispari') in modo da utilizzarlo nel messaggio che stamperemo alla fine
let msgResult;
//  - SE la somma è pari: msgResult -> 'pari'
if (isEvenSum === true) {
    msgResult = 'pari';
//  - ALTRIMENTI la somma sarà 'dispari': msgResult -> 'dispari'
} else {
    msgResult = 'dispari';
}


// DEBUG
console.log('Numero del Giocatore: ', userNumber);
console.log('Numero del Computer: ', pcNumber);
console.log('La somma dei due numeri: ', sumNumbers);
console.log('Il giocatore ha scelto: ', userEvenOdd);


// Stampo che ha vinto il Giocatore SE la somma è pari e il Giocatore ha scelto pari OPPURE la somma è dispari e il Giocatore ha scelto dispari
if (isEvenSum && userEvenOdd === 'pari' || !isEvenSum && userEvenOdd === 'dispari') {
    alert(`Il risultato è ${msgResult}. Hai vinto!`);
// ALTRIMENTI stampo che il Giocatore non ha perso
} else {
    alert(`Il risultato è ${msgResult}. Hai perso!`);    
}


