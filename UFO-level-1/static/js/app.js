// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function createTable(data){

    data.forEach((alienReport) => {
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });
};

function searchClick() {
    tbody.html("");
    
    const date = d3.select("#datetime").property("value");
    let searchedData = tableData;
    if (date) {
        searchedData = searchedData.filter(row => row.datetime === date);
    }
    createTable(searchedData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", searchClick);

createTable(tableData);