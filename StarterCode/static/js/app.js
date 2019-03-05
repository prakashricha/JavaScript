// from data.js
var tableData = data;
date(tableData);
// YOUR CODE HERE!
// Get a reference to the table body
function date(dateData)
{
    var tbody = d3.select("tbody");
    tbody.html("");
    // Console.log the weather data from data.js
    console.log(dateData);

    // Step 1: Loop Through `data` and console.log each weather report object
    // tableData.forEach(function(ufoData) {
    //   console.log(ufoData);
    // });

    // Step 2:  Use d3 to append one table row `tr` for each weather report object
    // Don't worry about adding cells or text yet, just try appending the `tr` elements.
    dateData.forEach(function(dataUfo) {
        var row = tbody.append("tr");
        var dateValues = Object.entries(dataUfo);
        dateValues.forEach(function(finalData) {
            row.append("td").text(finalData[1]);
        
    });
});
}

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(` filter data ${filteredDate}`);
  date(filteredDate);
});
