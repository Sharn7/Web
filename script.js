function validateInput() {
    var inputBox = document.getElementById("inputBox");
    var errorMessage = document.getElementById("errorMessage");
    var inputValue = inputBox.value;

    var validCharacters = /^[a-zA-Z0-9 %]+$/;
    var pattern = /^[ %]/;

    if(inputValue == "")
    {
        //skip
    }
    else if (pattern.test(inputValue)) {
        errorMessage.innerHTML = "Error: Input should not start with space or percentage";
        inputBox.style.borderColor = "red";
        inputBox.value = inputValue.slice(0, -1);
    } else if (inputValue.length > 256) {
        errorMessage.innerHTML = "Error: Input cannot be longer than 256 characters.";
        inputBox.style.borderColor = "red";
        inputBox.value = inputValue.slice(0, -1);
    } else if (!validCharacters.test(inputValue)) {
        errorMessage.innerHTML = "Error: Only A-Z, a-z, 0-9, space, and % are allowed.";
        inputBox.style.borderColor = "red";
        inputBox.value = inputValue.slice(0, -1);
    } else {
        var digitCount = inputValue.replace(/[^0-9]/g, '').length;

        if (digitCount > 3) {
            if (inputValue === "2000" || inputValue === "2099") {
                errorMessage.innerHTML = "";
                inputBox.style.borderColor = "";
            } else {
                var replacedValue = inputValue.replace(/[^0-9]/g, '');

                if (replacedValue === '2000' || replacedValue === '2099') {
                    errorMessage.innerHTML = "";
                    inputBox.style.borderColor = "";
                } else {
                    errorMessage.innerHTML = "Error: Input contains more than 3 digits.";
                    inputBox.style.borderColor = "red";
                    inputBox.value = inputValue.slice(0, -1);
                }
            }
        } else {
            errorMessage.innerHTML = "";
            inputBox.style.borderColor = "";
        }
    }
}
