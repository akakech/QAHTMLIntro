"use strict"
function flowchart1(A) {
    console.log("---START---");
    while (A <= 200) {
        A++;
        console.log(A);
        

    }
    console.log("---END---");
}

// flowchart1(100);

function flowchart2(A) {
    console.log("---START---");
    while (A <= 200) {
        A++;
        if (A % 2 == 0) {
            console.log("-")
        } else {
            console.log("*")
        }

    }
    console.log("---END---");
}

// flowchart2(100);

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print10Times(numbers) {
    let array = numbers;
    let newArr = [];
    function iterate(theArray) {

        for (let i = 0; i < array.length; i++) {
            theArray.forEach(ii => newArr.push(ii));

            console.log(newArr.sort(function (a, b) {
                return a - b;
            }));

        }

    }
    iterate(array);

}

print10Times(numberArr);
 