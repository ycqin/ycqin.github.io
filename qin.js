$(document).ready(function() {
    $('p').hover(function() {
        $('p').css('font-size', '60px');
    },
    function(){
    	$('p').css('font-size', '50px');
    });
});