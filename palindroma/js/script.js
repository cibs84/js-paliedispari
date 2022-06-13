// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola per sapere se è palindroma');


// Creo una funzione per capire se la parola inserita è palindroma. L'argomento da inserire è la parola su cui si vuole fare il controllo
function palindromeCheck(inputWord) {
    // Creo una variabile dove ricomporre la parole al contrario
    let backwardsWord = '';
    // Creo una variabile per salvare l'esito del controllo 'la parola è palindroma? true or false'
    let isPalindromeWord = false;

    // Scorro tutte le lettere della parola inserita dall'ultima alla prima
    // Per ogni lettera:
    for (let i = inputWord.length - 1; i >= 0; i--) {
        const thisWord = inputWord[i];
        // La concateno in una variabile per creare la parola al contrario di come è stata inserita dall'utente
        backwardsWord += thisWord;
    }

    // SE la parola inserita dall'utente è uguale a quella ricomposta al contrario ALLORA la parola è palindroma ALTRIMENTI non lo è
    if (backwardsWord === inputWord) {
        isPalindromeWord = true;
    }

    // L'output della funzione sarà il valore della variabile dello stato del controllo -> true o false
    return isPalindromeWord;
}


// SE la funzione invocata avrà come valore di ritorno true ALLORA stampo che la parola inserita è palindroma ALTRIMENTI stampo che la parola inserita non è palindroma
if (palindromeCheck(userWord) === true) {
    alert('La parola inserita è palindroma!');
} else {
    alert('La parola inserita non è palindroma!');    
}

