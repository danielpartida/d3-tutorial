var myData = [4, 1, 6, 2, 8, 9]
     
var p = d3.select("body")
    .selectAll("span")
    .data(myData)
    .enter()
    .append('span')
    .style('color', function(d) {
        if (d % 2 === 0) {
            return "green";
        } else {
            return "red";
        }
    })
    .text(function (d, i) {
        return d + " ";
    });