setTimeout(function() {


	$('.black-box').remove()

	html = `
	<div class="black-box1">
	
	</div>
	`

	$('.flagA').append(html)
	$('.black-box1').css({
		"display": "flex",
		"justify - content": "center",
		"align - items": "center",
		"height": "400px"
	})


}, 32000);