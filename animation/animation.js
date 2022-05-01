var svg = d3.select("body")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000);


    var bar1 = svg.append("rect")
        .attr("fill", "blue")
        .attr("x", 100)
        .attr("y", 20)
        .attr("height", 20)
        .attr("width", 10)

    var bar2 = svg.append("rect")
        .attr("fill", "blue")
        .attr("x", 120)
        .attr("y", 20)
        .attr("height", 20)
        .attr("width", 10)

    update();

function update() {
        bar1.transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .attr("height",120)
    
        bar2.transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .delay(2000)
            .attr("height",100)
    }