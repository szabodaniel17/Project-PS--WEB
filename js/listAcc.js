$(document).ready(function()    {
  
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://localhost:8080/getAllAccounts',
        dataType: "json",
        success: function (data) {
            var str = "<tr><th>Nr</th><th>Username</th><th>Password</th></tr>";
            $.each(data, function (i, user) {
                str = str + "<tr  body\">" +
                    "<td  column2\">" + (i + 1) + ".</td>" + 
                    "<td  column2\">" + user.username + "</td>" +
                    "<td  column2\">" + user.password+ "</td>" +
                    "</tr>"
            });
            $("#table1").html(str);
        },
        error: function () {
            $("#temp").html("error")
        }
    });
   
});

