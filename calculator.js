// calculator.js

// 1. Implement Arithmetic Functions:
// Each arithmetic operation (add, subtract, multiply, divide) should have its own function.

/**
 * Adds two numbers.
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} number1 - The first number (minuend).
 * @param {number} number2 - The second number (subtrahend).
 * @returns {number} The difference between the two numbers.
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Multiplies two numbers.
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Divides the first number by the second.
 * Handles division by zero by returning Infinity or NaN depending on input.
 * @param {number} number1 - The dividend.
 * @param {number} number2 - The divisor.
 * @returns {number} The quotient of the two numbers.
 */
function divide(number1, number2) {
    // Add a basic check for division by zero to prevent unexpected behavior
    if (number2 === 0) {
        // You might want to handle this more gracefully, e.g., display an error message
        // For now, it will return Infinity for positive numerator / 0, -Infinity for negative / 0, and NaN for 0/0
        console.warn("Division by zero attempted!");
    }
    return number1 / number2;
}

// Attach Event Listeners:
// For each operation button, add an event listener that calls the corresponding arithmetic function
// when clicked. Use the input values from the number fields as arguments for these functions.
// Display the result in the #calculation-result span.

document.addEventListener('DOMContentLoaded', function() {
    // Get references to input fields and result display span
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculationResultSpan = document.getElementById('calculation-result');

    // Helper function to safely parse numbers and provide default for empty inputs
    // 1. Ensure Input Validation: Convert input values to numbers using parseFloat() to ensure the calculations are correct.
    // Provide default values to handle empty inputs.
    const getNumericInputs = () => {
        const num1 = parseFloat(number1Input.value) || 0; // Default to 0 if input is empty or invalid
        const num2 = parseFloat(number2Input.value) || 0; // Default to 0 if input is empty or invalid
        return { num1, num2 };
    };

    // Event listener for the ADD button
    const addButton = document.getElementById('add');
    if (addButton) {
        addButton.addEventListener('click', function() {
            const { num1, num2 } = getNumericInputs();
            const result = add(num1, num2);
            calculationResultSpan.textContent = result;
        });
    }

    // Event listener for the SUBTRACT button
    const subtractButton = document.getElementById('subtract');
    if (subtractButton) {
        subtractButton.addEventListener('click', function() {
            const { num1, num2 } = getNumericInputs();
            const result = subtract(num1, num2);
            calculationResultSpan.textContent = result;
        });
    }

    // Event listener for the MULTIPLY button
    const multiplyButton = document.getElementById('multiply');
    if (multiplyButton) {
        multiplyButton.addEventListener('click', function() {
            const { num1, num2 } = getNumericInputs();
            const result = multiply(num1, num2);
            calculationResultSpan.textContent = result;
        });
    }

    // Event listener for the DIVIDE button
    const divideButton = document.getElementById('divide');
    if (divideButton) {
        divideButton.addEventListener('click', function() {
            const { num1, num2 } = getNumericInputs();
            const result = divide(num1, num2); // The divide function already has a basic check
            
            // Optional: More user-friendly division by zero message
            if (num2 === 0 && num1 !== 0) {
                 calculationResultSpan.textContent = "Error: Cannot divide by zero";
                 calculationResultSpan.style.color = 'red'; // Make error message red
            } else if (num2 === 0 && num1 === 0) {
                 calculationResultSpan.textContent = "Result: NaN (0/0)"; // Indeterminate form
                 calculationResultSpan.style.color = 'orange';
            }
            else {
                calculationResultSpan.textContent = result;
                calculationResultSpan.style.color = 'black'; // Reset color for valid results
            }
        });
    }
});

