jQuery(document).ready(function () {
    $(document).on("click", ".deleteRow", function(){
        $(this).parents("tr").remove();
    });
});