$(document).ready(function () {
	$('#combobox').on('mousedown', function () {
		//alert("asd");
		$('#comboboxlist').toggle('fast');
		return false;
	});
	$('#comboboxlist').children('ul').children('li').on('mousedown', function () {
		//alert("asd");
		var li=text.toElement;
		var temp=x.value; 
		return false;
	});
	
	
	
	$(window,document).on("mousedown",function(){$('#comboboxlist').hide('fast');});

});

