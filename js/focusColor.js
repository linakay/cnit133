// <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
$(document).ready(function(){
    $('input:text').focus(function() {
        $(this).css({'background-color' : '#D9EA9A'});
    });
    $('input:text').focusout(function() {
        $(this).css({'background-color' : '#FFFFFF'});
    });