$(document).ready(function()    {

    $("#login_btn").click(function(e)    {
        var username_in = $("#user").val().trim();
        var password_in = $("#pass").val().trim();
        if( username_in =='' || password_in ==''){
            $('input[type="text"],input[type="username"]').css("border","2px  red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Please fill all fields...!!!!!!");
            }
        $.ajax({
            type: 'POST',
            contentType:"application/json",
            //url: 'http://localhost:8080/checkLogin',
            url: 'http://localhost:8080/checkLogin?username='+username_in+'&password='+password_in,
           // data:JSON.stringify({username: username_in,
             //   password:password_in }),
            
            dataType: 'json',
            success: function(data){
                console.log("Succes");
                if(username_in =="admin")
                    window.location.replace('admin.html');
                else
                    window.location.replace('trainer.html');
            },
            error: function(){
                alert("Username or password incorrect");
                console.log("Error login");
            }

        });
    });


});


