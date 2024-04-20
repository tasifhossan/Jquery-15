// js



// jq
$(document).ready(function(){

$('.hovering').each(function(){
  $(this).cycleImages({
    cover: $(this).find('.cover'),
    gallery: $(this).find('.gallery'),
    interval: 1000,
  });
});
    

});