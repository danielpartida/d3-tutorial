var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

var tr = d3.select("body")
            .append("table")  // adds <table>
            .selectAll("tr")  // selects all <tr>
            .data(matrix)      // joins matrix array 
            .enter()           // create placeholders for each row in the array
            .append("tr");

var td = tr.selectAll("td")
    .data(function (d) {    // joins inner array of each row
        console.log(d);
        return d;
    })
    .enter()    // create placeholders for each element in an inner array
    .append("td") // creates <td> in each placeholder
    .text(function (d) {
        console.log(d);
        return d; // add value of each inner array as a text in <td>
    });