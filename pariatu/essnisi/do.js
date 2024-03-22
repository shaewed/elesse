const userInput = $('#d').val();
const parsedValue = parseInt(userInput, 10);

if (!isNaN(parsedValue)) {
    console.log(`Parsed value: ${parsedValue}`);
} else {
    console.log("Invalid input. Please enter a valid integer.");
}
