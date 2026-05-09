document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    
    window.appendToDisplay = function(value) {
        display.value += value;
    };
    
    window.clearDisplay = function() {
        display.value = '';
    };
    
    window.deleteLast = function() {
        display.value = display.value.slice(0, -1);
    };
    
    window.calculate = function() {
        try {
            // Replace 'x' with '*' for multiplication
            let expression = display.value.replace(/x/g, '*');
            let result = eval(expression);
            display.value = Math.round(result * 10000000000) / 10000000000; // Prevent floating point issues
        } catch (error) {
            display.value = 'Error';
            setTimeout(clearDisplay, 1500);
        }
    };
    
    // Keyboard support
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key >= '0' && key <= '9' || key === '.') {
            appendToDisplay(key);
        } else if (key === '+' || key === '-') {
            appendToDisplay(key);
        } else if (key === '*') {
            appendToDisplay('x');
        } else if (key === '/') {
            appendToDisplay('/');
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Escape' || key === 'Delete') {
            clearDisplay();
        } else if (key === 'Backspace') {
            deleteLast();
        }
    });
});