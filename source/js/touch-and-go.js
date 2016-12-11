;(function(){
    if (typeof jQuery === 'undefined') return;

    var $ = jQuery;
    $().ready(function(){
        $('[data-input-touch]').each(function(){
            $(this).attr('type', $(this).data('input-touch'));
        });
    });
})();