var options=[{id:1, name:"Option1"},{id:2, name:"Option2"},{id:3, name:"Option3"}]
var selectedoption;

$(document).ready(function () {
	
	var comboboxvalue;
	
	var container=$('#combobox');
		
	var comboboxrow=$('<div>').addClass('combobox-row').appendTo(container);
	var comboboxrowvalue=$('<span>').addClass('combobox-row-value').text("Select option").appendTo(comboboxrow);
	$('<span>').addClass('combobox-row-icon ui-icon ui-icon-triangle-1-s').appendTo(comboboxrow);
	var comboboxlist=$('<div>').addClass('combobox-list').appendTo(container);
	$('<span>').addClass('combobox-list-input-icon ui-icon ui-icon-search').appendTo(comboboxlist);
	var comboboxlistinput=$('<input type="text" placeholder="Search items">').addClass('combobox-list-input').appendTo(comboboxlist);
	var comboboxlistul=$('<ul>').appendTo(comboboxlist);
	for (var item in options) 
	{
		$('<li>').text(options[item].name).attr('data-id', options[item].id).appendTo(comboboxlistul);
	}
		
	comboboxrow.on('click', function () {
		comboboxlist.toggle('fast');
		return false;
	});
	comboboxlist.children('ul').children('li').on('mousedown', function () {
		selectedoptionid=$(this).attr('data-id');
		for (var item in options) 
			{
				if (options[item].id==selectedoptionid) {
					selectedoption=options[item];
				}
			}
		comboboxrowvalue.text(selectedoption.name);
	});
	
	//search
	comboboxlistinput.on('keyup', function () {
		var searchtext=comboboxlistinput.val().toLowerCase();
		console.log('searchtext= '+searchtext);
		for (var item in options) 
			{				
				if (options[item].name.toLowerCase().indexOf(searchtext)==-1) {
				comboboxlistul.children('li[data-id="'+options[item].id+'"]').hide();
				}
				else {comboboxlistul.children('li[data-id="'+options[item].id+'"]').show();
				}				
			}
	});
	
	
	
	comboboxlistinput.on("click",function(){return false;});
	$(window,document).on("click",function(){comboboxlist.slideUp('fast');});
	
});

