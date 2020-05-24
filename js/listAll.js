$(document).ready(function()    {
  
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://localhost:8080/getAllUsers',
        dataType: "json",
        success: function (data) {
            var str = "<tr><th>Nr</th><th>Name</th><th>Date of birth</th><th>Phone number</th></tr>";
            $.each(data, function (i, user) {
                str = str + "<tr class=\"head\">" +
                    "<td  column2\">" + (i + 1) + ".</td>" + 
                    "<td  column2\">" + user.name + "</td>" +
                    "<td  column2\">" + user.dateOfBirth+ "</td>" +
                    "<td  column2\">" + user.phoneNumber+ "</td>" +
                    "</tr>"
            });
            $("#table").html(str);
        },
        error: function () {
            $("#temp").html("error")
        }
    });
   
});

