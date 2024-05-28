const words = ["apple", "banana", "cherry"]
const uniqueChars = extractUniqueCharacters(words)


function extractUniqueCharacters(strings) {
    //Initialize variable uniqueCharsSet and setting to a class called Set().
    const uniqueCharsSet = new Set()

    //Iterate over each string in the input array.
    for (const str of strings) {
        //iterate over each character in current string.
        for (const char of str) {
            //add character to Set
            uniqueCharsSet.add(char)
        }
    }
    //converts uniqueCharsSet to an array and returns it.
    return Array.from(uniqueCharsSet)
}

console.log(uniqueChars)

//output should be: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

//another way is as follows and puts letter in alphabetical order:

const fruits = ["apple", "banana", "cherry"]        //declares fruits as an array.
let combineWords = fruits.join("")                  //joins all three fruit names into one string.
let fruitsArray = combineWords.split("")            //splits apart the combineWords string
let indFruitsLetters = [...new Set(fruitsArray)]    //removes duplicate letters.
indFruitsLetters.sort()                             //sorts the indFruitsLetters string alphabetically
console.log(indFruitsLetters)                       //displays to console