$(document).ready(function() {
	$("div.middle td p").click(function(){
		$("div.row").toggleClass("disable");
		$("footer div.footerRow").toggleClass("disable");
	});
});