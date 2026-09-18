document.querySelectorAll('.phone-format').forEach(input => {
    input.addEventListener('input', function (e) {
        // Strip all non-digits
        let inputVal = e.target.value.replace(/\D/g, ''); 
        let formattedVal = '';

        if (inputVal.length > 0) {
            // Add the opening parenthesis
            formattedVal += '(' + inputVal.substring(0, 3);
        }
        if (inputVal.length >= 4) {
            // Add the closing parenthesis
            formattedVal += ')' + inputVal.substring(3, 6);
        }
        if (inputVal.length >= 7) {
            // Add the hyphen
            formattedVal += '-' + inputVal.substring(6, 10);
        } else if (inputVal.length > 3) {
            // Catch trailing numbers if the total length is under 7 digits
            formattedVal += inputVal.substring(6);
        }

        // Update the input field value with the formatted string
        e.target.value = formattedVal;
    });
});