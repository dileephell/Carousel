$(function(){
	reasetsliderpos();
	slider();
});
function reasetsliderpos(){
	var winW=$(window).width();
	var left=(winW/2)-600;
	$('img#homeslidermain_img').css({'left':left});
	var dd=left+20;
	
}

function slider(){
	changeimage();
}
function changeimage(){
	var a=["1.png","2.png","3.png","4.png","5.png","6.png"];
	
	setTimeout( function(){
			 var left=$('img#homeslidermain_img').css('left');
			 var number = 1 + Math.floor(Math.random() * 6);
			 $('img#homeslidermain_img').animate({left:"-1200px"},function(){
					$('img#homeslidermain_img').attr('src','images/slider/home/'+a[number-1]);
					var winW=$(window).width();
					$('img#homeslidermain_img').css({'left':winW});
					$('img#homeslidermain_img').animate({left:left});
					//changedesc(number);
					//alert(number);
			 });
              changeimage();
    }, 10000);
}
