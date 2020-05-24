$(document).ready(function()    {
   
    $("#uadd_btn").click(function(e)    {
        var username = $("#uusern").val();
        var password = $("#upassw").val();
        var name = $("#uname").val();
        var dat = $("#udate").val();
        var tel = $("#utel").val();
        var type = $("#type").val();
        
        
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/addNewUser?name='+name+'&date='+dat+'&phoneNumber='+tel+'&username='+username+'&password='+password,
                dataType: 'text',
                
                success: function(){
                    alert("User added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error login");
                }

        });
    });    
    
    $("#fadd_btn").click(function(e)    {    
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/addFoodItems?name='+$("#fname").val()+'&kCal='+$("#kcal").val()+'&quantity='+$("#quant").val()+'&type='+$("#type").val(),
                dataType: 'text',
                
                success: function(){
                    alert("FoodItem added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
    });
    
    $("#eadd_btn").click(function(e)    {  
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/addExercises?name='+$("#ename").val()+'&reps='+$("#reps").val()+'&sets='+$("#sets").val()+'&restTime='+$("#rest").val(),
                dataType: 'text',
                
                success: function(){
                    alert("Exercise added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
        
    });

    $("#uupdate_btn").click(function(e)    {
        var username = $("#usern").val();
        var password = $("#passw").val();
        var name = $("#name").val();
        var dat = $("#date").val();
        var tel = $("#tel").val();
        var type = $("#type").val();
        
        
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/updateUser?name='+name+'&date='+dat+'&phoneNumber='+tel+'&username='+username+'&password='+password,
                dataType: 'text',
                
                success: function(){
                    alert("User added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error login");
                }

        });

    });
        
    $("#fupdate_btn").click(function(e)    {   
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/updateFoodItem?name='+$("#fname").val()+'&kCal='+$("#kcal").val()+'&quantity='+$("#quant").val()+'&type='+$("#type").val(),
                dataType: 'text',
                
                success: function(){
                    alert("FoodItem added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
    });
        
    $("#eupdate_btn").click(function(e)    {  
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/updateExercises?name='+$("#ename").val()+'&reps='+$("#reps").val()+'&sets='+$("#sets").val()+'&restTime='+$("#rest").val(),
                dataType: 'text',
                
                success: function(){
                    alert("Exercise added succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
        
    });
    

    $("#udel_btn").click(function(e)    {
        var username = $("#uusern").val();
        var password = $("#upassw").val();
        var name = $("#uname").val();
        var dat = $("#udate").val();
        var tel = $("#utel").val();
        var type = $("#type").val();
        
        
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/removeUser?username='+username,
                dataType: 'text',
                
                success: function(){
                    alert("User removed succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error login");
                }

        });
       
    });
    
    $("#fdel_btn").click(function(e)    {
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/removeFoodItems?name='+$("#fname").val()+'&kCal='+$("#kcal").val()+'&quantity='+$("#quant").val()+'&type='+$("#type").val(),
                dataType: 'text',
                
                success: function(){
                    alert("FoodItem removed succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
        
    });

    $("#edel_btn").click(function(e)    {
        $.ajax({
                type: 'POST',
                //contentType:"application/json",
                
                url: 'http://localhost:8080/removeExercises?name='+$("#ename").val()+'&reps='+$("#reps").val()+'&sets='+$("#sets").val()+'&restTime='+$("#rest").val(),
                dataType: 'text',
                
                success: function(){
                    alert("Exercise removed succesfully!");
                    console.log("Succes");
                },
                error: function(){
                    
                    console.log("Error");
                }

        });
        
    });

});


