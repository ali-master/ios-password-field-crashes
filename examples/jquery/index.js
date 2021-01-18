$(window).load(function() {
    var passwordFields = $("input[type='password']");
    var inputType = isIOSGreaterThanEqual14() ? "text" : "password";

    passwordFields.forEach(function(index, field) {
        $(field).attr("type", inputType);
        if(inputType === "text") {
            $(field).addClass("conceal");
            $(field).attr("autocomplete", "off");
        }else {
            $(field).removeClass("conceal");
        }
    });
});
