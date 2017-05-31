var options=[{id:1, name:"День"},{id:2, name:"Месяц"},{id:3, name:"Год"}]

$(document).ready(function () {
	
	var comboboxvalue;
	
	var container=$('#combobox');
		
		var comboboxrow=$('<div>').addClass('combobox-row').appendTo(container);
		var comboboxrowvalue=$('<span>').addClass('combobox-row-value').text("Select option").appendTo(comboboxrow);
		$('<span>').addClass('combobox-row-icon ui-icon ui-icon-triangle-1-s').appendTo(comboboxrow);
		var comboboxlist=$('<div>').addClass('combobox-list').appendTo(container);
		var comboboxlistul=$('<ul>').appendTo(comboboxlist);
		$('<li>').text("option 1").appendTo(comboboxlistul);
		$('<li>').text("option 2").appendTo(comboboxlistul);
		$('<li>').text("option 3").appendTo(comboboxlistul);
		$('<li>').text("option 4").appendTo(comboboxlistul);
			
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

