const container = document.querySelector("#container")
let userInput = parseInt(prompt("Pleas Select The Size Of the Canvas"))
console.log(typeof userInput)
for(let i = 0; i < userInput; i++){
    let div = document.createElement("div")
    div.classList.add("pixelDivs")
    container.appendChild(div)

    div.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "red";
    })
}

