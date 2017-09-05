var offCanvasDrawer = {
	
	/* Properties */
	darkBackgroundOverlay: 'darkBackgroundOverlay',

	/* Methods */
	openDrawer: function(e)
	{
		$('.drawer_btn').on('click', function(e){
			// assign variable
			offCanvasDrawer.openDrawerId = this.id;			

			// remove all active classes before re/assigning
			$('li.form_tab').removeClass('active');
			
			// find data attr of btn clicked
			$("[data-button='" + this.id + "']")
				.parent()
				.addClass('active');			

			// assign var w/ _Btn sliced
			offCanvasDrawer.openDrawerId = offCanvasDrawer.openDrawerId.slice(0, -4);
			
			// add shadows to offCanvasDrawer
			$('#' + offCanvasDrawer.openDrawerId).addClass('drawer-contents-shadows');

			// show control buttons
			offCanvasDrawer.showControlButtons();

			// add dark backgound overlay
			$('#'+offCanvasDrawer.darkBackgroundOverlay).addClass('dark_background_overlay');
		});		
	},

	closeDrawer: function()
	{
		$('.drawer_close').on('click', function()
		{
			// toggle open drawer class
		    $('#' + offCanvasDrawer.openDrawerId).toggleClass('open');
		    // hide buttons 
		    $('.drawer_buttons').addClass('hide');
		    // remove shadows to offCanvasDrawer
			$('#' + offCanvasDrawer.openDrawerId).removeClass('drawer-contents-shadows');
			// add dark backgound overlay
			$('#'+offCanvasDrawer.darkBackgroundOverlay).removeClass('dark_background_overlay');
		});
	},

	showControlButtons: function()
	{				
		$('#' + offCanvasDrawer.openDrawerId).on('shown.bs.drawer', function() {			
		    // remove hidden class from form buttons
		    $('.drawer_buttons').removeClass('hide');		    		    
		});
	},

	init: function()
	{
		offCanvasDrawer.openDrawer();
		offCanvasDrawer.closeDrawer();
		offCanvasDrawer.showControlButtons();
	}
}

$(document).ready(function() { offCanvasDrawer.init(); });