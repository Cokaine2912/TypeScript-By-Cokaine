const button = document.querySelector("button");

const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement

function add(num1 : number , num2 : number) {
    return num1 + num2
}

button?.addEventListener("click",()=>{
    const sum = add(+num1.value , +num2.value)
    const ans = document.getElementById("ans-div")
    ans?.innerHTML = `<h4>${ans}</h4>`
    return sum
})

