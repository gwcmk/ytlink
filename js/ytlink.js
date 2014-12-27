if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
	
	$(".href").click(function() { 
		var url = $(".href").attr("href");
		// urls must be from YouTube
		// regex taken from here - http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex
		if(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(url)){	
			//only show one video at a time
			if($(".ytlink-container")[0]){
				$(".ytlink-container").remove();
			}
			var idt = getIDAndTime(url);
			var id = idt[1];
			var time = 0;

			if(typeof idt[2] != 'undefined'){
				var hours = idt[2].match(/(\d{1,2})(?=h)/);
				var minutes = idt[2].match(/(\d{1,2})(?=m)/);
				var seconds = Number(idt[2].match(/(\d{1,2})(?=s)/)[0]);

				//TODO: find more elegant solution for this problem
				hours = (hours === null) ? [0] : Number(hours[0]);
				minutes = (minutes === null) ? [0] : Number(minutes[0]);

				time = hours*3600 + minutes*60 + seconds;
			}
			// console.log("hours = " + hours);
			// console.log("mins = " + minutes);
			// console.log("secs = " + Number(seconds));
			// console.log("time = " + time);

			$(".href").after('<div class="ytlink-container"><iframe src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1&start=' + time +'" width="256" height="144" frameborder="0" class="video" allowfullscreen></iframe></div>');
			return false;
		}
	});

	var ht = $(document).height();
	console.log(ht);

	$(window).on("scroll", function(){
		var st = $(window).scrollTop();
		// console.log("st = " + st);
		// console.log("ht = " + ht);
		if(st < ht){
			$(".ytlink-container").animate({bottom: -st}, 1);
		}

	});

}

//returns array with url, ID, and timestamp of video
function getIDAndTime(url){
	var regExp = /^(?:https?\:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v\=))([\w-]{10,12})(?:[\&\?\#].*?)*?(?:[\&\?\#]t=([\dhm]+s))?$/;
	var match = url.match(regExp);
	return match;
}



