d3.csv("data/employee.csv", function(data) {
    console.log("CSV data", data);
});


// https://stackoverflow.com/questions/49768165/code-within-d3-json-callback-is-not-executed
d3.json("data/geeks.json").then(function(data, error) {

    console.log("JSON data", data);

    if (error) {
        return console.warn(error);
    }

    d3.select("body")
        .selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function(d) {
            return d.name + ", " + d.location;
        });

});