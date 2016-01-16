$(document).ready(
	function(){
		// Making picture pop up into lightbox when you click on them
		$(".lightbox-link").on("click", function(e){
			e.preventDefault();
			$("#text-box").text($(this).attr("alt"));
			$("#chosen-image").attr("src", $(this).attr("src"));
			$("#lightbox").show();

				$("#lightbox").on("click", function(){
					$("#lightbox").hide();
				});
		});
});