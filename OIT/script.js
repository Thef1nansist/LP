$(document).ready(function()
{
    $('.openButton').click(function() {
        if(!$('.openButton').hasClass('openDone'))
        {
            $('.openButton').addClass('openDone');
            $('navbar').css("top", "0px");
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('navbar').css("top", "-150px");
        }
    });