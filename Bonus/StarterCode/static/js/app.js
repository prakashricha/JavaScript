// from data.js
var tableData = data;
date(tableData);

// Get a reference to the table body
function date(dateData)
{
    var tbody = d3.select("tbody");
    tbody.html("");
    // Console.log the weather data from data.js
    console.log(`table data original ${dateData}`);

    // dispalying data from Data
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
  date(tableData)

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputStateElement=d3.select("#state");
 // console.log(` this is state data  ${inputStateElement} `)
  var inputValue = inputElement.property("value");
  var inputStateValue = inputStateElement.property("value");
  console.log(` inputValue ${inputValue}`);
  console.log(`tabledata ${tableData}`);
  console.log(`input state data ${inputStateValue}`);
  if ((inputValue != "") && (inputStateValue != "")) 
  {
   tableData1 = data;
    date(tableData)
  
   console.log( `table date in if condition: ${tableData1}`)
   var filteredData1 = tableData1.filter(tableData1 => (tableData1.datetime === inputValue && tableData1.state === inputStateValue));

  console.log(` filter data 1 ${filteredData1}`);
  date(filteredData1);
  }
  else if((inputStateValue == "" ) && (inputValue != ""))
  {
    tableData2 = data;
    date(tableData)
    console.log(`table data in else if : ${tableData2}`)
  var filteredData2 = tableData2.filter(tableData2 => tableData2.datetime === inputValue);

  console.log(` filter data 2 ${filteredData2}`);
  console.log(`table data in else if ${tableData2} `)
  date(filteredData2);
  }
  else if((inputStateValue != "" ) && (inputValue == ""))
  {
    tableData3 = data;
    date(tableData)
    console.log(`table data in else: ${tableData3}`)
    var filteredData3 = tableData3.filter(tableData3 => tableData3.state === inputStateValue);

    console.log(` filter data 3 ${filteredData3}`);
    date(filteredData3);

  }
  tableData = data
  // Get the value property of the input element
  
  //date(filteredShape);
});
