$(document).ready(function()    {
   
    $("#eadd_btn").click(function(e)    {
       
        $.ajax({
            type: 'POST',
                //contentType:"application/json",
                
            url: 'http://localhost:8080/addTrainerExercises?name='+ $("#ename").val()+'&reps='+$("#reps").val()+'&sets='+$("#sets").val()+'&restTime='+$("#rest").val(),
            dataType: 'text',
                
            success: function(){
                alert("Exercise added succesfully!");
              console.log("Succes");
            },
            error: function(){
                    console.log("Error login");
            }

         });
       
        
    });

    $("#add_btn").click(function(e)    {

        $.ajax({
            type: 'POST',
            //contentType:"application/json",
                
            url: 'http://localhost:8080/addFoodItem?name='+ $("#fname").val()+'&kCal='+$("#kcal").val()+'&quantity='+$("#quant").val()+'&type='+$("#type").val(),
            dataType: 'text',
                
            success: function(){
                alert("FoodItem added succesfully!");
                console.log("Succes");
            },
            error: function(){
                    
                console.log("Error login");
            }

        });
    });
    
    $("#exrep").click(function(e)    {

        $.ajax({
            type: 'GET',
            //contentType:"application/json",
                
            url: 'http://localhost:8080/generateExerciseReport',
            dataType: 'text',
                
            success: function(){
                alert("Report generated succesfully");
                console.log("Succes");
            },
            error: function(){
                    
                console.log("Error login");
            }

        });
    });
    
    $("#foodrep").click(function(e)    {

        $.ajax({
            type: 'GET',
            //contentType:"application/json",
                
            url: 'http://localhost:8080/generateFoodReport',
            dataType: 'text',
                
            success: function(){
                alert("Report generated succesfully");
                console.log("Succes");
            },
            error: function(){
                    
                console.log("Error login");
            }

        });
    });  


});


