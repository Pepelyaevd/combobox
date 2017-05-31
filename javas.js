$(document).ready(function () {
	
	var comboboxvalue;
	
	$('#comboboxrow').on('mousedown', function () {
		//alert("asd");
		$('#comboboxlist').toggle('fast');
		return false;
	});
	$('#comboboxlist').children('ul').children('li').on('mousedown', function () {
		comboboxvalue=$(this).text();
		$('#comboboxrow').text(comboboxvalue);;
	});
	
	
	
	$(window,document).on("mousedown",function(){$('#comboboxlist').hide('fast');});

});

