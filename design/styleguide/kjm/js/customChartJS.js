
	var ctxCurrent = $("#dashChartCurrent");
	var dashChartCurrent = new Chart(ctxCurrent, {
	    type: 'bar',
	    data: {
	        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
	        datasets: [{
	        	label: 'PF Streets',
	            data: [12, 19, 3, 5, 2, 3, 4, 19, 3, 20, 2, 3],
	            backgroundColor: 'rgba(35, 152, 247, 0.8)',
	            borderWidth: 0
	        },
	        {
	        	label: 'PF Church',
	            data: [12, 14, 3, 6, 12, 30, 45, 9, 13, 40, 21, 35],
	            backgroundColor: 'rgba(75, 175, 80, 0.8)',
	            borderWidth: 0
	        },
	        {
	            type: 'line',
	            label: 'Target',
	            data: [30, 20, 10, 12, 15, 55, 3, 50, 12, 12, 35, 55],
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        },
	    }
	});

	var ctx1 = $("#dashChart1");
	var dashChart1 = new Chart(ctx1, {
	    type: 'line',
	    data: {
	        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
	        datasets: [{
	        	label: 'PF Streets',
	            data: [12, 19, 3, 5, 2, 3, 4, 19, 3, 20, 2, 3],
	            backgroundColor: 'rgba(35, 152, 247, 0.8)',
	            borderWidth: 0
	        },
	        {
	        	label: 'PF Church',
	            data: [12, 14, 3, 6, 12, 30, 45, 9, 13, 40, 21, 35],
	            backgroundColor: 'rgba(75, 175, 80, 0.8)',
	            borderWidth: 0
	        },
	        {
	            type: 'line',
	            label: 'Target',
	            data: [30, 20, 10, 12, 15, 55, 3, 50, 12, 12, 35, 55],
	        }]
	    },
	});

	var ctx2 = $("#dashChart2");
	var dashChart2 = new Chart(ctx2, {
	    type: 'line',
	    data: {
	        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
	        datasets: [{
	        	label: 'PF Streets',
	            data: [12, 29, 13, 25, 12, 33, 43, 19, 3, 10, 2, 33],
	            backgroundColor: 'rgba(35, 152, 247, 0.8)',
	            borderWidth: 0
	        },
	        {
	        	label: 'PF Church',
	            data: [82, 34, 31, 16, 2, 10, 75, 19, 93, 40, 101, 15],
	            backgroundColor: 'rgba(75, 175, 80, 0.8)',
	            borderWidth: 0
	        },
	        {
	            type: 'line',
	            label: 'Target',
	            data: [40, 30, 20, 22, 25, 65, 23, 60, 22, 22, 45, 65],
	        }]
	    },
	});

	var ctx3 = $("#dashChart3");
	var dashChart3 = new Chart(ctx3, {
	    type: 'line',
	    data: {
	        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
    	        datasets: [{
    	        	label: 'PF Streets',
    	            data: [22, 19, 33, 35, 22, 43, 65, 39, 13, 17, 32, 53],
    	            backgroundColor: 'rgba(35, 152, 247, 0.8)',
    	            borderWidth: 0
    	        },
    	        {
    	        	label: 'PF Church',
    	            data: [72, 44, 11, 26, 12, 30, 55, 29, 113, 50, 101, 25],
    	            backgroundColor: 'rgba(75, 175, 80, 0.8)',
    	            borderWidth: 0
    	        },
    	        {
    	            type: 'line',
    	            label: 'Target',
    	            data: [50, 20, 40, 32, 35, 65, 65, 65, 32, 22, 45, 72],
    	        }]
	    },
	});

	// var ctx2 = $("#dashChart2");
	// var dashChart2 = new Chart(ctx2, {
	//     type: 'doughnut',
	//     data: {
	//     	labels: [
	   //          "PF Streets",
	   //          "PF Church",
	   //          "Unknown"
	//     	],
	//     	datasets: [
	//         	{
	   //              data: [300, 50, 100],
	   //              backgroundColor: [
	   //                  "#FF6384",
	   //                  "#36A2EB",
	   //                  "#FFCE56"
	   //              ],
	   //              hoverBackgroundColor: [
	   //                  "#FF6384",
	   //                  "#36A2EB",
	   //                  "#FFCE56"
	   //              ]
	   //          }
	   //      ],
	//     },
	// });

	// var ctx3 = $("#dashChart3");
	// var dashChart3 = new Chart(ctx3, {
	//     type: 'bar',
	//     data: {
	//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
	//         datasets: [{
	//             label: 'PF en la Streets',
	//             data: [12, 19, 3, 5, 2, 3, 4, 19, 3, 0, 2, 3],
	//             backgroundColor: [
	//                 'rgba(75, 175, 80, 0.8)',
	//                 'rgba(35, 152, 247, 0.8)',
	//                 'rgba(255, 206, 86, 0.8)',
	//                 'rgba(75, 192, 192, 0.8)',
	//                 'rgba(75, 175, 80, 0.8)',
	//                 'rgba(153, 102, 255, 0.8)',
	//                 'rgba(255, 159, 64, 0.8)',
	//                 'rgba(255, 206, 86, 0.8)',
	//                 'rgba(75, 192, 192, 0.8)',
	//                 'rgba(153, 102, 255, 0.8)',
	//                 'rgba(75, 175, 80, 0.8)',
	//                 'rgba(35, 152, 247, 0.8)',
	//             ],
	//             borderColor: [
	//                 'rgba(255, 99, 132, 1)',
	//                 'rgba(54, 162, 235, 1)',
	//                 'rgba(255, 206, 86, 1)',
	//                 'rgba(75, 192, 192, 1)',
	//                 'rgba(255, 99, 132, 1)',
	//                 'rgba(153, 102, 255, 1)',
	//                 'rgba(255, 159, 64, 1)',
	//                 'rgba(255, 206, 86, 1)',
	//                 'rgba(75, 192, 192, 1)',
	//                 'rgba(153, 102, 255, 1)',
	//                 'rgba(255, 99, 132, 1)',
	//                 'rgba(54, 162, 235, 1)',
	//             ],
	//             borderWidth: 4
	//         }]
	//     },
	//     options: {
	//         scales: {
	//             yAxes: [{
	//                 ticks: {
	//                     beginAtZero:true
	//                 }
	//             }]
	//         },
	//     }
	// });

