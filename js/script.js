// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. FATTO
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. FATTO
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

var km = prompt('Quanti km vuoi percorrere?');
// console.log(km);
var age = prompt('Quanti anni hai?');
// console.log(age);

var pricePerKm = km * 0.21;
// console.log(pricePerKm);

if (age < 18){
    pricePerKm = pricePerKm - pricePerKm * 20 / 100;
} else if (age >= 65){
    pricePerKm = pricePerKm - pricePerKm * 40 / 100;
}
console.log(pricePerKm);

console.log('ciao');