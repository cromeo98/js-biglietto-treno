// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. FATTO
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. FATTO
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// SOLUTION 1
// alert('Ciao! rispondi alle seguenti domande per sapere il prezzo del tuo biglietto! Buon viaggio!')

// var km = prompt('Quanti km vuoi percorrere?');
// // console.log(km);
// var age = prompt('Quanti anni hai?');
// // console.log(age);

// var pricePerKm = km * 0.21;

// console.log(pricePerKm);

// if (age < 18){
//     pricePerKm = pricePerKm - pricePerKm * 20 / 100;
//     document.getElementById("row-young-discount").style.backgroundColor = "yellow";
// } else if (age >= 65){
//     pricePerKm = pricePerKm - pricePerKm * 40 / 100;
//     document.getElementById("row-old-discount").style.backgroundColor = "yellow";
// } else{
//     document.getElementById("row-no-discount").style.backgroundColor = "yellow";
// }

// console.log(pricePerKm);

// document.getElementById('price-per-km').innerHTML = 'Il prezzo del tuo biglietto è: ' + pricePerKm.toFixed(2) + ' €';

// document.getElementById('km-scelti').innerHTML = 'Hai scelto di percorrere: ' + km + ' km';

// document.getElementById('eta').innerHTML = 'Hai ' + age + ' anni';

// document.getElementById('text').innerHTML = 'Grazie per averci comunicato i tuoi dati, qui sotto puoi verificare i dati inseriti e consultare il prezzo del biglietto.';

// SOLUTION 2
alert('Ciao! rispondi alle seguenti domande per sapere il prezzo del tuo biglietto! Buon viaggio!')

var km = prompt('Quanti km vuoi percorrere?');
// console.log(km);
var age = prompt('Quanti anni hai?');
// console.log(age);
var pricePerKm = 0.21;
// console.log(pricePerKm);

if (age < 18){
    pricePerKm = pricePerKm - pricePerKm * 20 / 100;
    document.getElementById("row-young-discount").style.backgroundColor = "yellow";
} else if (age >= 65){
    pricePerKm = pricePerKm - pricePerKm * 40 / 100;
    document.getElementById("row-old-discount").style.backgroundColor = "yellow";
} else{
    document.getElementById("row-no-discount").style.backgroundColor = "yellow";
}

var userPrice = pricePerKm * km;
// console.log(userPrice);

document.getElementById('user-ticket').innerHTML = 'Il prezzo del tuo biglietto è: ' + userPrice.toFixed(2) + ' €';

document.getElementById('km-scelti').innerHTML = 'Hai scelto di percorrere: ' + km + ' km';

document.getElementById('eta').innerHTML = 'Hai ' + age + ' anni';

document.getElementById('text').innerHTML = 'Grazie per averci comunicato i tuoi dati, qui sotto puoi verificare i dati inseriti e consultare il prezzo del biglietto.';