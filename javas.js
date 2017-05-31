$(document).ready(function () {
	
	var comboboxvalue;
	
	$('#combobox-row').on('mousedown', function () {
		//alert("asd");
		$('#combobox-list').toggle('fast');
		return false;
	});
	$('#combobox-list').children('ul').children('li').on('mousedown', function () {
		comboboxvalue=$(this).text();
		$('#combobox-value').text(comboboxvalue);;
	});
	
	
	
	$(window,document).on("mousedown",function(){$('#combobox-list').slideUp('fast');});

});

