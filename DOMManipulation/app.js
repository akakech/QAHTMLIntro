"use strict";

const btn = document.getElementById("btn");
btn.onclick = createElement;

const switchBtn = document.getElementById("btn");
switchBtn.onclick = change;



function createElement() {

    let heading = document.createElement('h1');
    let headPlaceHolder = document.getElementById("firstH1");
    let theHead = heading.textContent = "Counter Exercise!";
    headPlaceHolder.innerHTML = theHead;

}

// function change()
// {
//     timeOut = setTimeout(doChange,1000);
// }

// function doChange(){
//     let elem = document.getElementById("firstH1");
//     if (elem.value == "Reveal Heading") elem.value = "Hide Heading";
//     else elem.value = "Close Curtain";
// }

const counter = document.querySelector("#counter");
const minus5 = document.querySelector("#minusFive");
minus5.addEventListener("click", minusFive);


function minusFive() {
    const current = counter.value;
    console.log(`Current: ${current}`);

    const newValue = Number.parseInt(current) - 5;
    console.log(`New: ${newValue}`);
    counter.value = newValue;
};

const minus1 = document.querySelector("#minusOne");
minus1.addEventListener("click", minusOne);

function minusOne() {
    const current = counter.value;
    console.log(`Current: ${current}`);

    const newValue = Number.parseInt(current) - 1;
    console.log(`New: ${newValue}`);
    counter.value = newValue;
};

const resetIt = document.querySelector("#reset");
resetIt.addEventListener("click", reset);

function reset() {
    const current = counter.value;
    console.log(`Current: ${current}`);

    const newValue = 0;
    console.log(`New: ${newValue}`);
    counter.value = newValue;
};

const plus1 = document.querySelector("#plusOne");
plus1.addEventListener("click", plusOne);

function plusOne() {
    const current = counter.value;
    console.log(`Current: ${current}`);

    const newValue = Number.parseInt(current) + 1;
    console.log(`New: ${newValue}`);
    counter.value = newValue;
};

const plus5 = document.querySelector("#plusFive");
plus5.addEventListener("click", plusFive);

function plusFive() {
    const current = counter.value;
    console.log(`Current: ${current}`);

    const newValue = Number.parseInt(current) + 5;
    console.log(`New: ${newValue}`);
    counter.value = newValue;
};
