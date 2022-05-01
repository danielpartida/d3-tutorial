// d3.csv("data/employee.csv", function(data) {
//     console.log(data);
// });

d3.json("data/users.json", function(error, data) {

    console.log("Testing");

    if (error) {
        return console.warn(error);
    }

    console.log("Printing data:", data);
});