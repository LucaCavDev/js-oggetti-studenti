
// ESERCIZIO 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
//----------------------------------------------------
var studente = {
  "nome": "Mel",
  "cognome": "Gibson",
  "eta": 64
};
//stampa array generico
console.log(studente);
// con il for in si stampano le key(proprietà) ed il valore corrispondente studente[key]
for (var key in studente) {
  console.log(key + " :*" + studente[key] + "*");
}
//----------------------------------------------------------

//ESERCIZIO 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//----------------------------------------------------

var listaStudenti = [
  {
    "nome": "Sylvester",
    "cognome": "Stallone",
    "eta": 74
  },
  {
    "nome": "Arnold",
    "cognome": "Schwarzenegger",
    "eta": 73
  },
  {
    "nome": "Jean-Claude",
    "cognome": "Van Damme",
    "eta": 60
  }
];

console.log(listaStudenti);

for (var i = 0; i < listaStudenti.length; i++) {
  console.log("Nome: *" + listaStudenti[i].nome + "* " + "Cognome: *" + listaStudenti[i].cognome + "*");
}


//----------------------------------------------------


//ESERCIZIO 3
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Possiamo fare anche sullo stesso file o comunque stessa cartella, se ci pensate può essere una sequenza sullo stesso ex.
// Anche nel punto 2 gli oggetti studenti che stasnno nell’array hanno almeno le 3 proprietà come in quello iniziale.

// var userName = prompt("Inserisci il tuo nome");
// var userSurname = prompt("Inserisci il tuo cognome");
// var userEta = parseInt(prompt("Inserisci la tua età"));
//
//
// function userStudente(name, surname, age) {
//   this.nome = name;
//   this.cognome = surname;
//   this.eta = age;
// }
//
// var nuovoStudente = new userStudente(userName, userSurname, userEta);
//
// console.log("Ciao " + userName + ", benvenuto in questa splendida classe");
//
// listaStudenti.push(nuovoStudente);
//
// for (var i = 0; i < listaStudenti.length; i++) {
//   console.log("Nome: *" + listaStudenti[i].nome + "* " + "Cognome: *" + listaStudenti[i].cognome + "*");
// }


//ESERECIZIO 3 piu immediato senza uso funzione


var userName = prompt("Inserisci il tuo nome");
var userSurname = prompt("Inserisci il tuo cognome");
var userEta = parseInt(prompt("Inserisci la tua età"));


// var nuovoStudente = {
//   "nome" : userName,
//   "cognome" : userSurname,
//   "eta" : userEta,
// };
//
//
//
// console.log("Ciao " + userName + ", benvenuto in questa splendida classe");

// listaStudenti.push(nuovoStudente);

listaStudenti.push({
    "nome" : userName,
    "cognome" : userSurname,
    "eta" : userEta,
});


for (var i = 0; i < listaStudenti.length; i++) {
  console.log("Nome: *" + listaStudenti[i].nome + "* " + "Cognome: *" + listaStudenti[i].cognome + "*");
}
