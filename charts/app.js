var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            label: 'Incoming Calls',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#5d5393',            
            borderColor: 'black',
            borderWidth: 1
    	}, {
            label: 'Outgoing Calls',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: '#aaee99',
            borderColor: 'black',
            borderWidth: 1
		}]
	},
    options: {
		tooltips: {
			enabled: true,
			mode: 'index',
			intersect: false
		},
		legendCallback: chart => {
			const text = [];
			text.push("<ul class='legend-items'>");
			chart.data.datasets.forEach(item => {
				text.push(`
					<li class="legend-item">
						<span style="background:${item.backgroundColor}"></span>
						${item.label}
						<span><strong>${item.data.reduce((a,b) => a + b, 0)}</strong></span>
					</li>
				`);
			});
			text.push(`
				<li class="legend-item">
					<span style="background:#ff8c00"></span>
					Total
					<span><strong>
						/* TODO get the sum of these two arrays */
						${
							chart.data.datasets.map(values => {
								return values.data.reduce((a,b) => a + b)
							})
						}
					
					</strong></span>
				</li>
			`);
			text.push("</ul>");
			return text.join("");
		},
		title: {
			text: 'Chart Title Section',
			display: false,
			position: 'bottom',
			fontSize: 20,
			fontFamily:  'Source Sans Pro',
			fontColor: '#a8c',
			fontStyle: 'italic'
		},
		legend: {
			display: false,
			position: 'left',
			labels: {
				usePointStyle: true,
				fontColor: 'red'
			},
			onClick: removeData
		},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
				stacked: true
            }],
			xAxes: [{
				gridLines: {
					offsetGridLines: true
				},
				stacked: true
			}]
        }
    }
});

function removeData () {
	console.log('Clicked');
	chart.data.datasets.pop();
};

document.getElementById('legend').innerHTML = chart.generateLegend();
