/* Messaggio di informazione per l' utente */
alert(`Questo sito ti aiuterà a generare la TUA password personale sconsigliata.
    Premi Ok per continuare`);

/* Numero finale della password genarata */
let last_number = "21"

//Chiedi all'utente il suo nome

const user_name = prompt("Ho bisogno di sapere il tuo nome")
console.log("Nome: " + user_name)

//Chiedi all'utente il suo cognome

const user_surname = prompt("Ho bisogno di sapere il tuo Cognome")
console.log("Cognome: " + user_surname)

//Chiedi all'utente il suo colore preferito

const user_color = prompt("Ho bisogno di sapere il tuo colore preferito")
console.log("Colore preferito: " + user_color)

//Mostra risultato combinazione
document.getElementById("password_generata").innerHTML = "La tua password sconsigliata è: andrea" + user_name + user_surname + user_color + last_number