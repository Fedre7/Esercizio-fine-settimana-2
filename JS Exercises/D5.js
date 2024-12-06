/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log("Esercizio 1")
console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2")
console.log(pets.sort())
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3")
console.log(pets.reverse())
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4")
let firstPet = pets.shift();
pets.push(firstPet);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


function addPatente() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = Math.random()
  }
}
addPatente()
console.log("Esercizio 5")
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

function addMacchina(brand, model, color, trims, licensePlate) {
  cars.push({
    brand: brand,
    model: model,
    color: color,
    trims: trims,
    licensePlate: licensePlate,
  })

}

addMacchina('Fiat', '500', 'white', ['prova1', 'prova2'])
console.log("Esercizio 6")
addPatente()
console.log(cars)



function rimuoviTrim() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop()
  }
  return cars
}
console.log("esercizio 6 parte 2")
console.log(rimuoviTrim())


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
function salvaprimoTrim() {
  for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0])
  }
}
salvaprimoTrim()
console.log("Esercizio 7")
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function primalettera() { 
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].color[0] === 'b') {
      console.log('Fizz')
    } else {
      console.log('Buzz')
    }
  }
}

console.log("Esercizio 8")
primalettera()


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
function stampanumeri() {
  while (numericArray[i] !== 32) {
    console.log(numericArray[i])
    i++
}
console.log(numericArray[i]);
}

console.log("Esercizio 9")
stampanumeri()



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
