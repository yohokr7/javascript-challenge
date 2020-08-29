// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });