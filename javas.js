$(document).ready(function () {
	$('#combobox').on('mousedown', function () {
		//alert("asd");
		$('#comboboxlist').toggle('fast');
		return false;
	});
	
	
	$(window,document).on("mousedown",function(){$('#comboboxlist').hide('fast');});

});

