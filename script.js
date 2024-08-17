const myDiv = document.getElementById("myDiv");
let move = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", Event => {
    if (Event.key.startsWith("Arrow")) {
        switch (Event.key) {
            case "ArrowUp":
                y -= move;
                myDiv.style.backgroundColor = "tomato"
                myDiv.textContent = "😲"
                break;
            case "ArrowDown":
                y += move;
                myDiv.style.backgroundColor = "tomato"
                myDiv.textContent = "😲"
                break;
            case "ArrowRight":
                x += move;
                myDiv.style.backgroundColor = "tomato"
                myDiv.textContent = "😲"
                break;
            case "ArrowLeft":
                x -= move;
                myDiv.style.backgroundColor = "tomato"
                myDiv.textContent = "😲"
                break;
        }
        myDiv.style.top = `${y}px`;
        myDiv.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    myDiv.style.backgroundColor = "Lightgreen"
    myDiv.textContent = "😊"
})