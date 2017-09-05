var form_progress = {

	/* Cache */
	jqCache: function() {
		$activeTab = $(".nav-tabs > li.form_tab.active");
		$tab = $(".nav-tabs > li.form_tab");
		// $dataAttr = $.data("step");
		completedCheck = "<i class='fa fa-check' aria-hidden='true'></i>";
	},

	/* Methods */
	getActiveTab: function() {

		// $this.nextAll('.entry-head').each(function(index){
		//     alert($this.nextAll('.entry-head').length);
		//     for (i = entryID; i <= $this.nextAll('.entry-head').length; i++) { 
		//         index.text().replace(i, (i -1)) 
		//         alert('Index: ' + index + ' | ');
		//     }
		// });

		// $activeTab.nextAll($tab).each(function(index, value) {

		// 	console.log(value);
		// 	for(i=0; i<$activeTab.nextAll($tab).length; i++)
		// 	{
		// 		console.log(value);
		// 		index.text().replace(i, (i -1));
		// 	}
		// });
					
		// var $step = $activeTab.find('span').data('step');				
		// var $next = $activeTab.nextAll();		
		
		// for(i=0; i<$nextEl.length; i++)
		// {
		// 	// $next[i].find('span').text($next[i].find('span').data('step'));
		// 	// console.log($nextEl[i]);
		// 	console.log('--------');
		// 	// console.log($activeTab.nextAll().find('span').data('step'));
		// 	// $activeTab.nextAll().find('span').text(data('step'));	

		// }

		// $('.nav-tabs a').on('shown.bs.tab', function(event){
		//     var x = $(event.target).text();         // active tab
		//     var y = $(event.relatedTarget).text();  // previous tab

		//     console.log(x);
		//     console.log(y);
		// });

		$activeTab.find('span').text($activeTab.find('span').data('step'));
		$activeTab.nextAll().find('span').text('4');
		$activeTab.nextAll().children('a').addClass('disabled');
		$activeTab.prevAll().children('a').addClass('completed');		
		$activeTab.prevAll().find('span').append(completedCheck);
	},	

	init: function() {
		form_progress.jqCache();
		form_progress.getActiveTab();
		
	}	
};

$(document).ready(function() { form_progress.init(); });