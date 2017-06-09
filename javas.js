var options=[{id:1, name:"Option1"},{id:2, name:"Option2"},{id:3, name:"Option3"},{id:4, name:"Option4"},{id:5, name:"Option5"}];
var selectedoption;

$(document).ready(function () {
	
	var comboboxvalue;
	var isCollapsed=true;
	
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
	var comboboxlisttext=$('<div>').addClass('combobox-list-text').text("No matches found").appendTo(comboboxlist).hide();
				
	comboboxrow.on('click', function () {
		if (isCollapsed==true) {
		comboboxlist.slideDown('fast');
		isCollapsed=false;
		return false;
		}
		else {
			comboboxlist.slideUp('fast');
			isCollapsed=true;
		}
	});
	comboboxlist.children('ul').children('li').on('mousedown', function () {
		selectedoptionid=$(this).attr('data-id');
		comboboxlist.find("ul>li.selected").removeClass('selected');
		$(this).addClass('selected');
		for (var item in options) 
			{
				if (options[item].id==selectedoptionid) {
					selectedoption=options[item];
				}
			}
		comboboxrowvalue.text(selectedoption.name);
		isCollapsed=false;
	});
	
	//search
	comboboxlistinput.on('keyup', function () {
		var searchtext=comboboxlistinput.val().toLowerCase();
		console.log('searchtext= '+searchtext);
		var hasVisibleElements=false;
		for (var item in options) 
			{				
				if (options[item].name.toLowerCase().indexOf(searchtext)==-1) {
				comboboxlistul.children('li[data-id="'+options[item].id+'"]').hide();
				}
				else {comboboxlistul.children('li[data-id="'+options[item].id+'"]').show();
				hasVisibleElements=true;
				}		
			}
		if (hasVisibleElements==false) {
			comboboxlisttext.show();
		}
		else {comboboxlisttext.hide();
		}
		
	});
	
	
	
	comboboxlistinput.on("click",function(){return false;});
	$(window,document).on("click",function(){
		if (isCollapsed==false) {
		comboboxlist.slideUp('fast');
		isCollapsed=true;		
		}
	});
});

