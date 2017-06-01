var options=[{id:1, name:"Option1"},{id:2, name:"Option2"},{id:3, name:"Option3"}]
var selectedoption;

$(document).ready(function () {
	
	var comboboxvalue;
	
	var container=$('#combobox');
		
		var comboboxrow=$('<div>').addClass('combobox-row').appendTo(container);
		var comboboxrowvalue=$('<span>').addClass('combobox-row-value').text("Select option").appendTo(comboboxrow);
		$('<span>').addClass('combobox-row-icon ui-icon ui-icon-triangle-1-s').appendTo(comboboxrow);
		var comboboxlist=$('<div>').addClass('combobox-list').appendTo(container);
		var comboboxlistul=$('<ul>').appendTo(comboboxlist);
		
		for (var item in options) 
			{
				$('<li>').text(options[item].name).attr('data-id', options[item].id).appendTo(comboboxlistul);
			}
		
	comboboxrow.on('mousedown', function () {
		//alert("asd");
		comboboxlist.toggle('fast');
		return false;
	});
	comboboxlist.children('ul').children('li').on('mousedown', function () {
		selectedoptionid=$(this).attr('data-id');
		for (var item in options) 
			{
				console.log(item)
				if (options[item].id==selectedoptionid) {
					selectedoption=options[item];
				}
			}
		comboboxrowvalue.text(selectedoption.name);
		debugger;
	});
	
	
	
	$(window,document).on("mousedown",function(){comboboxlist.slideUp('fast');});

});

