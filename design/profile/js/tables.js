var tables = {

    /* Properties */
    tBodyPos: 220,    
    $tHead: $('#fixed_table_head'),  
    $tBody: $('#fixed_table_body'),
    $tCells: $('.table-condensed>tbody>tr>td'),


    /* Methods */
    fixedTableHead: function() {			
		
		$(window).scroll(function() {

			

			if($(window).scrollTop() > tables.tBodyPos)
			{
				tables.$tHead.offset({ left: "200px"});

				console.log($(window).scrollTop());

				tables.$tHead.css({
					"position": "absolute",
					"top": "0",
				});
				tables.$tCells.css({	
					// "min-width": "200px"
				});
			}
			if($(window).scrollTop() < tables.tBodyPos)
			{
				tables.$tHead.css({
					"position": "relative"
				});
			}				
		});					
	},

	init: function() {
		tables.fixedTableHead();
	}
}


$(document).ready(function() { tables.init(); });