

$('body').ready(function() {
	$('body').keypress(function(e) {
		if (e.which != 116) { return }

		$('.present p').toggleClass('highlight');
	})

})