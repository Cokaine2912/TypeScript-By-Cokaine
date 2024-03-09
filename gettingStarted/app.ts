const button = document.querySelector("button")!;

const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement


const numResults: Array<number> = []
const textResults: string[] = []

type NumOrString = number | string
type Result = { val: number; timestamp: Date }

interface ResultObj { val: number; timestamp: Date; }

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2
    }
    return +num1 + +num2
}
function printResults(resultObj: Result) {
    console.log(resultObj.val)
}
button.addEventListener("click", () => {
    const sum = add(+num1.value, +num2.value)
    const string_sum = add(num1.value, num2.value)
    console.log(sum)
    console.log(string_sum)
    printResults({ val: sum as number, timestamp: new Date() })
    numResults.push(sum as number)
    textResults.push(string_sum as string)
    console.log(numResults, textResults)
    return sum
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => { resolve("It Worked !") }, 1000)
})
myPromise.then((result) => {
    console.log(result.split(" "))
}).catch(err => console.log(err))
