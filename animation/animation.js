var t = d3.transition()
        .duration(3000)

d3.select("#container")
          .transition(t)
          .style("background-color", "red");