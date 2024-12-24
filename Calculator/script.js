let history = [];

// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to add the result to history
function addToHistory(result) {
    history.push(result);
    updateHistoryDisplay();
}

// Function to update the history display
function updateHistoryDisplay() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = ''; // Clear the current history display
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item; // Add each history item to the list
        historyList.appendChild(li);
    });
}

// Keyboard support for calculator
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key); // Append number or operator to display
    } else if (key === 'Enter') {
        calculateResult(); // Calculate result on Enter key
    } else if (key === 'Backspace') {
        clearDisplay(); // Clear display on Backspace key
    } else if (key === 'c' || key === 'C') {
        clearDisplay(); // Clear display on 'C' key
    }
});