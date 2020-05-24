$(document).ready(function()    {
  
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://localhost:8080/getAllExercises',
        dataType: "json",
        success: function (data) {
            var str = "<tr><th>Nr</th><th>Name</th><th>Reps</th><th>Sets</th><th>Rest Time</th></tr>";
            $.each(data, function (i, food) {
                str = str + "<tr class=\"head\">" +
                    "<td  column2\">" + (i + 1) + ".</td>" + 
                    "<td  column2\">" + food.name + "</td>" +
                    "<td  column2\">" + food.reps+ "</td>" +
                    "<td  column2\">" + food.sets+ "</td>" +
                    "<td  column2\">" + food.restTime+ "</td>" +
                    "</tr>"
            });
            $("#table").html(str);
        },
        error: function () {
            $("#temp").html("error")
        }
    });
   
});

