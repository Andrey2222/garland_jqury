
$(document).ready(function(){
	var diraction, blink, run;
	var step = 0;
	$(".flash").click(function(){
		blink = setInterval(function(){
			var opacity = $(".fire_blue")
			var opacity_hidden = +opacity.css("opacity");
			if (opacity_hidden == 0.2){
				diraction = "up";
			}else if (opacity_hidden == 1){
				diraction = "down";
			}
			if (diraction == "up"){
				opacity.css("opacity", opacity_hidden + 0.2);
			}else{
				opacity.css("opacity", opacity_hidden - 0.2);
			}
		}, 500);
	});	

	$(".run").click(function(){
			run = setInterval(function(){	
			var orange = $(".orange");
			var yellow = $(".yellow");
			var green = $(".green");
			var red = $(".red");
				red.removeClass("red");
				red.addClass("yellow");
				yellow.removeClass("yellow");
				yellow.addClass("green");
				green.removeClass("green");
				green.addClass("orange");
				orange.removeClass("orange");
				orange.addClass("red");
			
		}, 1000);
	});

	$(".one_color").click(function(){
			clearInterval(run);
			setInterval(function(){	
				var orange = $(".orange");
				var yellow = $(".yellow");
				var green = $(".green");
			if (step == 1){
				orange.addClass("inActive")
				yellow.addClass("inActive")
				green.addClass("inActive")
			}else if (step == 2){
				var yellow = $(".yellow");
				yellow.removeClass("inActive")
			}else if (step == 3){
				var green = $(".green");
				green.removeClass("inActive")
			}else if (step == 4 ){
				var orange = $(".orange");
				orange.removeClass("inActive")
			}else if (step == 5){
				step = 0;
			}	
			step++;
		}, 1000);
	});
});
	
