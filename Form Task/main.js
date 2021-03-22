function validateForm() {
    //do something 
}
$(function() {
    const checkRequired = (form, name) => {
        let value = form[name].value.trim();
        if (value)
            $(".error." + name).addClass("hidden");
        else $(".error." + name).removeClass("hidden").text(name + " is required");
    }
    const checkLength = (form, name, min, max) => {
        let value = form[name].value.trim();
        if (value && value.length < min)
            $(".error." + name).removeClass("hidden").text(name + " must be at least " + min + " characters");
    }
    const checkValidity = (form, name) => {
        let value = form[name].value.trim();
        if (value && !form[name].validity.valid)
            $(".error." + name).removeClass("hidden").text(name + " is invalid");

    }
    const validate = (e) => {
        let form = document.forms[0];
        checkRequired(form, "username");
        checkRequired(form, "email");
        checkRequired(form, "password");

        checkLength(form, "username", 8);
        checkValidity(form, "email");

        let password = form["password"].value;
        let password2 = form["password2"].value;
        if (password && !password2)
            $(".error.password2").removeClass("hidden").text("please confirm password");
        else if (password && password2 && password != password2)
            $(".error.password2").removeClass("hidden").text("password does not match");
        else $(".error.password2").addClass("hidden");
    }
    $("button").click(validate);

    $("input.password").focusout(function() {
        $("input.password").addClass("mask");
    });
    $("input.password").keyup(function(o, n) {
        console.log(o, n);
    });
    $(".reveal")
        .click(() => {
            $(".reveal").toggleClass("fa-eye fa-eye-slash");
            $("input.password").toggleClass("mask");
        });
})