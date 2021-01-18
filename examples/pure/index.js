window.addEventListener("DOMContentLoaded", function() {
    var passwordFields = document.querySelectorAll("input[type='password']");
    var inputType = isIOSGreaterThanEqual14() ? "text" : "password";

    passwordFields.forEach(function(field) {
        field.setAttribute("type", inputType);

        if(inputType === "text") {
            field.classList.add("conceal")
            field.setAttribute("autocomplete", "off");
        }else {
            field.classList.remove("conceal");
        }
    });
})
