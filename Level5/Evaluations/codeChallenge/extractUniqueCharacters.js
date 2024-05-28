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
//declares fruits as an array.
const fruits = ["apple", "banana", "cherry"]
//joins all three fruit names into one string.
let combineWords = fruits.join("")
//splits apart the combineWords string
let fruitsArray = combineWords.split("")
//removes duplicate letters.
let indFruitsLetters = [...new Set(fruitsArray)]
//sorts the indFruitsLetters string alphabetically
indFruitsLetters.sort()
//displays to console
console.log(indFruitsLetters)