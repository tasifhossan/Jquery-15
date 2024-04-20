
// jq
$(document).ready(function(){

	// main
$('.counter1').counterUp({
    delay: 10,
    time: 1500
    });

    $('.counter2').countdown360({
    	radius      : 60,
	    seconds     : 50,
	    fontColor   :'#FFFFFF',
	    onComplete  :function () { console.log('done') }

    });

    $('.svg-test').svgTimer({
    	time: 60,
    });

    $('.counter3').countUp();

    $('.counter4').numScroll({
    	number: 123456,
    	time: 2000,
    });



});