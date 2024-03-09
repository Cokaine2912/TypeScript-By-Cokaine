"use strict";
const button = document.querySelector("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResults(resultObj) {
    console.log(resultObj.val);
}
button.addEventListener("click", () => {
    const sum = add(+num1.value, +num2.value);
    const string_sum = add(num1.value, num2.value);
    console.log(sum);
    console.log(string_sum);
    printResults({ val: sum, timestamp: new Date() });
    numResults.push(sum);
    textResults.push(string_sum);
    console.log(numResults, textResults);
    return sum;
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("It Worked !"); }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
}).catch(err => console.log(err));
