/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 10;
const num2 = 20;
if (num2 > num1) {
  console.log("il numero più grande è il numero :" + num2);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ident = 4;
if (ident !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const perfectDiv = 25;
if (perfectDiv % 5 === 0) {
  console.log("perfettamente divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 3;
const number2 = 5;
if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {
  console.log("Uno dei numeri è 8 o la loro somma/differenza è uguale a 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
// Costo fisso della spedizione
const costoSpedizione = 10;

if (totalShoppingCart > 50) {
  console.log("Totale da addebitare: " + totalShoppingCart + " (Spedizione Gratuita)");
} else {
  const totaleDaAddebitare = totalShoppingCart + costoSpedizione;

  console.log("Totale da addebitare: " + totaleDaAddebitare);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 60;
const costoSpedizione2 = 10;
const scontoProdotto = 0.2;
const scontoTotale = totalShoppingCart2 * (1 - scontoProdotto);
if (scontoTotale > 50) {
  console.log("Totale da addebitare: " + scontoTotale + " (Spedizione Gratuita)");
} else {
  const totaleDaAddebitare2 = scontoTotale + costoSpedizione2;
  console.log("Totale da addebitare: " + totaleDaAddebitare2);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Definizione delle tre variabili con valori numerici
let numero1 = 25;
let numero2 = 15;
let numero3 = 30;
if (numero1 >= numero2) {
  console.log(true);

  if (numero1 > numero3) {
    console.log(true);
  }
  if (numero2 > numero1) {
    console.log(true);
  }
  if (numero2 > numero3) {
    console.log(true);
  }
  if (numero3 > numero1) {
    console.log(true);
  }
  if (numero3 > numero2) {
    console.log(true);
  }
  if ((numero3 > numero1, numero2 && numero2 < numero1)) {
    console.log(true);
  }
  console.log("Numeri ordinati in ordine decrescente:", numero3, numero1, numero2);
}

//esercizio 8
//  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").

/* SCRIVI QUI LA TUA RISPOSTA */
const verif = 43;
if (typeof verif === "number") {
  console.log("il valore è un numero");
} else {
  console.log("il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const verif2 = 40;
if (verif2 % 2 === 0) {
  console.log("il valore è pari");
} else {
  console.log("il valore non è dispari");
}

//ESERCIZIO 10
//Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
/*let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Creare un array vuoto
let numeri = [];
numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[numeri.length - 1] = 100;
console.log(numeri);
