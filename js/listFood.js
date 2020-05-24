$(document).ready(function()    {
  
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://localhost:8080//getAllFoodItems',
        dataType: "json",
        success: function (data) {
            var str = "<tr><th>Nr</th><th>Name</th><th>kCal</th><th>Quantity</th><th>Type</th></tr>";
            $.each(data, function (i, food) {
                str = str + "<tr class=\"head\">" +
                    "<td  column2\">" + (i + 1) + ".</td>" + 
                    "<td  column2\">" + food.name + "</td>" +
                    "<td  column2\">" + food.kCal+ "</td>" +
                    "<td  column2\">" + food.quantity+ "</td>" +
                    "<td  column2\">" + food.type+ "</td>" +
                    "</tr>"
            });
            $("#table").html(str);
        },
        error: function () {
            $("#temp").html("error")
        }
    });
   
});

