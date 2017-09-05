/* Sweet Alerts */
$('#email_1').on('click', function() {
	swal({
		title: 'Success...',
		text: "Your email was sent!",
		type: 'success',
		animation: false
	});
});
$('#clear_1').on('click', function() {
	swal({
	  title: 'Are you sure?',
	  text: "You will not be able to revert this.",
	  type: 'warning',
	  showCancelButton: true,
	  animation: false,
	  confirmButtonColor: '#6fbf73',
	  cancelButtonColor: '#ff5722',
	  confirmButtonText: 'Yes, clear all.'
	}).then(function () {
	  swal(
	    'Cleared!',
	    'Your contacts has been updated.',
	    'success'
	  )
	});
});

$('#email_2').on('click', function() {swal('Oops...','Something went wrong!','error'); });
$('#email_3').on('click', function() {swal('Success...','Your email was sent!','success'); });
$('#email_4').on('click', function() {swal('Oops...','Something went wrong!','error'); });
$('#email_5').on('click', function() {swal('Success...','Your email was sent!','success'); });
$('#email_6').on('click', function() {swal('Oops...','Something went wrong!','error'); });
$('#email_7').on('click', function() {swal('Success...','Your email was sent!','success'); });
/* End Sweet Alerts */

// /* ChartJS */
var dashboard_charts = {
	dataCharts: {
		yearOne: $("dashChart2"),
		yearFive: $("dashChart3"),
		yearTen: $("dashChart4"),
	},

	/* Cache */
	jqCache: function() {
		$dashboardCharts = $("#dashboardCharts");
	},

	showYear: function() {
		var $chartBtns = $("[class^=graph_button_years]");
		var canvasChart = 'dashChart';

		$chartBtns.on('click', function() {
			yearSelected = ($(this).data('chart'));

			for(i=0; i < $('.chart_container').length; i++)
			{
				$('.chart_container').find('canvas').addClass('hide');

				if( $('.chart_container').find($('#'+yearSelected)) )
				{
					$('#'+yearSelected).removeClass('hide');
				}
			}
		});
	},

	init: function() {
		dashboard_charts.jqCache();
		dashboard_charts.showYear();
	}
}
// /* End ChartJS */
// var toggle_email = {

// 	/* Methods */
// 	showEmailForm: function() {
// 		var $toggleArea = $(".table-responsive");
// 		var $emailToggle = $(".send_email");
// 		var $closeEmailForm = $("#close_email_form");
// 		var $userNameTo = $(".userNameTo");
// 		var $userEmail = $(".userEmail");
// 		var $userNameMessage = $("#userNameMessage");

// 		$emailToggle.on('click', function() {

// 			// find email data
// 			var $findRecipientName = $(this).closest('tr').find('td').eq(1).text();
// 			var $findRecipientEmail = $(this).closest('tr').find('td').eq(2).text();
// 			console.log($findRecipientName);

// 			for(i=0; i < $toggleArea.length; i++) {
// 				if(! $toggleArea.eq(i).hasClass('hide')) {
// 					$toggleArea.eq(i).slideToggle('hide');
// 				}
// 				else {
// 					$toggleArea.eq(i).removeClass('hide');
// 				}
// 			}

// 			//Set email
// 			$userEmail.val($findRecipientEmail);
// 			$userNameTo.html($findRecipientEmail);
// 			$userNameMessage.html("Dear " + $findRecipientName + ",").focus();

// 		});

// 		$closeEmailForm.on('click', function() {

// 			for(i=0; i < $toggleArea.length; i++) {
// 				if(! $toggleArea.eq(i).hasClass('hide')) {
// 					$toggleArea.eq(i).slideToggle('hide');
// 				}
// 				else {
// 					$toggleArea.eq(i).removeClass('hide');
// 				}

// 			}
// 		});
// 	},

// 	searchEmailForm: function() {
// 		// Declare search variables
// 		// var input, filter, ul, li, a, i;
// 		// var input = document.getElementById('searchUser');
// 		// var namesArr = ['Frankie Torres','Daniela Navarro','Daniela Valeri','Maria Adelina','Maria Fernanda','Tayda Oshi','Sabrina Jean','Gloria Yolanda','Cira Rodriguez','Frankie Torres','Daniela Navarro','Daniela Valeri','Maria Adelina','Maria Fernanda','Tayda Oshi','Sabrina Jean','Gloria Yolanda','Cira Rodriguez'];
// 		// var tBody = document.getElementById("filterUsers");
// 		// var tableTr = tBody.getElementsByTagName('tr');

// 		// $(input).on('keyup', function() {
// 		// 	var filter = input.value.toLowerCase();

// 		// 	// Loop through all list items, and hide those who don't match the search query
// 		// 	for (i = 0; i < namesArr.length; i++) {
// 		// 	    var name = $(tableTr).eq(i).find("td").eq(1).html();
// 		// 	    var email = $(tableTr).eq(i).find("td").eq(2).html();


// 		// 	    if (name.toLowerCase().indexOf(filter) > -1 || email.toLowerCase().indexOf(filter) > -1) {
// 		// 	        tableTr[i].style.display = "";
// 		// 	    } else {
// 		// 	        tableTr[i].style.display = "none";
// 		// 	    }
// 		// 	}
// 		// });
// 	},

// 	toggleNotifications: function() {
// 		var $toggleNotifications = $("#toggle_notifications");
// 		var $notificationTray = $("#notification_tray");

// 		$toggleNotifications.on('click', function() {
// 			$notificationTray.toggleClass('hide');
// 		});
// 	},

// 	toggleQuestionNotifications: function() {
// 		var $toggleQuestionNotifications = $(".question_notification");
// 		var notificationQuestionContainer = "question_notification_container";

// 		// on hover show hidden question container
// 		$toggleQuestionNotifications.on('hover', function() {
// 			$(this).siblings('#'+notificationQuestionContainer).slideToggle("fast");
// 			$(this).siblings('#'+notificationQuestionContainer).removeClass('hide');
// 		});
// 	},

// 	init: function() {
// 		toggle_email.showEmailForm();
// 		toggle_email.searchEmailForm();
// 		toggle_email.toggleNotifications();
// 		toggle_email.toggleQuestionNotifications();
// 	}
// }
// /* Init Charts and Toggle Email */
// $(document).ready(function() { dashboard_charts.init(); toggle_email.init(); });
var show_question_helper = {
	toggleQuestionNotifications: function() {
		var $toggleQuestionNotifications = $(".question_notification_xs");
		var notificationQuestionContainer = "question_notification_container";

		// on hover show hidden question container
		$toggleQuestionNotifications.on('click', function() {
			$(this).siblings('#'+notificationQuestionContainer).slideToggle("fast");
			$(this).siblings('#'+notificationQuestionContainer).removeClass('hide');
		});
	},

	init: function() {
		show_question_helper.toggleQuestionNotifications();
	}
}
$(document).ready(function() { dashboard_charts.init(); show_question_helper.init(); });

// VueJS
var dashboardLists = new Vue({
	el: '#notifications',
	data: {
		isChecked: false,
		checkedAll: false,
		showUserTable: true,
		showAlarmContainer: false,
		quickActionContainer: false,
		showEmailContainer: true,
		showEmailForm: false,
		showUserContainer: false,
		use_template: false,
		addUserNoResults: true,
		toggle_template: false,
		toggle_template_text: 'No',
		quickActionText: '',
		userEmail: [],
		userMsg: '',
		userName: [],
		templateSaved: false,
		emailTemplateNames: [
			{
				name: 'Missing Reports',
				email: 'Dear All,\n\nYou have "MISSING REPORTS". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
			{
				name: 'Without Meetings',
				email: 'Dear All,\n\nYou have "WITHOUT MEETINGS". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
			{
				name: 'Missing Deadlines',
				email: 'Dear All,\n\nYou have "MISSING DEADLINES". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
			{
				name: 'Without Classes',
				email: 'Dear All,\n\nYou have "WITHOUT CLASSES". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
			{
				name: 'Reports in Progress',
				email: 'Dear All,\n\nYou have "REPORTS IN PROGRESS". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
			{
				name: 'Reports Completed',
				email: 'Dear All,\n\nYou have "REPORTS COMPLETED". Please update your list as soon as possible.\n\nSincerely,\nKing Jesus Ministry\n14100 SW 144 Avenue\nMiami, FL 33186\nT:305.398.7999 Ext.1141\nF:305.382.3178\nkingjesusministry.org | elreyjesus.org',
				// signature: 'El Rey Jesus'
			},
		],
		templateName : '',
		userSubject: '',
		create_template: '',
	},
	computed: {

		templateEmail: function() {

			// set instance to component
			var component = this;

			if( component.use_template ) {

				// loop over templates
				for(i=0; i < component.emailTemplateNames.length; i++) {

					// check if chosen template matches a template name in array
					if( component.emailTemplateNames[i].name === component.templateName ) {
						// assign subject to chosen template
						component.userSubject = component.emailTemplateNames[i].name;

						// show email text without dynamic signature
						component.userMsg = component.emailTemplateNames[i].email + "\n\n";
						// show email text with dynamic signature
					}

				}
			}
		},

		toggleNewTemplate: function() {

			// set instance to component
			var component = this;

			// check if template is being used, else check plain textarea
			if( component.use_template ) {

				if(component.templateName === 'create_template') {

					return component.toggleNewTemplate = false;
				}
				else {
					return component.toggleNewTemplate = true;
				}
			}

			// default to button disabled
			return component.toggleNewTemplate = true;
		},

		toggleSend: function() {

			// set instance to component
			var component = this;

			// check if template is being used, else check plain textarea
			if( component.use_template ) {
				if( component.templateEmail != '' || component.templateEmail != 'undefined' ) {
					if(component.userSubject.length >= 1) {
						return component.toggleSend = false;
					}
				}
				else {
					return component.toggleSend = true;
				}
			}
			else {
				if( component.userMsg.length >= 1 && component.userSubject.length >= 1) {
					return component.toggleSend = false;
				}
			}

			// default to button disabled
			return component.toggleSend = true;
		}
	},
	methods: {
		notification_button: function() {

			// set instance to component
			var component = this;

			// toggle alarm container
			component.showAlarmContainer = !component.showAlarmContainer;

		},
		select_notification: function(e) {

			// set instance to component
			var component = this;

			// update css layout updates
			component.showEmailForm = false;
			component.quickActionContainer = true;
			component.showUserTable = true;
			component.quickActionText = e.target.textContent;

			// using set timeout to set username / useremail
			// without it script cannot find 'filterUsers' id
			setTimeout(function() {

				// set user / table variables
				var getEl = 'tr';
				var username;
				var useremail;
				var getTBody = document.getElementById('filterUsers');
				// clear arrays
				component.userName = [];
				component.userEmail = [];

				// loop over tbody elements
				for(i=0; i < getTBody.childNodes.length; i++) {

					// filter tbody table rows
					if(getTBody.childNodes[i].nodeName === 'TR') {

						// set table row variable
						var tableTr = getTBody.childNodes[i];

						// loop every table row (tr) in tbody
						for(x=0; x < tableTr.childNodes.length; x++) {

							// filter user checkbox by checking class list
							if( tableTr.childNodes[x].nodeName === 'TD' ) {

								// filter username by checking class list
								if( tableTr.childNodes[x].classList.contains("user_name_dash") ) {

									// store name in arrays
									username = tableTr.childNodes[x].textContent;
								}

								// filter user email by checking class list
								if( tableTr.childNodes[x].classList.contains("user_email_dash") ) {

									// store email in array
									useremail = tableTr.childNodes[x].textContent;
									// component.userEmail.push(useremail);
								}
							}
						}

						// update user object w/ all
						component.userName.push({
							"name"	: username,
							"email"	: useremail,
							"send"	: false,
						});
					}
				}
			}, 0);

		},
		compose_message: function(el) {

			// set instance to component
			var component = this;
			var getEl = 'tr';
			var elTarget = el.target;

			// polyfil for IE, wh/ does not support .closest()
			if (window.Element && !Element.prototype.closest) {
			    Element.prototype.closest =
			    function(s) {
			        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			            i,
			            el = this;
			        do {
			            i = matches.length;
			            while (--i >= 0 && matches.item(i) !== el) {};
			        } while ((i < 0) && (el = el.parentElement));
			        return el;
			    };
			}

			var parentEl = elTarget.closest(getEl);
			for(i=0; i<parentEl.childNodes.length; i++) {

				if(parentEl.childNodes[i].classList == 'user_name_dash') {
					var username = parentEl.childNodes[i].textContent;
				}
				if(parentEl.childNodes[i].classList == 'user_email_dash') {
					var useremail = parentEl.childNodes[i].textContent;
				}
			}

			// loop over find removed user. set send to false
			component.userName.find(function(k, i) {

				// compare removed to array index
				if( k.name === username ) {
					// update user object with send true
					k.send = true;
				}
				else {
					// update user object with send false
					k.send = false;
				}
			});

			// update css layout updates
			component.showUserTable = false;
			component.showAlarmContainer = false;
			component.showEmailForm = true;
			component.showEmailContainer = true;
			component.addUserNoResults = false;

		},
		close_email_form: function() {

			// set instance to component
			var component = this;
			// update css layout updates
			component.showUserTable = true;
			component.showEmailForm = false;
			// clear arrays
			component.userName = [];
			component.userEmail = [];
			component.userMsg = '';
		},

		// use the 'send to selected' button (bulk send)
		send_to_selected: function() {

			// set instance to component
			var component = this;
			var getEl = 'tr';
			var getTBody = document.getElementById('filterUsers');
			var username;
			var useremail;
			var isChecked = false;
			var isSend = false;
			var isSendCount = 0;

			// update css layout updates
			component.showUserTable = false;
			component.showAlarmContainer = false;
			component.showEmailForm = true;
			// clear arrays
			component.userName = [];
			component.userEmail = [];
			component.userMsg = '';

			// loop over tbody elements
			for(i=0; i < getTBody.childNodes.length; i++) {

				// filter tbody table rows
				if(getTBody.childNodes[i].nodeName === 'TR') {
					var tableTr = getTBody.childNodes[i];

					// loop every table row (tr) in tbody
					for(x=0; x < tableTr.childNodes.length; x++) {

						// filter user checkbox by checking class list
						if( tableTr.childNodes[x].nodeName === 'TD' ) {

							if( tableTr.childNodes[x].classList.contains("user_checkbox") ) {

								// loop over each element in checkbox (td)
								for(y=0; y < tableTr.childNodes[x].getElementsByTagName('*').length; y++) {

									// filter user checkbox by input element
									if( tableTr.childNodes[x].getElementsByTagName('*')[y].nodeName === 'INPUT' ) {

										// assign check box to var
										var checkBox = tableTr.childNodes[x].getElementsByTagName('*')[y];

										if( checkBox.checked === true) {
											isChecked = true;
										}
									}
								}
							}

							// check is row/user is checked
							if( isChecked === true) {

								// set flag for send
								isSend = true;

								// filter username by checking class list
								if( tableTr.childNodes[x].classList.contains("user_name_dash") ) {

									// store selected name in array
									username = tableTr.childNodes[x].textContent;
								}

								// filter user email by checking class list
								if( tableTr.childNodes[x].classList.contains("user_email_dash") ) {

									// store email in array
									useremail = tableTr.childNodes[x].textContent;
									// component.userEmail.push(useremail);
								}
							}
							else {
								// filter username by checking class list
								if( tableTr.childNodes[x].classList.contains("user_name_dash") ) {

									// store selected name in array
									username = tableTr.childNodes[x].textContent;
								}

								// filter user email by checking class list
								if( tableTr.childNodes[x].classList.contains("user_email_dash") ) {

									// store email in array
									useremail = tableTr.childNodes[x].textContent;
									// component.userEmail.push(useremail);
								}
							}
						}
					}

					// sort users by send true/false
					if( isSend === true ) {

						// increment send count to compare late
						isSendCount++;

						// update user object with selected true
						component.userName.push({
							"name" 	: username,
							"email" : useremail,
							"send" 	: true,
						});

						// remove 'no results' from view
						component.addUserNoResults = false;
					}
					else {

						// update user object with selected false
						component.userName.push({
							"name" 	: username,
							"email" : useremail,
							"send" 	: false,
						});
					}

					// reset flags
					isChecked = false;
					isSend = false

					// if all selected show 'no results' in show User Container
					if(component.userName.length === isSendCount) {
						component.addUserNoResults = true;
					}
				}
			}

			// reset - show showEmailContainer
			component.showEmailContainer = true;
		},
		checkboxAll: function() {

			// set instance to component
			var component = this;

			// toggle ALL checkboxes
			component.isChecked = !component.isChecked;
		},
		openUserContainer: function() {

			// set instance to component
			var component = this;

			// toggle opening of user container to show unincluded users
			component.showUserContainer = !component.showUserContainer;
		},
		addUser: function(key) {

			// set instance to component
			var component = this;
			var totalSendFalse = 0;

			// show / hide
			component.showEmailContainer = true;
			component.toggleSend = true;

			// loop over find removed user. set send to false
			component.userName.find(function(k, i) {

				// add to count of send false
				if(component.userName[i].send === false) {
					totalSendFalse++;
				}

				// compare removed to array index
				if(key === i) {
					// update user object with send true
					component.userName[key].send = true;
				}
			});

			// if count 1 hide userContainer dropdown
			if (totalSendFalse === 1) {
				component.showUserContainer = false;
				component.addUserNoResults = true;
			}
		},
		removeUser: function(key) {

			// set instance to component
			var component = this;
			var totalSendTrue = 0;

			// remove 'no results' from view
			component.addUserNoResults = false;

			// loop over find removed user. set send to false
			component.userName.find(function(k, i) {

				// add to count of send false
				if(component.userName[i].send === true) {
					totalSendTrue++;
				}

				// compare removed to array index
				if(key === i) {
					component.userName[key].send = false;
				}
			});

			// if count 1 hide userContainer dropdown
			if (totalSendTrue === 1) {
				component.showEmailContainer = false;
				component.toggleSend = true;
			}

		},
		toggle_template_option: function() {

			// set instance to component
			var component = this;

			// toggle the toggle animation
			component.toggle_template = !component.toggle_template;

			// ternary to update toggle template text
			component.toggle_template ? component.toggle_template_text = 'Yes' : component.toggle_template_text = 'No';
			component.toggle_template ? component.use_template = true : component.use_template = false;
		},
		createNewTemplate: function() {

			// set instance to component
			var component = this;

			// update email template array
			// with chosen template
			component.emailTemplateNames.push({
				"name" : component.userSubject,
				"email" : component.userMsg,
			});

			swal({
				title: 'Saved...',
				text: "Your templated is saved! Please check the dropdown to use.",
				type: 'success',
				animation: false
			});
		},

		// stubbed in to test send  button
		send: function() {

			// set instance to component
			var component = this;

			// success if users are selected. waning if not
			if(component.showEmailContainer) {
				// email send
				swal({
					title: 'Success...',
					text: "Your email was sent!",
					type: 'success',
					animation: false
				});
			}
			else {

				// warning - please select user to message
				swal({
					title: 'Sorry...',
					text: "Please select someone to message!",
					type: 'warning',
					animation: false
				});

			}
		},

		// search table of users
		search_users: function(e) {

			// set instance to component
			var component = this;
			// Declare search variables
			var getTBody = document.getElementById('filterUsers');
			var input, filter;
			var input = e.target.value;
			var tableTr = getTBody.rows;
			var filter = input.toLowerCase();

			// Loop through all list items, and hide
			// those who don't match the search query
			for ( i = 1; i < component.userName.length; i++ ) {

			    if (component.userName[i].toLowerCase().indexOf(filter) > -1 || component.userEmail[i].toLowerCase().indexOf(filter) > -1) {
			        tableTr[i].style.display = "";
			    } else {
			        tableTr[i].style.display = "none";
			    }
			}
		},
	}
});

// help / instruction containers
var hover_questions = new Vue({
	el: '#hover_questions',
	data: {
		current_title: '',
		histroical_title: '',
		show_current_question: false,
		show_histroical_question: false,
	},
	methods: {
		show_question_current: function() {

			// set instance to component
			var component = this;

			// toggle question container
			component.show_current_question = !component.show_current_question
		},
		show_question_historical: function() {

			// set instance to component
			var component = this;

			// toggle question container
			component.show_histroical_question = !component.show_histroical_question
		},
	},
});