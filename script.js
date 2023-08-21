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
    } else
	{
        var lastChars = inputValue.slice(-4);

        if (lastChars === '2000' || lastChars === '2099')
        {
          errorMessage.innerHTML = "";
          inputBox.style.borderColor = "";
        }
        else
        {
			var lastThreeDigits = inputValue.slice(-3);
			if (lastThreeDigits === '200' || lastThreeDigits === '209')
			{
				errorMessage.innerHTML = "";
				inputBox.style.borderColor = "";
			}
			else if (/^\d{4}$/.test(lastChars))
			{
				errorMessage.innerHTML = "Error: Values with more than 3 digits are not allowed.";
				inputBox.style.borderColor = "red";
				inputBox.value = inputValue.slice(0, -1);
			}
			else
			{
				errorMessage.innerHTML = "";
				inputBox.style.borderColor = "";
			}
        }
    }
}
