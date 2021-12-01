// Creating a Darth Vader object and logging it.
let darthVader = {
    allegiance:"Empire",
    weapon:"lightsabre",
    sith:true
};
console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

let myArray = ["hello", "everyone"];


function printLength(array){
    console.log(`Array length is ${array.length}`);
};

printLength(myArray);

function addThreeElements(el1, el2, el3, array){
    array.push(el1)
    array.push(el2)
    array.push(el3)
};

addThreeElements("my", "name", "is", myArray);

printLength(myArray);

function removeAnElement(array){
    array.shift()
}

removeAnElement(myArray);

function printArray(array){
    for(i=0; i < array.length; i++){
        console.log(array[i]);
    }
}

printArray(myArray);