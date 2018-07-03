jQuery(document).ready(function () {
    var $title = $('#task-title');

    function inputEvent() {
        return $title.val().length >= 2;
    }

    function enableSubmitEvent() {

        $("#task-submit").prop("disabled", !inputEvent());

    }
    $title.focus(inputEvent).keyup(inputEvent).keyup(enableSubmitEvent);
    enableSubmitEvent();
});

jQuery(document).ready(function () {
    var $title = $('#task-title');
    var $description = $('#task-desc');
    var $date = $('#date');

    jQuery('#task-submit').on('click', function () {
        $('.tabs .table tbody').append('<tr align="center"><th scope="row"></th><td>' + $title.val() + '</td><td><textarea>' + $description.val() + '</textarea></td><td>' + $date.val() + '</td><td><button class="deleteRow"><span class="glyphicon glyphicon-ok"> Done!</span></button></td></tr>');
        $('#task-title').val('');
        $('#task-desc').val('');
        $('#date').val('');
        $('.modal .loginmodal-container').modal('hide');
    });
});