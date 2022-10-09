
const personsInRomm = 5;
const rhyme = "Your'e Out";
const removedPersons = [];
const wordCount = rhyme.split(/\S+/).length - 1
let killCountter = wordCount
let noOfPersons = Array.from({ length: personsInRomm }, (_, i) => i + 1)
while (noOfPersons.length > 1) {
  for (let index = 0; index < noOfPersons.length; index++) {
    killCountter--;
    if (killCountter === 0) {
      // Moving killed person to another array in order to delete it from existing
      removedPersons.push(noOfPersons[index]);
      killCountter = wordCount;
    }
  }
  // Filtering persons array after each Iteration
  noOfPersons = noOfPersons.filter(person => {
    return !removedPersons.includes(person)
  })
}
console.log('Surviving Postion is', noOfPersons[0])

