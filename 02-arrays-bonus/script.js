const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// SOLUZIONE IN COMMENTO PER NON CAMBIARE L'ORDINE 
// const reversedTeachers = teachers.reverse();

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []

 for(let i = 0 ; i<teachers.length ; i++){

  let name = teachers[i];

  if (name.length >= 5 ) {
    longNames.push(name)
  }
}

console.log(longNames)
// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice( 1 , 1 )
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio');
console.log(` l'indice di Fabio è ${isFabioPresent}`)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString)
