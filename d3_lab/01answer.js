    // Define your scales and generator here.
      d3.csv('ue_industry.csv', data => {

            console.log(data);
        
            let xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => +d.index))
                .range([20, 1180]);
            
            let yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => +d.Agriculture))
                .range([580, 20]);

            let answerline = d3.line()
            	.x(d => xScale(d.index))
            	.y(d => yScale(d.Agriculture))
        
			d3.select('#answer1')
			    .append('path')
			    .attr('d', answerline(data))
			    .attr('stroke', '#474af')
        });


