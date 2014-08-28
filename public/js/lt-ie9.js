$().ready(function(){
    $('[class*="column"] + [class*="column"]:last-child').addClass('last-child');
    $('.button-group .button:last-child, .button-group button:last-child').addClass('last-child');
    $('table tr:nth-of-type(even)').addClass('even');
});