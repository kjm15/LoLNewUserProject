$(document).ready(function() {
	
		$.ajax({

		type: "POST",
		url: "/kdg/itemGraph",
		success: function(res) {
			
			console.log(res)
			
		}

	})
	
	
})