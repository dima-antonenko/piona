// Accordion
$(document).ready(function() {
    $("#accordion").accordion({
	   autoHeight: true,
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
});

// Progress Bar
$(function() {
$(".meter > span").each(function() {
$(this)
	.data("origWidth", $(this).width())
	.width(0)
	.animate({
		width: $(this).data("origWidth")
	}, 1200);
});
});

// Alert Boxes
$(document).ready(function() {
// Closing notifications 
// this is the class that we will target
$(".hideit").click(function() {
//fades the notification out	
  $(this).fadeOut(600);});
});	

// Tooltips
$(document).ready(function(){

	/* Adding a colortip to any tag with a title attribute: */

	$('[data]').colorTip({color:'yellow'});

});

// Tabs
$(document).ready(function(){
$("#horizontal-tabs").tytabs({
  tabinit:"1",
  fadespeed:"fast"
  });
$("#horizontal-tabs.a").tytabs({
  tabinit:"1",
  prefixtabs:"taba",
  prefixcontent:"contenta",
  fadespeed:"fast"
  });
$("#horizontal-tabs.b").tytabs({
  tabinit:"1",
  prefixtabs:"tabb",
  prefixcontent:"contentb",
  fadespeed:"fast"
  });
$("#horizontal-tabs.c").tytabs({
  tabinit:"1",
  prefixtabs:"tabc",
  prefixcontent:"contentc",
  fadespeed:"fast"
  });

$("#vertical-tabs").tytabs({
  prefixtabs:"tabz",
  prefixcontent:"contentz"
  });
$("#vertical-tabs.a").tytabs({
  prefixtabs:"taba",
  prefixcontent:"contenta"
  });
$("#vertical-tabs.b").tytabs({
  prefixtabs:"tabb",
  prefixcontent:"contentb"
  });
$("#vertical-tabs.c").tytabs({
  prefixtabs:"tabc",
  prefixcontent:"contentc"
  });
});

// Toggle
$(document).ready(function () {
	
$('#toggle-view li').click(function () {

var text = $(this).children('div.panel');

if (text.is(':hidden')) {
	text.slideDown('200');
	$(this).children('span').html('-');		
} else {
	text.slideUp('200');
	$(this).children('span').html('+');		
}

});

});

// jQuery Prettyphoto Lightbox
$(document).ready(function(){
	$("area[rel^='prettyPhoto']").prettyPhoto();
	
	$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'pp_default',slideshow:4000, opacity: 0.50, deeplinking: false, /* default_width: 500,
default_height: 344,*/ autoplay_slideshow: false});
	/*$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});*/

	
});

