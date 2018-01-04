// $(document).ready(function(){
// 	// var colorify_buttons = document.getElementsByClassName("add");
// 	// for (var i = 0; i < colorify_buttons.length; i++) {
// 	// 	colorify_buttons[i].addEventListener("click",function(){
// 	// 		var btns = document.getElementsByClassName("btn");
// 	// 		for (var i = 0; i <	btns.length; i++) {
// 	// 				btns[i].classList.add("red");
// 	// 		}
// 	// 	});
// 	// }
// 	setInterval(function(){
// 		var btns = $(".btn")
// 		var btn_width = +btns.css("width").split("px")[0];
// 			btns.css("width", +btn_width + 10 + "px")
// 	}, 500);


// 	// $(".add").click(function(){
// 	// 		var btns = $(".btn")
// 	// 		btns.toggleClass("red");
// 	// 	// if ($(".btn").first().text() == "Hello"){
// 	// 	// 	$(".btn").text("Red hello");
// 	// 	// }else {
// 	// 	// 	$(".btn").text(" hello");
// 	// 	// }
// 	// 		var text = $(".btns").first().text() == "Hello" ? "Red Hello" : "Hello";
// 	// 		btns.text(text);
// 	// 		var btn_width = +btns.css("width").split("px")[0];
// 	// 		btns.css("width", +btn_width + 10 + "px")
// 	// 	})
//  });


// $(document).ready(function(){
// 	setInterval(function(){
// 		var circle = $(".circle")
// 		var circle_width = +circle.css("width").split("px")[0];
// 		var circle_height = +circle.css("height").split("px")[0];
// 		circle.css({
// 			"width": circle_width + 10 + "px",
// 			"height": circle_height + 10 + "px"
// 		});
// 	}, 500);
// });
$(document).ready(function(){
	var diraction, blink;
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
		clearInterval(blink);
		var opacity = $(".fire_blue");
		opacity.css("opacity", "");
			var red = $(".fire_blue.red")
			red.removeClass("red");
			red.addClass("yellow");
			var red_yellow_remove = setInterval(function(){
				red.removeClass("yellow");
				red.addClass("green");
				var red_green_remove = setInterval(function(){
					red.removeClass("green");
					red.addClass("orange");
				}, 2000);
			}, 2000);
			var yellow = $(".fire_blue.yellow")
			yellow.removeClass("yellow");
			yellow.addClass("green");
			var yellow_green_remove = setInterval(function(){
				yellow.removeClass("green");
				yellow.addClass("orange");
				var yellow_orange_remove = setInterval(function(){
					yellow.removeClass("orange");
					yellow.addClass("red");
				}, 2000);
			}, 2000);
			var green = $(".fire_blue.green")
			green.removeClass("green");
			green.addClass("orange");
			var green_orange_remove = setInterval(function(){
				green.removeClass("orange");
				green.addClass("red");
				var green_red_remove = setInterval(function(){
					green.removeClass("red");
					green.addClass("yellow");
				}, 2000);
			}, 2000);
			var orange = $(".fire_blue.orange")
			orange.removeClass("orange");
			orange.addClass("red");
			var orange_red_remove = setInterval(function(){
				orange.removeClass("red");
				orange.addClass("yellow");
				var orange_yellow_remove = setInterval(function(){
					orange.removeClass("yellow");
					orange.addClass("green");
				}, 2000);
			}, 2000);
	});

	$(".one_color").click(function(){
		clearInterval(blink);
		var opacity = $(".fire_blue");
		opacity.css("opacity","1");
		var red = $(".fire_blue").not(".red");
		red.addClass("inActive");
			var orange_fire = setInterval(function(){	
				var orange = $(".orange");
				orange.removeClass("inActive")
				var yellow_fire = setInterval(function(){	
					var yellow = $(".yellow");
					yellow.removeClass("inActive")
					var green_fire = setInterval(function(){
						var green = $(".green");
						green.removeClass("inActive")
					},1000);
				},1000);
			},1000);
	});
});
	
