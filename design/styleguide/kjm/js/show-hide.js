var show_hide = {

    /* Properties */        

    /* Methods */
    toggleCustomDropDown: function() {

		// find all ids starting with 'well_' and gve the display: none;
		$('[id^=well_]').css('display', 'none');

		// if user clicks the drop down arrow
		$('.drop_down_arrow').on('click', function()
		{
			// properties
			var $wellId = $(this).data('well');
			var downArrow = 'fa-chevron-down';
			var upArrow = 'fa-chevron-up';

			// open section
			$('#' + $wellId).slideToggle('fast');	

			// if closed
			if($(this).find('i.fa-chevron-down').hasClass(downArrow))
			{
				// change bg color
				$(this).parents('.historial_well_header').css({
					'background-color': '#8897a7',
					'color': '#fff'
				});
				$(this).css({
					'background-color': '#7a8896',
					'color': '#fff'
				});

				// change field set border color according to mockups
				$(this).parents('fieldset').removeClass('fieldset_closed');

				// find arrow and change its direction
				$(this).find('i.fa-chevron-down')
				.removeClass(downArrow)
				.addClass(upArrow);
			}
			else if($(this).find('i.fa-chevron-up').hasClass(upArrow))
			{
				// change bg color
				$(this).parents('.historial_well_header').css({
					'background-color': '#edf1f5',
					'color': '#8c8c8c'
				});		
				$(this).css({
					'background-color': '#dfe4ea',
					'color': '#8c8c8c'
				});

				// change field set border color according to mockups
				$(this).parents('fieldset').addClass('fieldset_closed');

				// find arrow and change its direction
				$(this).find('i.fa-chevron-up')
				.removeClass(upArrow)
				.addClass(downArrow);
			}
			
		});


		// find all ids starting with 'well_' and gve the display: none;
		$('[id^=table_]').css('display', 'none');

		// if user clicks the drop down arrow
		$('.fa-plus-circle').on('click', function()
		{
			// properties
			var $tableId = $(this).data('table');
			var minusEl = 'fa-minus-circle';
			var plusEl = 'fa-plus-circle';

			// open section
			$('#' + $tableId).slideToggle('fast');	

			// if closed
			if($(this).hasClass(plusEl))
			{		
				// change icon color
				$(this).css({
					'color': '#2398f7'
				});

				// find sign and change its direction
				$(this).removeClass(plusEl)
				.addClass(minusEl);	
			}
			else if($(this).hasClass(minusEl))
			{
				// change icon color
				$(this).css({
					'color': 'inherit'
				});

				// find sign and change its direction
				$(this).removeClass(minusEl)
				.addClass(plusEl);		
			}
			
		});
	},

	init: function() {
		show_hide.toggleCustomDropDown();
	}
}


$(document).ready(function() { show_hide.init(); });