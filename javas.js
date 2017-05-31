var options=[{id:1, name:"День"},{id:2, name:"Месяц"},{id:3, name:"Год"}]

$(document).ready(function () {
	
	var comboboxvalue;
	
	var container=$('combobox')
		var comboboxrow=$('<div>').addClass('combobox-row').append(container);
		$('<span>').addClass('combobox-row-value').append(comboboxrow);
		$('<span>').addClass('combobox-row-icon ui-icon ui-icon-triangle-1-s').append(comboboxrow);
		var comboboxlist=$('<div>').addClass('combobox-list').append(container);
		var comboboxlistul=$('<ul>').append(comboboxlist);
		$('<li>').text("option 1").append(comboboxlistul);
		$('<li>').text("option 1").append(comboboxlistul);
		$('<li>').text("option 1").append(comboboxlistul);
		$('<li>').text("option 1").append(comboboxlistul);
		
		
		

	
	comboboxrow.on('mousedown', function () {
		//alert("asd");
		comboboxlist.toggle('fast');
		return false;
	});
	comboboxlist.children('ul').children('li').on('mousedown', function () {
		comboboxvalue=$(this).text();
		comboboxrowvalue.text(comboboxvalue);
	});
	
	
	
	$(window,document).on("mousedown",function(){comboboxlist.slideUp('fast');});

});

