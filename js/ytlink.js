if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
	
	$(".href").click(function() { 
		var url = $(".href").attr("href");
		var id = extractVideoID(url);
		$(".href").after('<div class="ytlink-container"><iframe src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1' + '" width="256" height="144" frameborder="0" class="video" allowfullscreen></iframe></div>');
		return false;
	});

	var ht = $(document).height();
	//document.body.scrollHeight - (document.body.clientHeight/2);
	console.log(ht);

	$(window).on("scroll", function(){
		var st = $(window).scrollTop();
		console.log("st = " + st);
		console.log("ht = " + ht);
		if(st < ht){
			$(".ytlink-container").animate({bottom: -st}, 1);
		}

	});

}

//taken from http://ctrlq.org/code/19797-regex-youtube-id
function extractVideoID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if ( match && match[7].length == 11 ){
        return match[7];
    }else{
        return false;
    }
}



