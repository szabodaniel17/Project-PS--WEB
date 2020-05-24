$(document).ready(function()    {
    $("#request_temp").click(function(e)    {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/getAllUsers',
            dataType: 'json',
            success: function(data){
               // $("#temp").attr("placeholder", (data.main.temp - 273.15));
              /*  var show;
                $.each(data,function(i,user){
                    show = show + user + ", ";
                    
                    console.log(show);
                })
                $("#temp").attr("placeholder",show);
                console.log(data);*/
                showUsers(data);
            },
            error: function(){
                $("#temp").html("error")
            }

        });

        function showUsers(data) {
            // and here you show users on page
            //following code just example
            var str = '';
            //$("#temp").append("<option value='-1'>Select User</option>");
                for ( var i = 0, len = data.length; i < len; ++i) {
                    var user = data[i];
                    str += user.username + ", ";
                    //$("#temp").append("<option value=\"" + user.username + "\">" + "</option>");
                    console.log(user.username);
            }
            $("#temp").attr("placeholder",str);
        }
    });


});

