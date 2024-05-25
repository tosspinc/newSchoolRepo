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
    //convert set to an array and returning it.
    return Array.from(uniqueCharsSet)
}

console.log(uniqueChars)

//output should be: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']