$(document).ready(function() {
	
	

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// var owl = $(".carousel");
	// owl.owlCarousel({
	// 	items : 3,
	// 	autoHeight : true
	// });
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function(){
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function(){
	// 	owl.trigger("owl.prev");
	// });


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback1").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail1.php",
			data: $("#callback1").serialize()
		}).done(function() {				
			window.location.href = "index2.html";
		});
		return false;
	});

	$("#callback2").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail2.php",
			data: $("#callback2").serialize()
		}).done(function() {
			window.location.href = "index2.html";
		});
		return false;
	});

	$("#callback3").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail3.php",
			data: $("#callback3").serialize()
		}).done(function() {
			window.location.href = "index2.html";
		});
		return false;
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	// Галерея

	$("a.gallery, a.iframe").fancybox();
	
	url = $("a.modalbox").attr('href').replace("for_spider","content2");
	$("a.modalbox").attr("href", url);	
	$("a.modalbox").fancybox({ 
		"frameWidth" : 400,
		"frameHeight" : 400
	});



});