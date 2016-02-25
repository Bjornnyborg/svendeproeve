$(function(){

	$("#nav-toggle").click(function(){
		$(this).toggleClass("open");
		$("#menu").toggleClass("open");
	});

	$(window).load(function() {
		$(".subject").addClass("in");
	});

})();