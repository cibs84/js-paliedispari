// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo all'utente di scegliere tra pari e dispari
let userEvenOdd = parseInt( prompt('Scegliere Pari o Dispari. Inserire: 1- Pari / 2- Dispari') );

// Chiedo all'utente di inserire un numero tra 1 e 5
// - Creo varabile per salvare il numro inserito dall'utente
let userNumber;
// - Chiedo all'utente d'inserire il numero FINCHE' non sarà tra 1 e 5
 do {
    userNumber = parseInt( prompt('Inserisci un numero tra 1 e 5') );
 } 
 while (userNumber < 1 || userNumber > 5);

 // Creo una funzione per generare un numero random
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
   }

// Invoco la funzione getRndInteger per generare un numero random per il computer
let pcNumber = getRndInteger(1, 5);

// Faccio la somma dei due numeri
let sumNumbers = userNumber + pcNumber;

// Creo una funzione per stabilire se un numero è pari.
function checkEvenNumber(myNumber) {
    // Creo la variabile che ha valore 'false' se il numero è dispari 
    let isEvenNumber = false;
    // oppure 'true' SE il numero è pari
    if (myNumber % 2 === 0) {
        isEvenNumber = true;
    }

    // La funzione ritorna il valore 'true' o 'false' della variabile 'isEvenNumber'
    return isEvenNumber;
} 

// Invoco la funzione checkEvenNumber per stabilire SE la somma dei due numeri sia pari ALTRIMENTI sarà dispari
let isEvenSum = checkEvenNumber(sumNumbers);

// Creo variabile per SALVARE il risultato che trasformo da booleano a stringa ('pari' o 'dispari') in modo da utilizzarlo nel messaggio che stamperemo alla fine
let msgResult;
if (isEvenSum === true) {
    msgResult = 'pari';
} else {
    msgResult = 'dispari';
}

// DEBUG
console.log('Numero del Giocatore: ', userNumber);
console.log('Numero del Computer: ', pcNumber);
console.log('La somma dei due numeri: ', sumNumbers);
console.log('Il giocatore ha scelto: ', userEvenOdd);

// Stampo che ha vinto il Giocatore SE la somma è pari e il Giocatore ha scelto pari OPPURE la somma è dispari e il Giocatore ha scelto disppari
if (isEvenSum && userEvenOdd === 1 || !isEvenSum && userEvenOdd === 2) {
    alert(`Il risultato è ${msgResult}. Hai vinto!`);
// ALTRIMENTI stampo che il Giocatore non ha perso
} else {
    alert(`Il risultato è ${msgResult}. Hai perso!`);    
}


