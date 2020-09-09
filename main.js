$(document).ready(function(){
    
    $(".cell").click(function(){
      let v = $(this).text();
      let input = $("#CalcInput").val();
      if (v == "C") {
        input ="";
      }
      else if (v != "=") {
      if (input != ""){
          previous_input = input[input.length -1];
          if(!isNaN(previous_input))
          {            
                input = `${input}${v}`;        
          }
          if(isNaN(previous_input) && !isNaN(v))
          {            
                input = `${input}${v}`;        
          }

      }else{
        input = v;
      }  
    }
    else
    {
       input = eval(input.replace("x","*")) ;
    }    
       
     $("#CalcInput").val(input);
    });

    $(".cell").on({
        mouseenter: function(){
            $(this).addClass();
            $(this).removeClass();
        },
        mouseleave: function(){
            $(this).addClass();
            $(this).removeClass();
        }
    });
  });