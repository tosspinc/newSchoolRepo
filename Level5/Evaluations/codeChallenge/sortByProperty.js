//create a variable named people and set up array with name and age data.
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35},
    { name: "David", age: 28 }
]

//create constant variable called sortedByAge and setting sortByProperty which passes two components to it.
const sortedByAge = sortByProperty(people, 'age')

//creates a function called sortByProperty and passes in two components.
function sortByProperty(objects, propertyName) {
    //creating a copy of the array so I do not mutate original. This slices apart the sortedArray data.
    const sortedArray = objects.slice()

    //sorting the array and it has two components.
    sortedArray.sort((a, b) => {
        //if propertyName a is less than propertyName b
        if (a[propertyName] < b[propertyName]) {
        //this puts object a object in front of b object data if a is smaller than b.
        return -1
        // this says if a object is greater than b object then put a object after b object.
        } else if (a[propertyName] > b[propertyName]) {
            //if a object and b object are equal or same then sort.
            return 1
        } else {
            return 0
        }
    })
    //sends sortedArray object data to console.
    return sortedArray
}

console.log(sortedByAge)