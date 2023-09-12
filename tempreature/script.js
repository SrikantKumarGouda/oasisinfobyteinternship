const displayScreen = document.getElementById("display-screen");
let currentInput = "";

function updateDisplay() {
    displayScreen.value = currentInput;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "Error") {
            currentInput = "";
        }
        if (button.id === "delete") {
            currentInput = currentInput.slice(0, -1);
        } else if (button.id === "clear") {
            currentInput = "";
        } else if (button.id === "equals") {
            try {
                currentInput = eval(currentInput);
                if (isNaN(currentInput) || !isFinite(currentInput)) {
                    currentInput = "Error";
                }
            } catch (error) {
                currentInput = "Error";
            }
        } else {
            currentInput += button.innerText;
        }
        updateDisplay();
    });
});

updateDisplay();