jQuery(document).ready(function () {
    var $uname = $('#username');
    var $password = $("#password");
    //Hide hints
    $("#login form span").hide();

    function isInputValid() {
        return $password.val().length > 8 && $uname.val().length > 4;
    }

    function passwordEvent() {
        //Find out if password is valid  
        if (isInputValid()) {
            //Hide hint if valid
            $password.next().hide("slow");
        } else {
            //else show hint
            $password.next().show("slow");
        }
    }

    function enableSubmitEvent() {

        $("#login #submit").prop("disabled", !isInputValid());

    }
    //When event happens on password input
    $password.focus(passwordEvent).keyup(passwordEvent).keyup(enableSubmitEvent);
    enableSubmitEvent();
});